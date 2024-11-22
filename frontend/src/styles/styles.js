import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #9370DB; 
  color: #FFFFFF; 
  font-family: Arial, sans-serif;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.img`
  width: 110px;
  height: auto;

  @media screen and (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 10px;
  
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    display: ${({ show }) => (show ? 'flex' : 'none')};
    margin-top: 10px;
    padding: 0 20px;
  }
`;

export const NavLink = styled.a`
  margin: 0 20px;
  color: #FFFFFF; 
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    margin: 10px 0;
    font-size: 16px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding-right: 40px;
  
  
  @media screen and (max-width: 768px) {
    flex-direction: row;
    margin-top: 0;
    margin-right: 300px;
    padding-left: 7px;
    }
    `;
    
    export const LoginButton = styled.button`
    background-color: #FFA500;
    color: #FFFFFF; 
    border: none;
    padding: 10px 20px;
    margin-top: 10px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
    margin: 0;
  }
`;




export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(45deg, #00bcd4, #0088d4, #e4e6e7);
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding-top: 80px;

  @media screen and (max-width: 768px) {
    padding-top: 60px;
  }
`;

export const CollegeInfo = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

export const CollegeImage = styled.img`
  width: 80%;
  max-height: 80vh;
  object-fit: cover;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #FFFFFF; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;




export const AdminRegisterLink = styled(Link)`
  color: #FFFFFF; 
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;






