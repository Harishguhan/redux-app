import React from "react";
function Dialog({ onDialog }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          backgroundColor: "white",
          padding: "60px",
          borderRadius: "10px",
        }}
      >
        <div className="dudee">
          <p className="text-center">Are You sure Want to delete?</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px",
            }}
          >
            <button onClick={() => onDialog(true)} className="btn btn-danger">
              Yes
            </button>
            <button onClick={()=> onDialog(false)} className="btn btn-secondary mx-2">No</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
