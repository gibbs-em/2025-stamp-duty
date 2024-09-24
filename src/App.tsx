import { useState } from "react";
import "./App.css";

function App() {
  const [propertyValue, setPropertyValue] = useState(
    undefined as number | undefined
  );
  const [stampDuty, setStampDuty] = useState(undefined as number | undefined);

  const handleCalculateStampDuty = () => {
    if (propertyValue === undefined) {
      return;
    }

    let calculatedStampDuty = 0;
    if (propertyValue > 300000 && propertyValue <= 500000) {
      calculatedStampDuty = (propertyValue - 300000) * 0.05;
    } else if (propertyValue > 500000) {
      calculatedStampDuty = (propertyValue - 500000) * 0.1;
    }

    setStampDuty(calculatedStampDuty);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCalculateStampDuty();
    }
  };

  return (
    <>
      <h1>2025 stamp duty calculator</h1>
      <div className="card">
        <h2>Enter the property value</h2>
        <input
          type="number"
          className="input"
          value={propertyValue === 0 ? "" : propertyValue}
          onChange={(e) => setPropertyValue(Number(e.target.value))}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleCalculateStampDuty}>Calculate stamp duty</button>
        {stampDuty !== undefined && (
          <p>
            Stamp duty for a property value of <strong>£{propertyValue}</strong>{" "}
            is <strong>£{stampDuty}</strong>
          </p>
        )}
      </div>
    </>
  );
}

export default App;
