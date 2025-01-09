import React from 'react';
import { Container} from "react-bootstrap";
import "./Topbar.css";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


const Topbar = () => {
  return (
    
    <div className='topbat-cls'>
        <Container>
            <div class="row">
            <div class="col social-icons">
            <a href="#"><LinkedInIcon /></a><a href="#"><TwitterIcon /></a>
            </div>
            <div class="col head-cont">
            <span><strong>Call:</strong> +61 432941195</span><span><strong>Email:</strong> mailto:sales@answeb.com.au</span>
            </div>
            </div>
        </Container>
    </div>

  )
}

export default Topbar