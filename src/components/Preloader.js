import React from "react";

const Preloader = () => {
  return (
    <div style={{ marginTop: 50 }} className="preloader-wrapper big active">
      <div className="spinner-layer spinner-teal-only">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
