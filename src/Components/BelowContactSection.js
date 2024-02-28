import React from 'react'

const BelowContactSection = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark text-white" style={{ backgroundColor: 'rgb(45, 54, 109)' }}> 
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ textAlign: 'right' }}>
          <li class="nav-item" >
            <a class="nav-link text-white" href="#">
              <i class="bi bi-envelope-fill"></i> 1500+ Satisfied Providers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <i class="bi bi-telephone-fill"></i> Serving More thank 75 Specialities
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              <i class="bi bi-telephone-fill"></i> 1200+ Billing and Coding Experts
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
export default BelowContactSection;