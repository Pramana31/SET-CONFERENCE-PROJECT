import warnings
warnings.filterwarnings("ignore")

import sys
import json
import pandas as pd
import joblib
from collections import Counter

try:
    # Load models
    model1 = joblib.load("model_nb.pkl")
    model2 = joblib.load("model_knn.pkl")
    model3 = joblib.load("model_dt.pkl")

    scaler = joblib.load("scaler.pkl")
    encoders = joblib.load("encoders.pkl")

    # ✅ Use ONLY important columns
    important_cols = [
        'soil_type',
        'soil_pH',
        'temperature_avg_C',
        'humidity_pct',
        'rainfall_mm',
        'soil_moisture_pct',
        'pest_severity_score',
        'disease_severity_score',
        'pest_incidence_pct',
        'disease_incidence_pct',
        'lesion_area_pct',
        'alert_level',
        'urgency_score'
    ]

    # Input
    input_data = json.loads(sys.argv[1])
    df = pd.DataFrame([input_data])

    # Step 1: Handle empty
    df = df.replace('', 0)

    # Step 2: Numeric conversion
    df = df.apply(pd.to_numeric, errors='ignore')

    # Step 3: Encode categorical
    for col in df.columns:
        if col in encoders:
            le = encoders[col]
            value = df[col].astype(str)
            known_classes = list(le.classes_)

            df[col] = value.apply(
                lambda x: le.transform([x])[0] if x in known_classes else 0
            )

    # Ensure all important cols exist
    for col in important_cols:
        if col not in df.columns:
            df[col] = 0

    # Keep ONLY 13 features
    df = df[important_cols]

    # Cleanup
    df = df.apply(pd.to_numeric, errors='coerce').fillna(0)


    # Scale
    df_scaled = scaler.transform(df)

    # Predictions
    pred1 = model1.predict(df_scaled)[0]
    pred2 = model2.predict(df_scaled)[0]
    pred3 = model3.predict(df_scaled)[0]

    # Ensemble
    final_pred = Counter([pred1, pred2, pred3]).most_common(1)[0][0]

    #  Result
    result = "Healthy crop" if final_pred == 1 else "Unhealthy crop"

    #  Yield Calculations
    actual = float(input_data.get("actual_yield_ton_ha", 0))
    expected = float(input_data.get("expected_yield_ton_ha", 0))

    if expected > 0:
        yield_percentage = (actual / expected) * 100
        yield_loss_percentage = ((expected - actual) / expected) * 100
    else:
        yield_percentage = 0
        yield_loss_percentage = 0

    # Treatment Recommendation (Hybrid Logic)
    if final_pred == 1:
        treatment = "No action needed"
    else:
        # Simple hybrid logic (you can improve later)
        if yield_loss_percentage > 50:
            treatment = "Immediate pesticide & nutrient intervention required"
        elif yield_loss_percentage > 20:
            treatment = "Moderate treatment: Apply fertilizers and monitor pests"
        else:
            treatment = "Mild treatment: Regular monitoring recommended"

    # Step 13: Output
    print(json.dumps({
        "model1": int(pred1),
        "model2": int(pred2),
        "model3": int(pred3),
        "ensemble": int(final_pred),
        "result": result,
        "yield_percentage": round(yield_percentage, 2),
        "yield_loss_percentage": round(yield_loss_percentage, 2),
        "treatment": treatment
}))

except Exception as e:
    print(json.dumps({
        "error": str(e)
    }))