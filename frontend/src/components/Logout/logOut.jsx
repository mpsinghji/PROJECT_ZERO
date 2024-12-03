import React from 'react';
import { X } from 'lucide-react';

const LogoutModal = ({ onClose, onConfirm }) => {
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalContainerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    padding: '20px',
    textAlign: 'center',
  };

  const modalHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const modalTitleStyle = {
    fontSize: '1.5rem',
    margin: 0,
    color: '#333',
  };

  const closeIconStyle = {
    cursor: 'pointer',
    color: '#333',
  };

  const modalBodyStyle = {
    marginTop: '15px',
  };

  const modalTextStyle = {
    fontSize: '1rem',
    color: '#333',
  };

  const modalActionsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  };

  const modalBtnStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
  };

  const confirmBtnStyle = {
    ...modalBtnStyle,
    backgroundColor: '#1abc9c',
    color: 'white',
  };

  const cancelBtnStyle = {
    ...modalBtnStyle,
    backgroundColor: '#ff5252',
    color: 'white',
  };

  return (
    <section style={modalOverlayStyle}>
      <div style={modalContainerStyle}>
        <div style={modalStyle}>
          <div style={modalHeaderStyle}>
            <h2 style={modalTitleStyle}>Logout</h2>
            <div style={closeIconStyle} onClick={() => onClose(false)}>
              <X />
            </div>
          </div>
          <div style={modalBodyStyle}>
            <p style={modalTextStyle}>Are you sure you want to logout?</p>
          </div>
          <div style={modalActionsStyle}>
            <button style={confirmBtnStyle} onClick={onConfirm}>
              Yes, Logout
            </button>
            <button style={cancelBtnStyle} onClick={() => onClose(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoutModal;
