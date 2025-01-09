import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import webhost from "./webhosting.png";
import './Home.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoIcon from '@mui/icons-material/Info';
import LanguageIcon from '@mui/icons-material/Language';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SearchIcon from '@mui/icons-material/Search';
import pathshape from "./path-shape.png";
import domainsrch from "./domain-search.png";
import DomainIcon from '@mui/icons-material/Domain';
import ArticleIcon from '@mui/icons-material/Article';
import GoogleIcon from '@mui/icons-material/Google';
import MailIcon from '@mui/icons-material/Mail';
import pattern from './pattern.png';
import shapeone from "./shape1.png";
import shapetwo from "./shape2.png";
import partone from "./particle1.png";
import parttwo from "./particle2.png";
import partthree from "./particle3.png";
import rghtone from "./1.png";
import rghttwo from "./2.png";
import rghtthree from "./3.png";

const Home = () => {
  return (
    <div className='homepage-part'>
      <Header />
      

      <div className='banner-home'>
               <img src={shapeone} className='shap1' />
               <img src={shapetwo} className='shap2' />
        <Container>
          <div className='row'>

            <div className='col-5'>
               <h1>Top Ranking Your Brand New Website.</h1>
               
               <img src={partone} className='patcle-1' />
               <img src={parttwo} className='patcle-2' />
               <img src={partthree} className='patcle-3' />
            </div>

            <div className='col-7'>
            <img src={rghtone} className='shaprght1' />
            <img src={rghttwo} className='shaprght2' />
            <img src={rghtthree} className='shaprght3' />
            </div>

          </div>
        </Container>
      </div>


      <div className='why-choose'>
          <Container>
            <div class="row">
               <div class="col-6 wcu-lft">
                 <div className='web-hosting'>
                    <img src={webhost} className='webhost' />
                 </div>
               </div>
               <div class='col-6 wcu-rght'>
                  <h4>Why Choose Us</h4>
                  <h2>Services We Provide</h2>

                  <div className='row-one cmn-row'>
                  <div className='lft-icons'>
                  <AccessTimeIcon />
                  </div>
                  <div className='right-wcu-cont'>
                  <h3>Outstanding Uptime</h3>
                  <p>We is committed to providing a secure and reliable hosting environment. Customer websites are hosted on high performance quad processor servers.</p>
                  </div>
                  </div>

                  <div className='row-two cmn-row'>
                  <div className='lft-icons'>
                  <InfoIcon />
                  </div>
                  <div className='right-wcu-cont'>
                  <h3>Exclusive Customer Support</h3>
                  <p>We specializes in customer satisfaction. We are dedicated to ensuring that our customers can contact us in the best way for them, so we provide you with different methods to reach us</p>
                  </div>
                  </div>

                  <div className='row-three cmn-row'>
                  <div className='lft-icons'>
                  <LanguageIcon />
                  </div>
                  <div className='right-wcu-cont'>
                  <h3>Affordable Web Hosting</h3>
                  <p>Our prices are incredibly competitive and include an extensive list of features including premium disk space, email accounts and the ability to host Multiple Domains.</p>
                  </div>
                  </div>

                  <div className='row-four cmn-row'>
                  <div className='lft-icons'>
                  <AdminPanelSettingsIcon />
                  </div>
                  <div className='right-wcu-cont'>
                  <h3>Cpanel Control Panel</h3>
                  <p>Each Linux Hosting account utilizes the award winning cPanel control panel interface, an extremely user friendly control panel which makes it simple to manage all aspects of your hosting account.</p>
                  </div>
                  </div>


               </div>
            </div>
          </Container>
      </div>


      <div className='our-pricing'>
        <img src={pattern} className='pattern' />
          <Container>
                   <h4>Choose Your</h4>
                  <h2>Pricing Plans</h2>
            <div class="row">

            <div className='col-4 block-prce-1'>
            <h4>LINUX (BIG-BANG)</h4>
            <div className='plan-icons'></div>
            <ul className='plan-featre'>
<li>250 MB Web Space</li>
<li>1 Domain Allowed</li>
<li>3 GB Data Transfer</li>
<li>2 FTP accounts</li>
            </ul>
            <h3 className='price-plan'>Rs.1200.00/-</h3>
            <div className='pp-view'><a className='viw-dtl-pp'>View Detail</a></div>
            </div>

            <div className='col-4 block-prce-2'>
            <h4>WINDOWS (BIG - START)</h4>
            <div className='plan-icons'></div>
            <ul className='plan-featre'>
<li>100 MB Web Space</li>
<li>5 GB Data Transfer</li>
<li>2 Sub Domains</li>
<li>1 FTP accounts</li>
            </ul>
            <h3 className='price-plan'>Rs.1750.00/-</h3>
            <div className='pp-view'><a className='viw-dtl-pp'>View Detail</a></div>
            </div>

            <div className='col-4 block-prce-3'>
            <h4>WINDOWS (GOOD - GOING)</h4>
            <div className='plan-icons'></div>
            <ul className='plan-featre'>
<li>250 MB Web Space</li>
<li>10 GB Data Transfer</li>
<li>3 Sub Domains</li>
<li>1 FTP accounts</li>
            </ul>
            <h3 className='price-plan'>Rs.3000.00/-</h3>
            <div className='pp-view'><a className='viw-dtl-pp'>View Detail</a></div>
            </div>
          
            </div>
          </Container>
      </div>



      <div className='why-choose our-product'>
          <Container>
            <div class="row">
               
               <div class='col-6 wcu-rght'>
                  <h4>Choose Your</h4>
                  <h2>Products</h2>

                  <div className='row-one cmn-row'>
                  <div className='lft-icons'>
                  <DomainIcon />
                  </div>
                  <div className='right-wcu-cont'>
                  <h3>Domain Name</h3>
                  <p>FREE Domain Forwarding<br></br> FREE DNS Management<br></br>2 Free Email Addresses</p>
                  
                  </div>
                  <div className='outer-view'><a className='view-dtls'>View Details</a></div>
                  </div>

                  <div className='row-two cmn-row'>
                  <div className='lft-icons'>
                  <InfoIcon />
                  </div>
                  <div className='right-wcu-cont'>
                  <h3>LINUX Hosting</h3>
                  <p>Cloud Linux 5.9, 500 MB Disk Space<br></br> Unlimited Bandwidth</p>
                 
                  </div>
                  <div className='outer-view'><a className='view-dtls'>View Details</a></div>
                  </div>

                  <div className='row-three cmn-row'>
                  <div className='lft-icons'>
                  <LanguageIcon />
                  </div>
                  <div className='right-wcu-cont'>
                  <h3>WINDOWS Hosting</h3>
                  <p>Windows 2008, 50 MB Disk Space<br></br> Unlimited Bandwidth</p>
                  
                  </div>
                  <div className='outer-view'><a className='view-dtls'>View Details</a></div>
                  </div>

                  <div className='row-four cmn-row'>
                  <div className='lft-icons'>
                  <MailIcon />
                  </div>
                  <div className='right-wcu-cont'>
                  <h3>Business E-Mail Hosting</h3>
                  <p>POP3, IMAP & SMTP Access<br></br> 5 GB Mail Space per ID, Anti-Spam Protection</p>
                  
                  </div>
                  <div className='outer-view'><a className='view-dtls'>View Details</a></div>
                  </div>

                  <div className='row-four cmn-row'>
                  <div className='lft-icons'>
                  <ArticleIcon />
                  </div>
                  <div className='right-wcu-cont'>
                  <h3>FTP Hosting</h3>
                  <p>3 GB Disk Space, 20 GB Data Transfer<br></br> 5 Sub-FTP Accounts, Free Setup.</p>
                  
                  </div>
                  <div className='outer-view'><a className='view-dtls'>View Details</a></div>
                  </div>

                  <div className='row-four cmn-row'>
                  <div className='lft-icons'>
                  <GoogleIcon />
                  </div>
                  <div className='right-wcu-cont'>
                  <h3>Google Workspace</h3>
                  <p>Get Gmail for your Business, 30 GB Storage<br></br> Mobile Device Management, 24/7 Live Support</p>
                  </div>
                  <div className='outer-view'><a className='view-dtls'>View Details</a></div>
                  </div>
               </div>

               <div class="col-6 wcu-lft">
                 <div className='web-hosting'>
                    <img src={domainsrch} className='webhost' />
                 </div>
               </div>

            </div>
          </Container>
      </div>

      <div className='domain-block'>
         <Container>
         <img src={pathshape} alt="" className="path-home-img" />

              <h2>Domain Name Registration? </h2>
              <p>To Search for domains type your desired domains name on a separate line and choose your extensions.</p>
              <div className='domain-inpt'>
                  <input placeholder='Search Domain...' className='domain-in' type="text" name="domain" />
                  <div className='search-icon-btm'><SearchIcon /></div>
              </div>
         </Container>
      </div>
      <Footer />
    </div>
    
  )
}

export default Home