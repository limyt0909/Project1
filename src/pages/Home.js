import React from 'react';

import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';

import main2 from '../images/main2.png';
import Img1 from '../images/심사대리.jpg';
import Homes2 from '../Homes/Homes2';
import Homes3 from '../Homes/Homes3';
import Homes4 from '../Homes/Homes4';
import Slideshow from '../Slideshow/Slideshow';
import Button from '@material-ui/core/Button';

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Raleway"
/>;

const Home = () => {
  const tempstyle = {
    margin: 'auto',
    width: '40%',
    color: 'blue',
  };

  return (
    <div>
      <Top />

      <img src={Img1} alt="심사대리" width="100%" height="auto" />

      <br />
      <br />
      <br />
      <br />
      <br />
      <Homes3 />
      <Homes2 />
      <Homes4 />
      <Slideshow />

      <div class="w3-animate-opacity w3-text-white">
        <div class="w3-display-middle">
          <h1 class="w3-jumbo w3-animate-top">A1 Customs & Trde Service</h1>
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

      <Button variant="contained" color="primary">
        이게 메터리얼 버튼인가요
      </Button>

      <Bottom />
    </div>
  );
};

export default Home;
