import React from "react";
import styled from "styled-components";

const CONGRATULATIONCONATINER = styled.div`
  h1 {
    text-align: center;
  }
  .description {
    margin-top: -15px;
    font-size: 13px;
    color: gray;
    font-weight: 600;
    text-align: center;
  }
`;
export default function Congratulation() {
  return (
    <div>
      <CONGRATULATIONCONATINER>
        <h1>Congratulations, Workspace created!</h1>
        <p className="description">You have completed onboarding, you can start using the Eden!
        </p>
      </CONGRATULATIONCONATINER>
    </div>
  );
}
