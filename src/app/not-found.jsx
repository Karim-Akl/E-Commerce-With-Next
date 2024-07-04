import React from "react";
import Footer from "../components/footer/footer.jsx";
import Header from "../components/header/header.jsx";

const NotFound = () => {
  return (
    <div>

      <Header />
      <div 
            style={{
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gridTemplateRows: "auto 1fr auto",
            }}>
        <h1>Sorry</h1>
        <p>we could not find the page you were looing for :)</p>
        </div>
      <Footer />
      </div>
  );
};

export default NotFound;
