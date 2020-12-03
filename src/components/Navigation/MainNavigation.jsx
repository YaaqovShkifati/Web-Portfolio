import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { animateScroll as scroll, scroller} from 'react-scroll';
import './Navigation.css';
/* eslint-disable */

export default function MainNavigation() {
  $(document).scroll(function() {
    if(window.location.href.includes("resume"))
  {
  console.log("D");
  $(window).unbind();
}
else
{
    var scroll_top = $(document).scrollTop();

    if(document.getElementById("mainHeader") != null)
      var div_one_top = $('#mainHeader').position().top;
    if(document.getElementById("aboutme") != null)
      var div_two_top = $('#aboutme').position().top;
    if(document.getElementById("recentProjects") != null)
      var div_three_top = $('#recentProjects').position().top;
    if(document.getElementById("contact") != null)
      var div_four_top = $('#contact').position().top;

    if(scroll_top > div_one_top && scroll_top < div_two_top) {
        //You are now past div one
        document.getElementById("navMain-2").className = "nav-item";
        document.getElementById("navMain-3").className = "nav-item";
        document.getElementById("navMain-4").className = "nav-item";
    } else if( scroll_top > div_two_top && scroll_top < div_three_top) {
        //You are now past div two
        document.getElementById("navMain-2").className = "nav-item active";
        document.getElementById("navMain-3").className = "nav-item";
        document.getElementById("navMain-4").className = "nav-item";
    } else if( scroll_top > div_three_top && scroll_top < div_four_top) {
      //You are now past div three
      document.getElementById("navMain-2").className = "nav-item";
      document.getElementById("navMain-3").className = "nav-item active";
      document.getElementById("navMain-4").className = "nav-item";
    } else if( scroll_top > div_four_top) {
      //You are now past div four
      document.getElementById("navMain-2").className = "nav-item";
      document.getElementById("navMain-3").className = "nav-item";
      document.getElementById("navMain-4").className = "nav-item active";
    }
  }
  });

  const scrollFunc=(e)=>{
    if(e==='home'){
      scroll.scrollToTop()
    }
    else {
      scroller.scrollTo(e, {
        duration: 1400,
        delay: 0,
        offset: 25,
        smooth: 'easeInOutQuart'
      })
    }
    
  }

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" id="mainNavbar">
        <a className="navbar-brand" id="navMain-1" style={{cursor:"pointer"}} data-toggle="collapse" data-target=".navbar-collapse.show" onClick={()=>scrollFunc("home")}>
          <img src={require('./logo_transparent.jpg')} width="30" height="30" className="d-inline-block align-top" alt=""/>
          Yaaqov Shkifati
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" id="navMain-2">
              <a className="nav-link" onClick={()=>scrollFunc("aboutme")} data-toggle="collapse" data-target=".navbar-collapse.show" style={{cursor:"pointer"}}>About Me</a>
            </li>
            <li className="nav-item" id="navMain-3">
              <a className="nav-link" onClick={()=>scrollFunc("recentProjects")} data-toggle="collapse" data-target=".navbar-collapse.show" style={{cursor:"pointer"}}>Recent Projects</a>
            </li>
            <li className="nav-item" id="navMain-4">
              <a className="nav-link" onClick={()=>scrollFunc("contact")} data-toggle="collapse" data-target=".navbar-collapse.show" style={{cursor:"pointer"}}>Contact Me</a>
            </li>
          </ul>
          <ul className="form-inline my-2 my-lg-0">
            <Link className="btn btn-outline-light" role="button" to="/resume">Resume</Link>
          </ul>
        </div>      		
      </nav>
    </div>
  );
  
}