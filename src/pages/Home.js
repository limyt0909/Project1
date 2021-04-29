import React from 'react';

import Top2 from '../Top/Top2';
import Top from '../Top/Top';

import Bottom from '../Bottom/Bottom';

import Img1 from '../images/심사대리.jpg';
import Homes2 from '../Homes/Homes2';
import Homes3 from '../Homes/Homes3';

const Home = () => {
  const tempstyle = {
    margin: 'auto',
    width: '40%',
    color: 'blue',
  };

  return (
    <div>
      <Top />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <img src={Img1} alt="심사대리" width="100%" height="auto" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Homes3 />
      <Homes2 />
      <div class="w3-animate-opacity w3-text-white">
        <div class="w3-display-middle">
          <h1 class="w3-jumbo w3-animate-top">A1 Customs & Trade Service</h1>
          <hr class="w3-border-grey" style={tempstyle} />
          <p class="w3-large w3-center">관세법인 에이원</p>
        </div>
      </div>
      <footer class="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
        <i class="fa fa-facebook-official w3-hover-opacity"></i>
        <i class="fa fa-instagram w3-hover-opacity"></i>
        <i class="fa fa-snapchat w3-hover-opacity"></i>
        <i class="fa fa-pinterest-p w3-hover-opacity"></i>
        <i class="fa fa-twitter w3-hover-opacity"></i>
        <i class="fa fa-linkedin w3-hover-opacity"></i>
        <p class="w3-medium">
          Made by <a href="http://www.aonecustoms.com/">Aone-customs</a>
        </p>
      </footer>
      <Bottom />
    </div>
  );
};

export default Home;
