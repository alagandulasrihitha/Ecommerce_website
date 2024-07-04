import React from "react"; 
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  console.log("Footer component is rendering"); // Debugging line
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Kalki Technical</h3>
            <p>Minguki minguki minguki triplets</p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" placeholder="Your e-mail" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaTwitter className="icons" />
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>
                Call Us
            </h3>
            <a href="tel:12345678978">
                +91 12345678978
            </a>
          </div>
        </div>
        <div className="footer-bottom--section">
            <hr/>
            <div className="container grid grid-two-column">
                <p>
                    @2024 KalkiTechnicals.All Rights Reserved
                </p>
                <div>
                    <p>
                        PRIVACY POLICY
                    </p>
                    <p>
                        TERMS & CONDITIONS 
                    </p>
                </div>
            </div>
        </div>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: #f1f1f1;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(50%);

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: #333;
    color: #fff;

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap:4rem;
    }
    
    h3 {
      margin-bottom: 2.4rem;
    }
    
    p {
      color: #fff;
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid #fff;

        .icons {
          color: #fff;
          font-size: 2.4rem;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0;
      
      .grid {
        grid-template-columns: 1fr;
        gap: 3.2rem;
      }
    }
  }
`;

export default Footer;
