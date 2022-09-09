import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import Welcome from "../Welcome/Welcome";
import Workspace from "../Workspace/Workspace";
import Planning from "../Planning/Planning";
import Congratulation from "../Congratulation/Congratulation";
import styled from "styled-components";

const STEPPERCONTAINER = styled.div`
  width: 40%;
  margin: 15vh auto 0 auto;
  .logoimg {
    margin-left: 16vw;
  }

  h2 {
    text-align: center;
  }
`;
export default function Main() {
  const [createStep, setCreateStep] = useState(0);
 
  return (
    <div>
      <STEPPERCONTAINER>
        <img src="/logo.png" alt="" className="logoimg" />
        <Stepper activeStep={createStep}>
          <Step onClick={() => setCreateStep(0)} />
          <Step onClick={() => setCreateStep(1)} />
          <Step onClick={() => setCreateStep(2)} />
          <Step onClick={() => setCreateStep(3)} />
        </Stepper>

        {createStep === 0 && (
          <div className="btnWorkspace">
            <Welcome />
            <button className="btnWorkspace" onClick={() => setCreateStep(1)}>
              Create Workspace
            </button>
          </div>
        )}
        {createStep === 1 && (
          <div className="btnWorkspace">
            <Workspace />
            <button className="btnWorkspace" onClick={() => setCreateStep(2)}>
              Create Workspace
            </button>
          </div>
        )}
        {createStep === 2 && (
          <div className="btnWorkspace">
            <Planning />

            <button className="btnWorkspace" onClick={() => setCreateStep(3)}>
              Next
            </button>
          </div>
        )}
        {createStep === 3 && (
          <div className="btnWorkspace">
            <Congratulation />

            <button className="btnWorkspace" onClick={() => setCreateStep(4)}>
              Launch Eden
            </button>
          </div>
        )}
      </STEPPERCONTAINER>
    </div>
  );
}
