import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  z-index: 3;

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
  }
  @media (max-width: 568px) {
    margin-top: 8px;
  }
`;
export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const Text = styled.h1`
  font-size: 19.2px;
  color: white;
  text-align: center;
  max-width: 700px;

  @media (max-width: 568px) {
    font-size: 14px;
    line-height: 16px;
  }
  @media (max-width: 968px) {
    font-size: 17px;
    line-height: 20px;
  }
`;
export const Input = styled.input`
  width: 35vw;
  height: 55px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  &:focus ::placeholder {
    transition: all 0.2s ease-in-out;

    transform: translateY(-14px);
    font-size: 12px;
  }
  @media (max-width: 968px) {
    width: 80vw;
    margin-bottom: 20px;
    height: 50px;
  }
  @media (max-width: 568px) {
    width: 80vw;
    height: 45px;
    margin-bottom: 12px;
  }
`;
export const Div = styled.div``;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  padding: 10px 26px;
  background-color: #f40612;
  font-size: 24px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f7111c;
  }
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 960px) {
      width: 12px;
    }
  }
  @media (max-width: 960px) {
    padding: 8px 16px;
    font-size: 15px;
    font-weight: bold;
    /* width: 150px; */
    font-size: 16px;
    margin: auto;
    text-align: center;
    font-weight: 600;
  }
`;
