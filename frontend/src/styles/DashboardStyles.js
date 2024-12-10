import styled from 'styled-components';

export const AdminDashboardContainer = styled.div`
  display: flex;
  margin-left: 200px;
`;


export const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 50px;
`;

export const TopContent = styled.div`
  display: flex;
  gap: 20px;
  flex: 1; 
`;

export const BottomContent = styled.div`
  display: flex; 
  position:absolute;
  left:5rem;

`;

export const Section = styled.section`
  margin-bottom: 40px;
  flex: 1; 
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333; 
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  flex: 1;
  max-width: 250px;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #007bff; 
`;

export const CardContent = styled.p`
  font-size: 16px;
  color: #555555;
`;

export const StudentDashboardContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;


export const TeacherDashboardContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;

