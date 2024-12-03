import styled from 'styled-components';

export const AnnouncementContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 240px;
  font-family: "Arial", sans-serif;


  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const AnnouncementForm = styled.form`
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const AnnouncementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AnnouncementItem = styled.li`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const AnnouncementHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const AnnouncementContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 5px 0 10px;
`;

export const SidebarContainer = styled.div`
  // flex: 0 0 250px;
  padding: 20px;
  // background-color: #f4f4f4;
  border-right: 1px solid #ddd;
`;

export const AnnouncementTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;
