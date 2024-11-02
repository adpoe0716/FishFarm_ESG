import React from 'react';
import './Popup.css';

const InfoPopup = ({ message, onClose }) => (
  <div className="popup info-popup">
    <div className="popup-icon info-icon">
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        className="info-svg"
      >
        <path
          clipRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          fillRule="evenodd"
        />
      </svg>
    </div>
    <div className="info-message">{message}</div>
    <div className="popup-icon close-icon" onClick={onClose}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className="close-svg"
      >
        <path
          d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
          className="close-path"
        />
      </svg>
    </div>
  </div>
);

export default InfoPopup;
