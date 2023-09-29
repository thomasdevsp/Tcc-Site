import styled from 'styled-components'

export const FooterStyle = styled.footer`
  margin-top: 9rem;
  width: 100%;
  display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  .Icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.625rem;
  }

  .Line {
    margin-top: 26px;
    width: 180px;
    border: 3px solid #5D9CE3;
    border-radius: 3px;
   
  }

  .Text-Footer {
    margin-top: 26px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: row;
    font-size: 13px;
    color: #BCBCBC;
    gap: 10px;
    margin-bottom: 2.625rem;
  }

  `