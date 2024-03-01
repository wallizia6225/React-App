import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const MainNavbar = () => {
  return (
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain" alt="Logo" width="30" height="30" class="d-inline-block align-top" style={{ marginLeft: 10 }}/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
                
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
            <div class="d-flex align-items-center">
              <button class="btn btn-outline-primary me-2" type="button">My.Dodesk</button>
              <button class="btn btn-outline-primary" type="button">Sign In</button>
            </div>
          </div>
        </div>
      </nav>
  )
}
export default MainNavbar;
