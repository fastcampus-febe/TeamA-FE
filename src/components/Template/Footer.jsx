import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContent>
      <FooterInner>
        <FooterMenu>
          <StrongSpan>개인정보처리방침</StrongSpan>
          <NonStrong>| 이용약관</NonStrong>
        </FooterMenu>
        <FooterTxt>
          <span>법인명 : Travel</span>
          <span>대표이사 : TeamA</span>
          <span>관광사업자 등록번호 : 제2023-0*호</span>
        </FooterTxt>
        <FooterTxt>
          <span>주소 : 서울특별시 강남구 테헤란로 231 10층, 11층</span>
        </FooterTxt>
        <FooterTxtSecond>
          <span>
            (주)Travel은 개별 항공권 및 숙박 상품에 대하여 통신판매중개자로서 통신판매의 당사자가
            아니며 해당상품의 거래정보 및 거래 등에 대해 책임을 지지 않습니다.
          </span>
          <span>
            (주)Travel은 렌터카 파트너사가 제공하는 일부 렌터카에 대하여 통신판매중개자의 지위를
            가지며, 해당 상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.
          </span>
        </FooterTxtSecond>
        <FooterCopy>
          <span>Copyright ⓒ TeamA All Rights Reserved</span>
        </FooterCopy>
      </FooterInner>
    </FooterContent>
  );
};

const FooterContent = styled.div`
  height: 330px;
  background-image: url('/images/footer.png');
  background-repeat: repeat-x;
`;

const FooterInner = styled.div`
  padding: 76px 72px 0 72px;
`;

const FooterMenu = styled.div`
  font-size: 18px;
  margin-left: 9px;
`;

const StrongSpan = styled.p`
  color: #333;
  display: inline-block;
  margin-right: 5px;
  font-weight: 600;
`;

const NonStrong = styled.p`
  color: rgba(51, 51, 51, 0.6);
  display: inline-block;
  margin-bottom: 19px;
`;

const FooterTxt = styled.p`
  color: rgba(51, 51, 51, 0.6);
  font-size: 15px;
  span {
    position: relative;
    display: inline-block;
    padding: 0 8px 0 9px;
    line-height: 1.3em;
    &:first-child:before {
      content: '';
      display: none;
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      width: 1px;
      height: 10px;
      margin-top: -5px;
      background-color: rgba(51, 51, 51, 0.2);
    }
  }
`;

const FooterTxtSecond = styled.p`
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: rgba(51, 51, 51, 0.6);
  font-size: 13px;
  margin-top: 20px;
  span {
    position: relative;
    display: inline-block;
    padding: 0 8px 0 9px;
    line-height: 1.3em;
  }
`;

const FooterCopy = styled.p`
  color: rgba(51, 51, 51, 0.6);
  font-size: 15px;
  margin-top: 20px;
  font-weight: 600;
  span {
    position: relative;
    display: inline-block;
    padding: 0 8px 0 9px;
    line-height: 1.3em;
  }
`;

export default Footer;
