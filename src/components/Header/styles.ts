import styled from 'styled-components'

export const HeaderConteiner = styled.header`
  max-width: 1520px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding-inline: 40px;
  height: 70px;
  

  .desktop {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .desktop-options {
      display: flex;
      gap: 2.5rem;

      .selected {
        color: black;
        pointer-events: none;
      }

      a {
        position: relative;
        text-decoration: none;
        color: black;
        color: gray;


        &::after{
        content: " ";
        width: 0%;
        height: 2px;
        background: black;
        position: absolute;
        bottom: 0;
        left: 0;
        color: black;
        transition: all 0.3s ease-in-out;
      }

      &:hover::after {
        width: 100%;
        color: black;
      }


        /* &:hover {
          scale: 1.1;
          color: black;
          transition: all 0.3s ease-in-out;
        } */
      }
    }

    .mode-and-order {
      display: flex;
      align-items: center;
      gap: 3.125rem;
    }

    .button-sun{
      border: none;
      background: none;
      color: gray;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: black;
        transition: all .3s ease-in-out;
        scale: 1.1;
      }
    }

  }

  .mobile {
    display: none;
    width: 100%;

    .menu_logo {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 4rem;
    align-items: center;

    button {
      background: none;
      border: none;
      transition: all 0.3s ease-in-out;
    }

    .style-btn {
      background: none;
      border: none;
      position: relative;
      z-index: 6;
    }
  }
    
  .options {
    border: 1px solid #ccc;
    width: 100%;
    translate: -600%;
    position: absolute;
    background-color: white;

    transition: all .3s;
  }

  .open {
        translate: 0;
        position: absolute;
        backdrop-filter: blur(3px);
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 5;
        display: flex;
        align-items: center;
        justify-content: center;

        background: rgba(23, 108, 203, 0.95);
        background: linear-gradient(34deg, rgba(92, 154, 224, 0.95)0%, rgba(23, 108, 203, 0.95) 95%);

        nav {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 2rem;
          
          a{
            color: white;
            text-decoration: none;
          }
        }
  }
}


    img{
    width: 55px;
  }

  @media (max-width: 1000px) {
    .mobile {
      display: flex;
      justify-content: flex-end;

      .options {
        margin-top: 3.125rem;
      }
    }


    .desktop {
      display: none;
    }
  }

`

export const Container = styled.section`
  
`