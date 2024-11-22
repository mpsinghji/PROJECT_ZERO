import { useState } from "react";
import {
  TeacherSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/TeacherSignInStyles";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
`;

const TeacherSignIn=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () =>{
        console.log('Teacher Sign In:', { email, password });
    }
    return (
        <>
        <GlobalStyle/>
        <TeacherSignInContainer>
        <h2>Teacher Sign In</h2>
        <FormContainer>
        <InputField
                    type='email'
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    />
                <InputField
                    type='password'
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                />
                <SubmitButton to="/teacher/dashboard" onClick={handleSignIn}>Sign In</SubmitButton>
            </FormContainer>
        </TeacherSignInContainer>
        </>
    )
}

export default TeacherSignIn;