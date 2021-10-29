import React from "react";
//import Container from "react-bootstrap/Container";
//import Card from "react-bootstrap/Card";
import fakeflix from "../assets/fakeflix.jpeg";




const HomePage = () => {
	return (
        <div style={{ backgroundImage: `url(${fakeflix})`,
        objectFit: "cover",
        minHeight: "100vh"}}>
        
        <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <h1 className="H1">Welcome to Movies24</h1>
          <h5 className="H5">Popular, new & old, here you can find them all</h5>
          </div>
      </div>    
    </div> 
 );
}

export default HomePage;
