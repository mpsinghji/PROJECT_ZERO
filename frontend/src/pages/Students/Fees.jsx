import React, { useState, useEffect } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/loading.jsx";
import Cookies from "js-cookie";

const Fees = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [semesterTitle, setSemesterTitle] = useState("");
  
  // Retrieve paid semesters from localStorage
  const [paidFees, setPaidFees] = useState(() => {
    // const storedPaidFees = localStorage.getItem("paidFees");
    const storedPaidFees = Cookies.get("paidFees");
    return storedPaidFees ? JSON.parse(storedPaidFees) : [];
  });

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
      // Update the state and save it in localStorage
      const updatedPaidFees = [...paidFees, semester];
      setPaidFees(updatedPaidFees);
      // localStorage.setItem("paidFees", JSON.stringify(updatedPaidFees)); // Store in localStorage
      Cookies.set("paidFees", JSON.stringify(updatedPaidFees));

      toast.success("No fee due left!"); // Show success toast
      setLoading(false);

      // Navigate to payment page after processing payment
      navigate("/payment", { state: { semesterTitle: semester } });
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
                    <FeesPayButton
                      onClick={() => handlePayment(fee.semester)}
                      style={{
                        backgroundColor: paidFees.includes(fee.semester) ? "green" : "",
                        color: paidFees.includes(fee.semester) ? "white" : "",
                      }}
                      disabled={paidFees.includes(fee.semester)} // Disable the button if fee is paid
                    >
                      {paidFees.includes(fee.semester) ? "Paid" : "Pay"}
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
