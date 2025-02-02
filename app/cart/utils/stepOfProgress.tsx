import React from "react";

function StepOfProgress() {
  return (
    <div className="mb-5">
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Deleivery Location</li>
        <li className="step">Bank Account Information</li>
        <li className="step">Completed!</li>
      </ul>
    </div>
  );
}

export default StepOfProgress;
