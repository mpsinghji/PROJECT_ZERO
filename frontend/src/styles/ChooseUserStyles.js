import styled from 'styled-components';
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background_image.jpeg"

// Container for the entire page
export const ChooseUserContainer = styled.div`
  display: flex;
  justify-content: center; /* Aligns items horizontally */
  align-items: center; /* Aligns items vertically to center */
  height: 100vh; /* Full height */
  position: fixed; /* Fixed position so it stays in place */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${backgroundImage}) no-repeat center center fixed; /* Background image */
  background-size: cover;
  flex-direction: column;
  gap: 70px; /* Space between the child elements (user section boxes) */
  color: white;
  overflow: hidden; /* Prevent scrolling */
  z-index: 1;

  /* Overlay div will now be in this container */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7); /* Semi-transparent black overlay */
    z-index: -1; /* Ensures it stays behind the content */
  }
`;

export const QuoteContainer = styled.div`
  position: absolute;
  top: -190px; /* Positioning from the top of the user section */
  right: -350px; /* Position it on the right side */
  font-size: 1.7rem;
  font-weight: bold;
  color: white;
  white-space: nowrap;
  padding: 5px;
  max-width: 100px; /* Control the length of the quote */
`;

export const Chotaquote = styled.div`
  position: absolute;
  top: -160px; /* Positioning from the top of the user section */
  right: -90px; /* Position it on the right side */
  font-size: 1.7rem;
  font-weight: bold;
  color: white;
  white-space: nowrap;
  padding: 5px;
  max-width: 100px; /* Control the length of the quote */
`;

// Style for each user section box
export const UserSection = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.9);
  padding: 20px;
  width: 250px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

// Style for titles (Admin, Student, Teacher)
export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 15px;
`;

// Style for the buttons (Login buttons)
export const Button = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }

  &:active {
    background-color: #1f6f8b;
  }
`;

