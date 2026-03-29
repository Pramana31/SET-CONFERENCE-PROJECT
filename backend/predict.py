import warnings
warnings.filterwarnings("ignore")
import sys
import json
import pandas as pd
import joblib

model = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")
encoders = joblib.load("encoders.pkl")
columns = joblib.load("columns.pkl")

input_data = json.loads(sys.argv[1])

df = pd.DataFrame([input_data])

# Convert numeric safely
for col in df.columns:
    try:
        df[col] = pd.to_numeric(df[col])
    except:
        pass

# Encode categorical safely
for col in df.columns:
    if col in encoders:
        le = encoders[col]
        value = df[col].astype(str)
        known_classes = list(le.classes_)

        df[col] = value.apply(
            lambda x: le.transform([x])[0] if x in known_classes else 0
        )

# Match columns
df = df.reindex(columns=columns, fill_value=0)

df = df.apply(pd.to_numeric, errors='coerce').fillna(0)

# Scale
df_scaled = scaler.transform(df)

# Predict
prediction = model.predict(df_scaled)[0]

print(json.dumps({"result": int(prediction)}))