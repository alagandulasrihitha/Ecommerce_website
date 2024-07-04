import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";


const HeroSection =({myData}) =>{

  const { name } = myData;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>{name}</h1>
            <p> first website made by srihitha alagandula enjoy!!</p>
            <NavLink to="/shop">
              <Button>shop now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img
                src="WIN_20231229_20_44_04_Pro.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 12rem 0;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 2rem;
  }

  img {
    min-width: 10rem;
    height: 20rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;
    width: 100%;
    max-width: 500px;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      transform: translateX(-50%);
      z-index: -1;
    }
  }

  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      grid-template-columns: 1fr;
      gap: 10rem;
    }

    figure::after {
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;


