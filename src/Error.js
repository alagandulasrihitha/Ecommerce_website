import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";
function Error(){
return (
<Wrapper>
<div className="container">
    <div>
        <h2>
            404
        </h2>
        <h3>
          OH!YOU'VE LOST
        </h3>
        <p>
            U entered an unknown page. The page you are looking for doesnot exist.
            But you cam click the button to go back to the homepage
        </p>
        <Button>
        <NavLink to="/">Home</NavLink>
        </Button>
    </div>
</div>
</Wrapper>
);
};
const Wrapper=styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

export default Error;