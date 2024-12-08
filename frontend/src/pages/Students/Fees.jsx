import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { FeesContainer, FeesTable, FeesTableHead, FeesTableRow, FeesHeader, FeesTableHeader, FeesTableData,FeesPayButton } from "../../styles/feesStyles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Fees = () => {
    
  return (
    <>
      <div>
        <Sidebar />
        <FeesContainer>
          <FeesHeader>Fees</FeesHeader>
          <FeesTable>
            <FeesTableHead>
              <FeesTableRow>
                <FeesTableHeader>Semester</FeesTableHeader>
                <FeesTableHeader>Amount</FeesTableHeader>
                <FeesTableHeader>Pay</FeesTableHeader>
              </FeesTableRow>
            </FeesTableHead>
            <tbody>
              <FeesTableRow>
                <FeesTableData>1st Semester</FeesTableData>
                <FeesTableData>₹1</FeesTableData>
                <FeesPayButton>Pay</FeesPayButton>
              </FeesTableRow>
              <FeesTableRow>
                <FeesTableData>2nd Semester</FeesTableData>
                <FeesTableData>₹1</FeesTableData>
                <FeesPayButton>Pay</FeesPayButton>
              </FeesTableRow>
              <FeesTableRow>
                <FeesTableData>3rd Semester</FeesTableData>
                <FeesTableData>₹1</FeesTableData>
                <FeesPayButton>Pay</FeesPayButton>
              </FeesTableRow>
              <FeesTableRow>
                <FeesTableData>4th Semester</FeesTableData>
                <FeesTableData>₹1</FeesTableData>
                <FeesPayButton>Pay</FeesPayButton>
              </FeesTableRow>
              <FeesTableRow>
                <FeesTableData>5th Semester</FeesTableData>
                <FeesTableData>₹1</FeesTableData>
                <FeesPayButton>Pay</FeesPayButton>
              </FeesTableRow>
              <FeesTableRow>
                <FeesTableData>6th Semester</FeesTableData>
                <FeesTableData>₹1</FeesTableData>
                <FeesPayButton>Pay</FeesPayButton>
              </FeesTableRow>
            </tbody>
          </FeesTable>
        </FeesContainer>
      </div>
      <ToastContainer />
    </>
  );
};

export default Fees;
