import {
  ChooseUserContainer,
  UserSection,
  Title,
  Button,
} from "../styles/ChooseUserStyles";
import { Link } from "react-router-dom";

const ChooseUser = () => {
  return (
    <ChooseUserContainer>
      <UserSection>
        <Title>Admin</Title>
        <Button to="/admin-signIn">Login As Admin</Button>
      </UserSection>
      <UserSection>
        <Title>Student</Title>
        <Button to="/student-signIn">Login As Student</Button>
      </UserSection>
      <UserSection>
        <Title>Teacher</Title>
        <Button to="/teacher-signIn">Login As Teacher</Button>
      </UserSection>
    </ChooseUserContainer>
  );
};

export default ChooseUser;
