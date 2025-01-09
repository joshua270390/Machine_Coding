import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";
import footlogo from "./foot-logo.png";
import './Footer.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import pathshape from "./path-shape.png";

const Footer = () => {
  return (
    <div className='footer-cls'>
         <Container>
         <div class="row">
            <div class="col-4 about-part">
            <img src={footlogo} alt="" className="footlogo-img" />

            <img src={pathshape} alt="" className="path-img" />
            
<div className='align-contct'><div className='lft-cont-foot'><LocationOnIcon /></div><div className='rght-cont-foot'><span>178A, North Veli Street, ( II Floor ),<br></br>Madurai,Tamilnadu - 625001,India.</span></div></div>
<div className='align-contct'><div className='lft-cont-foot'><PhoneInTalkIcon /></div><div className='rght-cont-foot'><strong>Sales:</strong> 00 91 93441 05858<br></br><strong>Voice:</strong> 00 91 452 4374875</div></div>
<div className='align-contct'>
<div className='lft-cont-foot'><MailIcon /></div>
<div className='rght-cont-foot'>
<strong>Sales Email:</strong> sales@aalphanetsolution.com<br></br>
<strong>Tech Support Email:</strong> support@aalphanetsolution.com<br></br>
<strong>Billing Email:</strong> billing@aalphanetsolution.com<br></br>
</div>
</div>

            </div>
            <div class="col quick-link">
            <h3>Quick Links</h3>
              <Nav className="foot-quick-links">
              <ArrowRightIcon /><Link to="/">Home</Link>
              <ArrowRightIcon /><Link to="/about">About Us</Link>
              <ArrowRightIcon /><Link to="/board-of-directors">Website Design</Link>
              <ArrowRightIcon /><Link to="/our-team">Social Media</Link>
              <ArrowRightIcon /><Link to="/certifications">PPC</Link>
              <ArrowRightIcon /><Link to="/careers">SEO</Link>
              <ArrowRightIcon /><Link to="/clientele">Clientele</Link>
              <ArrowRightIcon /><Link to="/contact">Contact</Link>
              <ArrowRightIcon /><Link to="/blog">Blog</Link>
              </Nav>
            </div>
            <div class="col services-link">
            <h3>Services</h3>
<Nav className="foot-quick-links">
<ArrowRightIcon /><a href="#">Domain Name Registrations</a>
<ArrowRightIcon /><a href="#">Linux Web Hosting</a>
<ArrowRightIcon /><a href="#">Windows Web Hosting </a>                 
<ArrowRightIcon /><a href="#">Cloud Hosting</a>
<ArrowRightIcon /><a href="#">FTP Space Hosting</a>
<ArrowRightIcon /><a href="#">Google Workspace (formerly G Suite)</a>
<ArrowRightIcon /><a href="#">Business Email Hosting</a>
<ArrowRightIcon /><a href="#">SSL Certificates</a>
<ArrowRightIcon /><a href="#">SQL Server 2008 Hosting</a>
{/* <ArrowRightIcon /><a href="#">.ac.in, .edu.in Domains </a>
<ArrowRightIcon /><a href="#">Acronis Files Cloud </a>    */}
</Nav>
            </div>
            </div>
         </Container>
    </div>
  )
}

export default Footer