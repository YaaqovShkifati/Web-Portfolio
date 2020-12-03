import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { animateScroll as scroll, scroller} from 'react-scroll'
import './Navigation.css';
/* eslint-disable */

export default function ResumeNavigation() {
  $(document).scroll(function() {
    if(!window.location.href.includes("resume"))
    {
       console.log("D");
       $(window).unbind();
   }
   else
   {
  var nav =  $('#resumeNavbar').offset().top + $('#resumeNavbar').outerHeight(true);
    //var resumeScroll_top = $(document).scrollTop();
    var rdiv_one_top = $('#resumeHeader').position().top;
    var rdiv_two_top = $('#education').position().top;
    var rdiv_three_top = $('#skill').position().top;

    //console.log(rdiv_five_top + "    " + rdiv_four_top);
    if(nav > rdiv_one_top && nav < rdiv_two_top) {
      //You are now past div one
      document.getElementById("navResume-2").className = "nav-item";
      document.getElementById("navResume-3").className = "nav-item";
  } else if(nav > rdiv_two_top && nav < rdiv_three_top) {
      //You are now past div two
      document.getElementById("navResume-2").className = "nav-item active";
      document.getElementById("navResume-3").className = "nav-item";
  } else if(nav > rdiv_three_top) {
    //You are now past div three
    document.getElementById("navResume-2").className = "nav-item";
    document.getElementById("navResume-3").className = "nav-item active";
  } 
  }
  });

  const scrollFunc=(e)=>{
    if(e==='home'){
      scroll.scrollToTop()
      for(var j = 2; j<=3; j++)
      {
        var navbarSpy = "navResume-" + j;
        document.getElementById(navbarSpy).className = "nav-item";
      }
      document.getElementById("navResume-1").className = "navbar-brand";
    }
    else {
      scroller.scrollTo(e, {
        duration: 1400,
        delay: 0,
        offset: 0,
        smooth: 'easeInOutQuart'
      })
      for(j = 2; j<=3; j++) {
        navbarSpy = "navResume-" + j;
        document.getElementById(navbarSpy).className = "nav-item";
      }
      var tab = 2;
      if (e==='skill')
        tab = 3;
      navbarSpy="navResume-" + tab;
      document.getElementById(navbarSpy).className = "nav-item active";
    }
  }
  return (
    
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" id="resumeNavbar">
      <a className="navbar-brand" href="javascript:void(0);" id="navResume-1" data-toggle="collapse" data-target=".navbar-collapse.show" style={{cursor:"pointer"}} onClick={()=>scrollFunc("home")}>
        <img src={require('./logo_transparent.jpg')} width="30" height="30" className="d-inline-block align-top" alt=""/>
        Resume
      </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#resume-navbar" aria-controls="resume-navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="resume-navbar">

      <ul className="navbar-nav mr-auto">
        <li className="nav-item" id="navResume-2">
          <a className="nav-link" onClick={()=>scrollFunc("education")} data-toggle="collapse" data-target=".navbar-collapse.show" style={{cursor:"pointer"}}>Education</a>
        </li>
        <li className="nav-item" id="navResume-3">
          <a className="nav-link" onClick={()=>scrollFunc("skill")} data-toggle="collapse" data-target=".navbar-collapse.show" style={{cursor:"pointer"}}>Skills</a>
        </li>
      </ul>
      <ul className="form-inline my-2 my-lg-0">
        <Link className="btn btn-outline-light" role="button" to="/">Home</Link>
      </ul>
    </div>
  </nav>
  );
}