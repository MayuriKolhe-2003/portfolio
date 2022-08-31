import React from 'react'
import './nav.css'

import { useRef } from 'react'
const scrollDown = (ref) => {
  window.scrollTo({
    top:ref.current.offsetTop,
    behavior:'smooth',
  });
};

const nav = () => {

  return (
  <>
  <header id="header" className="fixed-top">
	<div className="container-fluid d-flex justify-content-between align-items-center">
			<a href="index.html" className="logo me-auto me-lg-0" >mayuri</a>
		<nav className="navbar navbar-expand-lg order-last order-lg-0">

	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
	<span className="navbar-toggler-icon"></span>
	</button>

	<div className="collapse navbar-collapse " id="navbarCollapse">
		<ul className="navbar-nav mr-auto">
			<li><a className="active" href="/">Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href="#resume">Resume</a></li>
          {/*<li><a href="#services">Services</a></li>*/}
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
		</ul>
		
	</div>
</nav>

<div className="header-social-links">
        <a href="https://github.com/MayuriKolhe-2003" className="github"><i className="fa-brands fa-github"></i></a>
        <a href="https://instagram.com/mayuri_.10" className="facebook"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/mayuri-kolhe-538883193" className="instagram"><i className="fa-brands fa-linkedin"></i></a>
        <a href="kolhem10@gmail.com" className="email"><i className="fa-solid fa-envelope"></i></a>
      </div>
	</div>
</header>
  
  </>
  

  )
}

export default nav