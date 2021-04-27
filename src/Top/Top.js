import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Img2 from '../images/whitemark2.png';
import styles from './Top.module.css';

const Top = () => {
  return (
    <>
      {' '}
      <div className={styles.font}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            　 　
            <img src={Img2} alt="whitemark2" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <div class="container">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="About-A-ONE" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/Aboutaone">
                    회사소개
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Aboutaone2">조직도</NavDropdown.Item>
                  <NavDropdown.Item href="/Aboutaone3">
                    구성원소개
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Aboutaone4">
                    경영방침
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Aboutaone5">연혁</NavDropdown.Item>
                  <NavDropdown.Item href="/Aboutaone6">CI</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Aboutaone7">채용</NavDropdown.Item>
                  <NavDropdown.Item href="/Aboutaone8">
                    인사제도
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Aboutaone9">
                    복리후생
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Aboutaone10">
                    주요고객사
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Aboutaone11">
                    오시는길
                  </NavDropdown.Item>
                </NavDropdown>
                　　
                <NavDropdown
                  title="Customs Clearance & Drawback"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/CustomAone">
                    수입통관
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/CustomAone2">
                    수출통관
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/CustomAone3">
                    소액 물품 및 이사화물
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/CustomAone4">
                    관세환급
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/CustomAone5">검역</NavDropdown.Item>
                  <NavDropdown.Item href="/CustomAone6">
                    검역확인
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/CustomAone7">
                    무역거래 컨설팅
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/CustomAone8">
                    물류 컨설팅
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/CustomAone9">
                    고객지원
                  </NavDropdown.Item>
                </NavDropdown>
                　　
                <NavDropdown title="Consultation" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/Consultation">
                    심사 대리
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Consultation2">
                    조사 대리
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Consultation3">
                    행정쟁송 대리
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Consultation4">FTA</NavDropdown.Item>
                  <NavDropdown.Item href="/Consultation5">AEO</NavDropdown.Item>
                  <NavDropdown.Item href="/Consultation6">
                    관세리스크
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Consultation7">
                    외환거래
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Consultation8">
                    지적재산권
                  </NavDropdown.Item>
                </NavDropdown>
                　　
                <NavDropdown
                  title="Education & Network"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/Education">
                    Education
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/Education2" disabled>
                    교육 일정 관리
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/Education3" disabled>
                    A-One소식
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Education4">
                    산업별 네트워크
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Education5">
                    글로벌 네트워크
                  </NavDropdown.Item>
                </NavDropdown>
                　　
                <NavDropdown title="Resources" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/board2">
                    관세무역 뉴스
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/board">
                    관세무역 자료실
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/board3">
                    A-one Webzine
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Resources4">
                    유관기관 안내
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/board4">
                    정운기 칼럼
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/board5">
                    첨부파일 테스트 게시판
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>{' '}
    </>
  );
};

export default Top;
