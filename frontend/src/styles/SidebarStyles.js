import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


export const SidebarContainer = styled.div`
  position: fixed;
  top: 0; /* Centers the sidebar vertically */
  left: 0;
  width: 250px;
  height: 94%;
  background-color: #1A252F;
  color: #ECF0F1;
  padding-top: 50px;
  z-index: 100;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.4);
  transition: width 0.3s ease-in-out;
  overflow-y: auto; /* Enable scrolling */
  scrollbar-width: none; /* Hide scrollbar in Firefox */
  -ms-overflow-style: none; /* Hide scrollbar in Internet Explorer */
  font-family: "Arial", sans-serif;


  ::-webkit-scrollbar {
    display: none; /* Hide scrollbar in Chrome, Safari, and Edge */
  }

  &:hover {
    // width: 260px;
  }

  @media screen and (max-height: 700px) {
    padding-top: 50px;
  }
`;



export const SidebarHeader = styled.div`
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
  color: #ECF0F1;

  &.active {
    background-color: #34495E;
    padding-left: 30px;
    color: #1ABC9C;
    border-left: 4px solid #1ABC9C;
  }

  &:hover {
    background-color: #34495E;
    padding-left: 30px;
    color: #1ABC9C;
    border-left: 4px solid #1ABC9C;
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
  width: 160px;
  height: 50px;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const DropdownMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: #1A252F;
  padding: 0.5rem;
  // box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); 
  `;
  
  export const DropdownItem = styled.div`
  border-bottom: 1px solid #34495E; 
  border-left: 4px solid #1ABC9C;
  padding: 0.7rem; 
  cursor: pointer;
  color: #fff; 
  font-weight: 500; 
  border-radius: 3px; 
  transition: background 0.3s ease, color 0.3s ease;
  margin-left: 30px;

  &:hover {
    background: #007bff; 
    color: #ffffff; 
  }
`;
