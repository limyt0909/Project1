import React from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import Img1 from '../images/인사말1.png';

import Img2 from '../images/인사말2.png';
import Img3 from '../images/인사말3.jpg';
import Img4 from '../images/인사말4.jpg';
import Img5 from '../images/인사말5.jpg';

import styles from './Aboutaone.module.css';

const Aboutaone = () => {
  return (
    <div>
      <Top />
      <div className={styles.title}> 인 사 말 </div>
      <br />
      <div class="w3-container w3-content w3-padding-64">
        <img src={Img1} alt="인사말1" width="100%" height="auto" />

        <br />
        <br />
        <br />
        <div className={styles.font}>
          <div class="row">
            <div class="col-sm-4">
              {' '}
              <div className={styles.img2}>
                <img src={Img2} alt="인사말2" width="90%" height="auto" />
              </div>
            </div>
            <div class="col-sm-8">
              {' '}
              업무영역 측면에서도 수출입 통관, 검역, FTA(Free Trade Agreement),
              AEO(Authorized Economic Operator)컨설팅, 심사 쟁송 분야까지
              수행하는 등 국내에서 가장 넓은 영역을 서비스하고 있으며, 통관 및
              컨설팅 실적 국내 1위, 행정쟁송 승소실적 1위인 명실상부 업계 최고의
              기업입니다. <br /> <br />
              에이원은 동종업계에서 최초로 AEO인증을 취득하고 이후 더 발전된
              모습으로 AA 인증도 취득하며 전문성을 인정받고 여러 고객사의
              AEO인증 컨설팅을 수행하고 있습니다.
              <br />
              <br />
              <br />
            </div>
            <div class="col-12">
              또한 기업의 FTA 활용 및 검증을 지원하기 위하여 FTA 활용 지원센터를
              설치하고 FTA 전문 컨설팅을 수행하며, 미국 , EU, 싱가폴, 인도 등
              한국과 FTA를 체결한 나라의 관세분야 전문가들과 네트워크를 구축하고
              있습니다. 그 외 법인심사, 종합심사, 관세포탈 등 조사에 대응하여
              최고의 심사·조사 전문 관세사가 기업을 대리하는 심사·조사 전문
              컨설팅 법인입니다.
              <br /> <br />
              에이원은 고객 감동의 실천을 목적으로 서울 본사와 지사에 고객지원
              조직을 구성하여 통관 전·후에 일어날 수 있는 관세 리스크 최소화를
              추구하며 고객사의 관세, 물류업무의 파트너로 성장해 가고 있습니다.
              인재 중심의 경영과 기본정신을 바탕으로 한 내실 위에 서비스 영역별
              전문성을 강화하여 고객과 함께 성장하는 진정 한 파트너가 되기 위해
              모든 임직원이 최선을 다하는 기업입니다.
              <br /> <br />
            </div>
            <div class="col-sm-4">
              <img src={Img3} width="100%" height="auto" alt="인사말3" />{' '}
            </div>
            <div class="col-sm-4">
              <img src={Img4} width="100%" height="auto" alt="인사말4" />{' '}
            </div>{' '}
            <div class="col-sm-4">
              <img src={Img5} width="100%" height="auto" alt="인사말5" />
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>

      <Bottom />
    </div>
  );
};

export default Aboutaone;
