import React from 'react';
import "./loading.css"
const Loading = () => {
  return (
    <div>
      <h1 style={{marginBlock:"3rem",display:"flex", justifyContent:"center",}}><span className="loader"></span></h1>
    </div>
  );
}

export default Loading;
