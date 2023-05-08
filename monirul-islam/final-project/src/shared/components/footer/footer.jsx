import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  

  return (
    
    <ThemeProvider theme={theme}>
      <Wrapper >
        {/* <div className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
            <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
                </Button>
            </div>
          </div>
        </div> */}
        {/* footer section */}

        <footer className="w-full bg-gray-100 pt-12 md:pt-24 pb-6 flex-shrink-0">
          <div className="w-3/4 mx-auto text-gray-800 flex flex-col md:flex-row justify-top items-top">
            <div className="footer-about">
              <h3>E-Shop</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe" style={{paddingRight:"10px"}}>
              <h3>Contact Us </h3>
              <h3>Email: monirul@gmail.com
                <br/>
                Phone:+9112345678978
               <br/>We are at your disposal by phone
                Mon - Fri from 10:00 a.m. - 6:00 p.m
                to disposal</h3>
            </div>
            <br/>
            <div className="footer-subscribe" style={{paddingRight:"10px"}}>
              <h3>Subscribe to Us</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />
                
                <Button type="submit" className="btn hireme-btn" style={{padding:"10px"}}>
                <NavLink to="#"> Subscribe </NavLink>
                </Button>
              </form>
            </div>
            
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_blank">
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact pl-6 w-1/5">
              <h3>Services</h3>
              <h3>
              FAQ 
              Payment
              Shipping
              Return
               Watchfinder
              </h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="flex flex-col">
              
              <p style={{textAlign:"left",paddingLeft:"20px"}}>
                @{new Date().getFullYear()} E-Shop. All Rights Reserved
              </p>
              
                <p style={{textAlign:"center"}}>PRIVACY POLICY 
                <p>TERMS & CONDITIONS</p></p>
              
            </div>
          </div>
        </footer>
      </Wrapper>
      </ThemeProvider>
    
  )
}

export default Footer;

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    max-height: 2vw;
    margin: auto;
    padding: 2rem 3rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(30%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 5rem 0 3rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 1.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 1rem;

      div {
        padding: 1rem;
        border-radius: 20%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 1.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 2rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
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
      padding: 2rem 0 2rem 0;
    }

    .footer-bottom--section {
      padding-top: 2.8rem;
    }
  }
`;
