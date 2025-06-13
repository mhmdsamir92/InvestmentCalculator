import InputGroup from "./components/InputGroup";
import ResultsTable from "./components/ResultsTable";
import { calculateInvestmentResults } from "./util/investment.js";
import { useState } from "react";
import {
  INITIAL_INVESTMENT,
  ANNUAL_INVESTMENT,
  EXPECTED_RETURN,
  DURATION,
} from "./event-handlers.js";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(15000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  const eventHandlers = {
    INITIAL_INVESTMENT: setInitialInvestment,
    ANNUAL_INVESTMENT: setAnnualInvestment,
    EXPECTED_RETURN: setExpectedReturn,
    DURATION: setDuration,
  };

  const handleInputChange = (event, eventName) => {
    eventHandlers[eventName](Number(event.target.value));
  };

  const investmentResults = calculateInvestmentResults({
    initialInvestment: initialInvestment,
    annualInvestment: annualInvestment,
    expectedReturn: expectedReturn,
    duration: duration,
  });

  return (
    <>
      <InputGroup
        inputChangeHandler={handleInputChange}
        initialValues={{
          initialInvestment,
          annualInvestment,
          expectedReturn,
          duration,
        }}
      />
      <ResultsTable results={investmentResults} />
    </>
  );
}

export default App;
