import React from 'react'

const TopHeader = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark text-white" style={{ backgroundColor: 'rgb(45, 54, 109)' }}> 
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <i class="bi bi-envelope-fill"></i> sales@doctest.com
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <i class="bi bi-telephone-fill"></i> 888-987-6250
            </a>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-white" href="#"><i class="bi bi-facebook"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#"><i class="bi bi-instagram"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#"><i class="bi bi-linkedin"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#"><i class="bi bi-twitter"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
export default TopHeader;
