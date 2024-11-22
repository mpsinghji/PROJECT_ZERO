import { useState } from "react";
import {
  StudentSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/StudentSignInStyles";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
`;
const StudentSignIn=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () =>{
        console.log('Student Sign In:', { email, password });
    }
    return (
        <>
        <GlobalStyle/>
        <StudentSignInContainer>
            <h2>Student Sign In</h2>
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
                <SubmitButton to="/student/dashboard" onClick={handleSignIn}>Sign In</SubmitButton>
            </FormContainer>
        </StudentSignInContainer>
        </>
    )
}

export default StudentSignIn;