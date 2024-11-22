import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px;
  background: linear-gradient(135deg, #6DD5FA, #FFFFFF);
  background-attachment: fixed;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 20px;
    justify-content: flex-start;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.9); 
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); 

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
  border: 5px solid #4CAF50;

  @media (max-width: 768px) {
    margin-bottom: 15px;
    margin-right: 0;
  }
`;

export const Bio = styled.div`
  font-size: 18px;
  color: #333;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
  }
`;

export const Title = styled.h1`
  color: #333;
  font-size: 36px;
  margin-bottom: 30px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); 

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const SectionTitle = styled.h2`
  color: #4CAF50;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 18px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;
