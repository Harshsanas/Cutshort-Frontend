import React from "react";
import styled from "styled-components";

const PLANNINGCONATINER = styled.div`
  h2 {
    text-align: center;
  }
  .description {
    margin-top: -15px;
    font-size: 13px;
    color: gray;
    font-weight: 600;
    text-align: center;
  }

  .bodydivcontainer {
    display: flex;
    margin:4vh 0 1vh 0;
    .description1 {
      font-size: 13px;
      color: gray;
      font-weight: 600;
    }

    .myselfcontainer {
      border: 1px solid gray;
      width: 150px;
      margin: 0 10px 0 6.5vw;
      border-radius: 5px;
      padding: 20px;
    }

    .myselfcontainer:hover {
      border: 1px solid #664de5;
      margin: 0 10px 0 6.5vw;
      cursor: pointer;
    }
  }
`;

export default function Planning() {
  return (
    <div>
      <PLANNINGCONATINER>
        <h2>How are you planning to use Eden?</h2>
        <p className="description">
          We'll streamline your setup experience accordingly.
        </p>
        <div className="bodydivcontainer">
          <div className="myselfcontainer">
            <h4>For myself</h4>
            <p className="description1">
              Write better. Think more clearly. Stay organized
            </p>
          </div>
          <div className="myselfcontainer">
            <h4>For team</h4>
            <p className="description1">
              Wikis, docs, tasks & projects, all in one place.
            </p>
          </div>
        </div>
      </PLANNINGCONATINER>
    </div>
  );
}
