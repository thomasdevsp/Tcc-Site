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

  .introduction-section {

    .introduction-section-img {
      width: 40%;

      img {
        width: 100%;
        max-width: 612px;
      } 
    }
  }

  .target-audience {

    .target-audience-img {

      img {
        width: 100%;
        max-width: 782px;
      }
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
      text-align: left;
    }
  }

 `