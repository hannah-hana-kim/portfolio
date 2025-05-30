import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import myImage from '../assets/images/my_image.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/*<img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" />*/}
          <img src={myImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/hannah-hana-kim" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hannah-hana-kim/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Hannah Kim</h1>
          <p>Data Scientist | Data Analyst | Data Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default Main;