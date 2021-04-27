import React from 'react';
import styles from './Bottom.module.css';
import Img2 from '../images/whitemark2.png';
import Img3 from '../images/가족친화우수기업.png';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Bottom = () => {
  return (
    <>
      <div className={styles.up}>
        <div class="container">
          <div class="row">
            <div class="col-9">
              <Navbar.Brand href="/">
                <img src={Img2} alt="whitemark2" />
              </Navbar.Brand>
              <br />
              　<br />
              Copyright © 2021 A-One Customs & Trade Service. All Rights
              Reserved. <br />
              서울특별시 강남구 언주로 703 LX한국국토정보공사 3층 관세법인
              에이원 / 대표전화 02-2017-3300 / 팩스 02-2017-3399
              <br />
              e-Mail　
              <a href="mailto:aone-trade@aonecustoms.com">
                aone-trade@aonecustoms.com
              </a>
              <br />
              　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
            </div>
            <div class="col-3">
              {' '}
              <img
                src={Img3}
                alt="가족친화우수기업"
                max-width="100%"
                width="auto !important"
                height="auto !important"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.down}>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/"> - home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/CustomAone">
              {' '}
              - Customs Clearance & DrawBack
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Consultation"> - Consulation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Aboutaone7"> - 채용</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://blog.naver.com/aonecustoms1">
              {' '}
              - 공식 블로그
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.facebook.com/AONECUSTOMS/">
              {' '}
              - 공식 페이스북
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>{' '}
    </>
  );
};

export default Bottom;
