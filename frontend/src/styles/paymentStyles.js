import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
  padding: 20px;
  font-family: "Roboto", sans-serif;
`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`;

export const Logo = styled.img`
  width: 300px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #3399cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  width: 100%;
  font-size: 16px;
`;

export const ResponseText = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  font-size: 16px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 16px;
  margin-top: 20px;
  color: #333;
  text-align: left;
`;
