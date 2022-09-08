import React from 'react'
import styled from "styled-components"

const WELCOMECONATINER = styled.div`
  h2 {
    text-align: center;
  }
  p {
    margin-top: -15px;
    font-size: 13px;
    color: gray;
    font-weight: 600;
    text-align: center;
  }

  div {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    margin: 20px 140px 0 140px;

    label {
      font-size: 14px;
      color: gray;
      font-weight: 600;
    }

    input {
      border: 1px solid lightgray;
      border-radius: 3px;
      padding: 10px;
      margin-top: 8px;
    }
  }
`;

export default function Welcome() {
  return (
    <div>
      <WELCOMECONATINER>
        <h2>Welcome! First things first...</h2>
        <p>You can always change them late!</p>
        <div>
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="Enter your full name here..." />
        </div>
        <div>
          <label htmlFor="">Display Name</label>
          <input type="text" placeholder="Display your name here..." />
        </div>
      </WELCOMECONATINER>
    </div>
  );
}
