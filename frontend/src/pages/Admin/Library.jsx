import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminSidebar from "./Sidebar";
import {
  Content,
  Title,
  AddBookForm,
  FormGroup,
  Label,
  Input,
  Button,
  BookList,
  BookItem,
  BookTitle,
  BookAuthor,
  ActionButton,
} from '../../styles/LibraryStyles';
import styled from "styled-components";

export const LibraryContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;

const AdminLibrary = () => {
  return (
    <LibraryContainer>
      <AdminSidebar />
      <Content>
        <Title>Library Management</Title>
        <AddBookForm>
          <h2>Add New Book</h2>
          <FormGroup>
            <Label htmlFor="title">Title:</Label>
            <Input type="text" id="title" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="author">Author:</Label>
            <Input type="text" id="author" required />
          </FormGroup>
          <Button type="submit">Add Book</Button>
        </AddBookForm>

        <h2>Books</h2>
        <BookList>
          
        </BookList>
      </Content>
    </LibraryContainer>
  )
}

export default AdminLibrary