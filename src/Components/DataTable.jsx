import React, { useState } from "react";
import "./datatable.css";
import PendingTable from "./TaskTables/PendingTable";
import CompletedTable from "./TaskTables/CompletedTable";

const Modal = ({ onClose, onConfirm }) => {
  const [name, setName] = useState("");
  const [uar, setUar] = useState("");
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");

  const handleConfirm = () => {
    const data = {
      name,
      uar,
      reason,
      note,
    };

    onConfirm(data);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <div className="close-icon" onClick={onClose} />
          <h2>Close Account</h2>
        </div>
        <div className="modal-body">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required
            />

            <div className="radio-button">
              <label>Want to file a UAR?</label>
              <div>
                <label htmlFor="uarYes" className="radio-label">
                  Yes
                </label>
                <input type="radio" id="uarYes" name="uar" value="yes" checked={uar === "yes"} onChange={() => setUar("yes")}
                />

                <label htmlFor="uarNo" className="radio-label">
                  No
                </label>
                <input type="radio" id="uarNo" name="uar" value="no" checked={uar === "no"} onChange={() => setUar("no")}
                />
              </div>
            </div>

            <label htmlFor="reason">Reason:</label>
            <input
              type="text"
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />

            <label htmlFor="note">Note:</label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows="4"
            />

            <div className="modal-buttons">
              <button
                type="button"
                onClick={onClose}
                className="modal-button cancel"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirm}
                className="modal-button confirm"
              >
                Close Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
const DataTable = () => {
  const [selectedTab, setSelectedTab] = React.useState("pending");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmClose = () => {
    console.log("Account closed successfully!");
    setIsModalOpen(false);
  };

  return (
    <div className="data-table">
      <h1 style={{ fontFamily: "Trebuchet MS, sans-serif", color: "#050505" }}>
        Monitoring
      </h1>

      <div className="buttton">
        <button
          onClick={() => setSelectedTab("pending")}
          className={selectedTab === "pending" ? "active" : ""}
        >
          Pending
        </button>
        <button
          onClick={() => setSelectedTab("completed")}
          className={selectedTab === "completed" ? "active" : ""}
        >
          Completed
        </button>

        <button className="close-account-button" onClick={handleButtonClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="svgg"
          >
            <g clip-path="url(#clip0_18_220)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25ZM0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9Z"
                fill="#D13B3B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L7.28033 11.7803C6.98744 12.0732 6.51256 12.0732 6.21967 11.7803C5.92678 11.4874 5.92678 11.0126 6.21967 10.7197L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967Z"
                fill="#D13B3B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z"
                fill="#D13B3B"
              />
            </g>
            <defs>
              <clipPath id="clip0_18_220">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          close account
        </button>
      </div>

      <div className="tab-underline"></div>

      {selectedTab === "pending" && <PendingTable />}
      {selectedTab === "completed" && <CompletedTable />}

      {isModalOpen && (
        <Modal onClose={handleCloseModal} onConfirm={handleConfirmClose} />
      )}
    </div>
  );
};

export default DataTable;
