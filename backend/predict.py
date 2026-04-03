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
    columns = joblib.load("columns.pkl")

    # Get input from Node
    input_data = json.loads(sys.argv[1])
    df = pd.DataFrame([input_data])

    # Step 1: Handle empty values
    df = df.replace('', 0)

    # Step 2: Convert numeric safely
    df = df.apply(pd.to_numeric, errors='ignore')

    # Step 3: Encode categorical safely
    for col in df.columns:
        if col in encoders:
            le = encoders[col]
            value = df[col].astype(str)
            known_classes = list(le.classes_)

            df[col] = value.apply(
                lambda x: le.transform([x])[0] if x in known_classes else 0
            )

    # Step 4: One-hot encoding
    df = pd.get_dummies(df)

    # Step 5: Match training columns (CRITICAL FIX)
    for col in columns:
        if col not in df.columns:
            df[col] = 0

    # Remove extra columns
    df = df[columns]

    # Step 6: Final numeric cleanup
    df = df.apply(pd.to_numeric, errors='coerce').fillna(0)

    # Step 7: Scale input
    df_scaled = scaler.transform(df)

    # Step 8: Predictions from all models
    pred1 = model1.predict(df_scaled)[0]
    pred2 = model2.predict(df_scaled)[0]
    pred3 = model3.predict(df_scaled)[0]

    # Step 9: Ensemble (Majority Voting)
    final_pred = Counter([pred1, pred2, pred3]).most_common(1)[0][0]

    # Step 10: Convert to label
    result = "Healthy crop" if final_pred == 1 else "Non healthy crop"

    # Output JSON
    print(json.dumps({
        "model1": int(pred1),
        "model2": int(pred2),
        "model3": int(pred3),
        "ensemble": int(final_pred),
        "result": result
    }))

except Exception as e:
    # Return error instead of crashing server
    print(json.dumps({
        "error": str(e)
    }))