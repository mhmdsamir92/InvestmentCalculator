import UserInput from "./UserInput";
import {
  INITIAL_INVESTMENT,
  ANNUAL_INVESTMENT,
  EXPECTED_RETURN,
  DURATION,
} from "../event-handlers.js";

export default function InputGroup({ inputChangeHandler, initialValues }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <UserInput
          label="Initial Investment"
          onChange={(event) => inputChangeHandler(event, INITIAL_INVESTMENT)}
          value={initialValues.initialInvestment}
          type="number"
          min="0"
        />
        <UserInput
          label="Annual Investment"
          onChange={(event) => inputChangeHandler(event, ANNUAL_INVESTMENT)}
          value={initialValues.annualInvestment}
          type="number"
          min="0"
        />
      </div>
      <div className="input-group">
        <UserInput
          label="Expected Return"
          onChange={(event) => inputChangeHandler(event, EXPECTED_RETURN)}
          value={initialValues.expectedReturn}
          type="number"
          min="0"
        />
        <UserInput
          label="Duration"
          onChange={(event) => inputChangeHandler(event, DURATION)}
          value={initialValues.duration}
          type="number"
          min="0"
        />
      </div>
    </div>
  );
}
