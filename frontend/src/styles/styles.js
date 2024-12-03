import styled from 'styled-components';

// HomeContainer: used to display the content with the video background
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: fixed; /* Fix the container to the screen */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden; /* Prevent scrolling */
  z-index: -1; /* Make sure the content is above the video */
  font-family: "Arial", sans-serif;


  /* Add background video */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${props => props.background}) no-repeat center center;
    background-size: cover;
    opacity: 0.5; /* Optional: Reduce video opacity to make text stand out */
    z-index: -1;
  }
`;

// Title: Styling for the title of the page
export const Title = styled.h1`
margin-top: 300px;
  font-size: 36px;
  font-weight: bold;
  color: #FFFFFF; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;
  margin-bottom: 20px;
`;

// ButtonsContainer: A container for buttons, positioned below the title
export const ButtonsContainer = styled.div`
  z-index: 1;
  margin-top: 20px;
`;

// LoginButton: Styling for the sign-in button
export const LoginButton = styled.button`
  background-color: #FFA500;
  color: #FFFFFF; 
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;

  &:hover {
    background-color: #FF7F00;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
    margin: 0;
  }
`;

// CollegeInfo: Contains the college-related information and links
export const CollegeInfo = styled.div`
  margin-top: 20px;
  padding: 0 20px;
  z-index: 1;
`;

// CollegeVideo: Container for the video background (optional opacity for the video)
export const CollegeVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6; /* Optional: Set the opacity of the video to make it less distracting */
`;

// NavLink: Styled component for navigation links
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

// AdminRegisterLink: A link for admin registration (if needed)
export const AdminRegisterLink = styled.div`
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
