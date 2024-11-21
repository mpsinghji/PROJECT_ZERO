import { useState } from "react";
import { AdminRegisterContainer, FormContainer, InputField, SubmitButton } from "../styles/AdminRegisterStyles";

const AdminRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [loading, setLoading] = useState(false); // Track loading state
  const [errorMessage, setErrorMessage] = useState(''); // Track error or success messages
  const [successMessage, setSuccessMessage] = useState(''); // Success message

  const handleRegister = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
      role,
    };

    setLoading(true); // Show spinner and disable button
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch("http://localhost:5000/api/v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        if (response.status === 409) {
          // 409 Conflict indicates the user already exists
          setErrorMessage('User is already registered.');
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } else {
        const data = await response.json();
        console.log("User Registered Successfully:", data);
        setSuccessMessage('User successfully registered!');
      }
    } catch (error) {
      console.error("Request failed:", error.message);
      setErrorMessage('An error occurred during registration.');
    } finally {
      setLoading(false); // Re-enable button and stop spinner
    }
  };

  return (
    <AdminRegisterContainer>
      <h2>Admin Register</h2>
      <FormContainer onSubmit={handleRegister}>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select 
          value={role}
          onChange={(e) => setRole(e.target.value)} 
          required
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        <SubmitButton type="submit" disabled={loading}>
          {loading ? (
            <span className="spinner"></span>
          ) : (
            "Register"
          )}
        </SubmitButton>
      </FormContainer>

      {/* Success/Error Message */}
      {(successMessage || errorMessage) && (
        <div className={`message ${successMessage ? "success" : "error"}`}>
          {successMessage || errorMessage}
        </div>
      )}
    </AdminRegisterContainer>
  );
};

export default AdminRegister;
