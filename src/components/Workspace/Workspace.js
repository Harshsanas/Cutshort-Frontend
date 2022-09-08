import React from 'react'
import styled from 'styled-components';

const WORKSPACECONATINER = styled.div`
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

export default function Workspace() {
  return (
    <div>
      <WORKSPACECONATINER>
        <h2>Let's set up a home for all  your work</h2>
        <p>You can always create another workspace later.</p>
        <div>
          <label htmlFor="">Workspace Name</label>
          <input type="text" placeholder="Enter your workspace name here..." />
        </div>
        <div>
          <label htmlFor="">Workspace URL <span>(optional)</span></label>
          <input type="text" placeholder="Example" />
        </div>
      </WORKSPACECONATINER>
    </div>
  )
}
