import styled from 'styled-components'

export const MainContainer = styled.main`
  max-width: 1520px;
  margin: auto;
  margin-top: 120px;

  h1 {
    font-size: 3.625rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    font-size: 1.5rem;
  }

  .line {
    width: 180px;
    border: 2px solid #176CCB;
    border-radius: 3px;
  }

  .text-container {
      max-width: 600px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .all-sections {
      max-width: 1520px;
      width: 100%;  
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      gap: 6rem;
      margin-bottom: 300px;
      padding-inline: 40px;
    }

    .row-default {
      flex-direction: row;
      text-align: right;
    }

  .ideas-section {

      .ideas-section-img {
        width: 40%;
          img {
          width: 100%;
          max-width: 612px;
        }  
      }

      .icons-container {
        max-width: 560px;
        flex-wrap: wrap;
        gap: 1rem;
        display: flex;
      }
  }

  .components-section {
    max-width: 1520px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4.375rem; 
    margin-bottom: 300px;
   

    .slide-item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      gap: 1.5rem;
      max-width: 420px;
      height: 500px;
      width: 100%;
      margin: auto;
      margin-block: 50px;
      padding: 50px 90px;

      border-radius: 15px;
      background: #FFF;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
      
      img {
        max-width: 240px;
        width: 100%;
      }
    }

    .swiper-horizontal {
      max-width: 620px;
    }
  }
   
  .bibliography-section {

    .bibliography-section-img {
      img {
        width: 100%;
        max-width: 612px;
      }
    }

  }

  .operating-section {

    .operating-section-iframe {
      width: 100%;

      iframe {
        width: 100%;
        height: 100%;
        max-width: 612px;
        border: none;
      }
    }

  }

  @media (max-width: 1350px) {
    .swiper-horizontal {
      max-width: 920px;
    }
  }

  @media (max-width: 1100px) {
    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
    }
    
    .mobile {
      flex-direction: column;
    }

    .row-default {
      flex-direction: column;
      text-align: left;
    }
  }

  @media (max-width: 650px) {
    
    .slide-item {
      max-width: 320px;
      height: 400px;
    }
  }

 `


/* @media (max-width: 1200px) {
    margin: 120px;
 
    .First-Content {
      margin-bottom: 200px;
    }
 
    .Second-Content {
 
      .Card {
        width: 419px;
        height: 524px;
 
      p {
        font-size: 24px;
      }
 
      span {
      font-size: 20px;
      }
    }
     
      .Arrow {
      font-size: 3.5rem;
      color: #5D9CE3;
    }
 
    .Arrow:hover {
      color: #176CCB;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    }
 
    .Second-Content {
      margin-bottom: 300px;
    }
 
    .Desktop {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
 
      .Product {
        margin: 0;
        width: 700px;
        height: 550px;
      }
 
      h1 {
        font-size: 4rem;
        max-width: 40.125rem;
      }
 
      h3 {
        font-size: 1.75rem;
      }
 
      p {
        font-size: 1.5rem;
        max-width: 31.125rem;
      }
    }
 
    .Inverse {
      flex-direction: row;
 
      .Porcentagem {
        width: 451px;
        height: 137px;
        margin: 0;
      }
 
      .Text {
        align-items: flex-end;
      }
 
      p {
        text-align: right;
      }
 
      img {
        width: 812px;
        height: 541px;
        margin: 0;
      }
    }
  } */