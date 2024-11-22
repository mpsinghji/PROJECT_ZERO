import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 92%;
  background-color: #1A252F;
  color: #ECF0F1;
  overflow-y: auto; 
  padding-top: 70px;
  z-index: 100;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.4);
  transition: width 0.3s ease-in-out;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none; 

  &:hover {
    width: 260px;
  }
`;

export const SidebarHeader = styled.div`
  // padding: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #FFFFFF;
  border-bottom: 1px solid #34495E;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  font-size: 18px;
  border-bottom: 1px solid #34495E;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: #34495E;
    padding-left: 30px;
    color: #1ABC9C;
    border-left: 4px solid #1ABC9C;
  }
  
  @media screen and (max-height: 700px) {
    padding: 10px 15px; 
    font-size: 16px; 
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  letter-spacing: 1px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #1ABC9C;
  }
`;

export const SidebarIcon = styled.div`
  margin-right: 15px;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 60px;
  height: auto;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;


export const DropdownMenu = styled.div`
  margin-left: 1.5rem;
  display: flex;
  flex-direction: column;
    background-color: #1A252F;
  // border: 1px solid #ccc; 
  // border-radius: 5px;
  padding: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); 
`;

export const DropdownItem = styled.div`
  padding: 0.7rem; 
  cursor: pointer;
  color: #fff; 
  font-weight: 500; 
  border-radius: 3px; 
  transition: background 0.3s ease, color 0.3s ease;
  // text-align:center;
  margin-left:30px;

  &:hover {
    background: #007bff; 
    color: #ffffff; 
  }
`;