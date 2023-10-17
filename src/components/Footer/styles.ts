import styled from 'styled-components'

export const FooterStyle = styled.footer`
  margin-top: 20rem;
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

    a{
      font-size: 25px;
      color:  #176CCB;
    }
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

  @media (min-width: 1200px) { 
    .Icons a {
        color: #5D9CE3;
        transition: all 0.2s ease;
    }
    
    .Icons a:hover {
        color: #176CCB;
        transition: all 0.2s ease;
        scale: 1.1;
    }
      
    
  }

  `