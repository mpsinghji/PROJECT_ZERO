import React from "react";
import {
  NavLink,
  ButtonsContainer,
  LoginButton,
  HomeContainer,
  CollegeInfo,
  Title,
} from "../styles/styles.js";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/choose-user')
  };

  return (
    <>
        <HomeContainer>
            <CollegeInfo>
                <Title>College Management System</Title>
                <NavLink as={Link} to="/about-me">About Me</NavLink>
                <NavLink onClick={()=>handleNavigation("#")}>Still Figuring</NavLink>
                <NavLink onClick={()=>handleNavigation("#")}>Still Figuring</NavLink>
            </CollegeInfo>
            <ButtonsContainer onClick={handleLoginClick}>
                <LoginButton>Sign In</LoginButton>
            </ButtonsContainer>
        </HomeContainer>
    </>
  )
};

export default Home;
