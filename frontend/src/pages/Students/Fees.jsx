import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { 
  FeesContainer, 
  FeesTable, 
  FeesTableHead, 
  FeesTableRow, 
  FeesHeader, 
  FeesTableHeader, 
  FeesTableData, 
  FeesPayButton 
} from "../../styles/feesStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/loading.jsx";

const Fees = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [semesterTitle, setSemesterTitle] = useState("");

  const feesData = [
    { semester: "1st Semester", amount: "₹100" },
    { semester: "2nd Semester", amount: "₹100" },
    { semester: "3rd Semester", amount: "₹100" },
    { semester: "4th Semester", amount: "₹100" },
    { semester: "5th Semester", amount: "₹100" },
    { semester: "6th Semester", amount: "₹100" },
  ];

  const handlePayment = (semester) => {
    setSemesterTitle(semester);
    setLoading(true); 

    setTimeout(() => {
      navigate("/payment", { state: { semesterTitle } }); 
    }, 2000); 
  };

  return (
    <>
      <div className="flex">
        {loading && <Loading />} 
        <Sidebar />
        <FeesContainer>
          <FeesHeader>Fees</FeesHeader>
          <FeesTable>
            <FeesTableHead>
              <FeesTableRow>
                <FeesTableHeader>Semester</FeesTableHeader>
                <FeesTableHeader>Amount</FeesTableHeader>
                <FeesTableHeader>Action</FeesTableHeader>
              </FeesTableRow>
            </FeesTableHead>
            <tbody>
              {feesData.map((fee, index) => (
                <FeesTableRow key={index}>
                  <FeesTableData>{fee.semester}</FeesTableData>
                  <FeesTableData>{fee.amount}</FeesTableData>
                  <FeesTableData>
                    <FeesPayButton onClick={() => handlePayment(fee.semester)}>
                      Pay
                    </FeesPayButton>
                  </FeesTableData>
                </FeesTableRow>
              ))}
            </tbody>
          </FeesTable>
        </FeesContainer>
      </div>
      <ToastContainer />
    </>
  );
};

export default Fees;
