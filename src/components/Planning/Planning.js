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
    margin: 4vh 0 1vh 0;
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
      box-shadow: 0 0 3px 3px #664DE5, 0 0 1px 1px #664de5;
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
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAlCAIAAABDFxcuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAANiSURBVEhL5Vb5TxNBGPUfFO8DEYPBcMt9BgRRSNAEiAdETCAIKKcghxADiGiAopEjEC65RNpt6bXbdttuu118pQNxp91CIcREX95v+733dme+/WbO7J4+/p8Mt1syG8XVBWFm0jE2xA91W8HPH2zTKsf2hou3eUidMoJlSJIkipJhR5yacLx5wVYWGnKjtTFn1WBGJFOer+9vtazMOy2siDKAyPwQLMMleL+gs54rTd+BafI1TcIFbwAYd16dfFWTE8WUZe50NXBmg+h2HStje9PVXssWJ+kSLxFrf+IRClCm/unGqhKlHIoZdt4zOcpnRjIJF2lfiihAmWrEzhpFIpZDMWNzVWirZWPDaMeARFnjM/PCtJOI5VDMmPjIP87dobyCEC0wPswTsRyKGb3NXMZNDWUUhHl3tAMdFiKWQzGj5SVLuRxKSIhYjr+a0fOaS7sRwlqlXNe8a+SIWA7FjNEB28MUHWUUhA/u6oZ7bUQsh2LGjMpeVWKkjIKwqYpdnA2xdzVbrr4WC1YAY4Oyo4gClGFcmgwh/oMYVgvTjooCfdYtJu4c7XtAPEJBRb5+a91FlH5QzMActXKetSWhutSYGq64+XiEgrVFAbOHKP2gmAGIbgnK+e+O962WmkemokQdRq/POj2CuZ+kq7xneFvPzagcdpsH453I/BAs4wAYdvNTzr5WS/0TMxoBbKo297dbJkd45pcbq0rqFHCkjBPi8AyjTlyadY4O8O21XG25yfcd+KDOV9xgt3V9ScBCkVIFKGZgfXGIri8Lwz3WhmfminxDXrQ26TLZDzRrQay2LEvfXMOODfIos1kUtyRAhvdoliTe6lmccWLdYe3zVSIKmqrZHwsCJD4tMdpHgAyPR3I6pLFh/mmxITuKCXLQ+oiC7Cjt8xIjJBBCToz2ESAD/bo856yrNKWGMhPTIpi6SvPyXIAfhc7AW+i17o46tighhIHoIyTtdZxO7aY2hs7AW+BYLozXxe9fc45OSApitKpPdpNeNrjojI0VoasxtJPjT6aFa/Dno82I3R7ojG9f7JiDBz0aKpOuaNApU+N2YrcHOgNHU2G89hgL5SPmfM5tBr8UsdsDnYG7BQbfEa9VARjmbeX+NtkFhc74Ouo9/k5ImBC7PdAZp4F/I2N39zfNsdqn1+XRlAAAAABJRU5ErkJggg=="
              alt=""
              className="divimg"
            />
            <h4>For myself</h4>
            <p className="description1">
              Write better. Think more clearly. Stay organized
            </p>
          </div>
          <div className="myselfcontainer">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAkCAIAAACfaVRCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAASzSURBVFhH7ZeLU1NXEMb7VxW0KJWHvBS0WAsEEiIgaUAEg8JAUUEUjIpSoGB4VKygtoQSyhsECgFUBGHQGCC8IRDeEBIIz37MuXMnuY23SadT2xm+2ckwZ87d/d09Z3cvn+19av0/CXZ3d7e3t7Va3ez84rRmTj09O6OZX1hcXl/f2NnZoTZZrL9DgPCLSyuyysbvkjMEkYm8b+PDom+mZRV29Sq0azpqk8WymmDDsDk5pcn/qTQ0MtHlq1A7V66to99Rd95pzsXY6/er61tXtTogUrstkNUESHtNQ5tv0JXDzv6fO/gaG2jiktK7ehRrOj212wJZTdD26q0o/o6jZzAjPDEvv4jE29mTUzPUbgtkNQGO3/1r4eHjzAQQO3bi3PmL14dHJ6jdFshqgmfS6kPOHEZg2g45+58NFA0MjVG7LZDVBCWyumMn+LZOfozYtHn5XugfHKF2WyCrCaob5N/wo4+4chmBibl6Cy4n3B2bUFO7LRAbAQoP3aZZ3iktr4fVN3VMqjXdvR++zyny9An/cxpwBELRjbKKF1PTs8qBkZoX8uelNWUVje2vetbW9Ftb5kuUjWB6BoUnF0Ql4eY7nAziCuKq6luHRycVyqFLcWI3b4GdSwAC2yC2E8fOhevpeyE7/xmglYMjuYUlqNgvXAKQlStX0xT9Q6vaNcqvqdgIZFVNgsgkxLZ14sBwzyNiUiprW9D4evqUyERASOx+bFeu+xkBTxBX/Evl0MiEZnYhLfOxX3DMETeejeN+Yk76hF9LyfrQP0z5NRUbQU7Bz05eITaOVLbxB14or1CK5o+e0/d+oLyqKe+xtODJr4hdUdOM9KxvGDAjwkQ37d355CkY0oPr+bKzl/JrKjaCjIdFjBuHrKbnPNnZ2cUQwlgaHVerhscHVKP4HZ+cnl9YwjrOLij8qnHDADr8tLS/ofyaio0Ab4biRv6JI/R/nPSj4jKDYXNQNVZYLLsUL/Y/H+sdEIVf9GO0CtDMzS9eu5XlcVZIExx146F8Xnf1UX5NxUbQ+67/h9ynGDk46S89+D786AxJcVVdS0Pzy1v3cnHw9GTCL0KeC0vIlBS3tnf9Vt2ckJzhcjoU9MdPheAyoSg+1qrZCHQ6vUKpypQ8xRRGt8f1Rl2VljegEBw8g+hXNLYz3KiUtLzO7ncAFT8owLRMvZ8nldXh6wGZo/yaio2Aoc3NLRCAhhGVYbitZZWNqEnqsb8SG4FqeAL5vP0gv+N1Dz5JcMt+LCrjCeIZIRmG88Kr4yzQgpaWV9FR8DGBrMAD5ddU5gkMm/vdEIcXEZOKzlNR+/vyyioqEGWNs2eEZBiqwDsgEuMD3ykrK1rcDE5wTPIdSUvbm9m5BSqAkcwTEHahKJk4bW7txCKaGvojHeljhtqz9whEyRBX9zILyTro5R3dZNFY5gnQ/2+IH57yiyAPW0UAQwmgUxFXNAEKG72LLBrLPAGaK1+YYO8eSB62lgAmeVRCXNEE9h58cXoBWTSWeQIMePRR2t0/QgBLTM0mi8Y6IDgg2Nd/lWBKrcH0i064S6xPMYhFvX49O/85vchutY1txBX+v6AXMb7JorHME/ybOiD49AR7e38AkPkGUFbSpHoAAAAASUVORK5CYII="
              alt=""
              className="divimg"
            />
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
