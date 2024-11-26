import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    height: 100vh;
    background-color: #f5f5f5;
`;

export const SidebarContainer = styled.div`
    width: 20%;
`;

export const ContentContainer = styled.div`
    width: 80%;
    padding: 2rem;
    overflow-y: auto;

    h1 {
        font-size: 2rem;
        color: #34495e;
        margin-bottom: 1.5rem;
    }
`;

export const FormContainer = styled.div`
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const AssignmentForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Input = styled.input`
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Textarea = styled.textarea`
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
    height: 100px;
`;

export const Button = styled.button`
    padding: 0.8rem;
    font-size: 1rem;
    color: #fff;
    background-color: #3498db;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #2980b9;
    }
`;

export const AssignmentList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const AssignmentCard = styled.div`
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
    font-size: 1.5rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
`;

export const Description = styled.p`
    font-size: 1rem;
    color: #7f8c8d;
`;