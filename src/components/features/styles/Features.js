import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 140px 45px 165px 45px;
  z-index: 3;
  @media (max-width: 568px) {
    padding: 36px 45px 75px 45px !important;
  }
  @media (max-width: 968px) {
    padding: 80px 45px 95px 45px;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 700;
  margin: auto;
  @media (max-width: 568px) {
    font-size: 28px !important;
  }
  @media (max-width: 468px) {
    font-size: 24px !important;
  }
  @media (max-width: 968px) {
    font-size: 38px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;
  @media (max-width: 568px) {
    font-size: 18px !important;
    margin: 16px 4px auto;
  }
  @media (max-width: 968px) {
    font-size: 22px;
  }
`;
