import styled from 'styled-components'

export const NavBar = styled.div`
  max-width: 1400px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  .Reorder {
    width: 28px;
    height: 14px;
  }

  img{
    width: 65px;
    height: 65px;
  }


  @media (min-width: 768px) {
    .NavBar {
      max-width: 200px;
    }
  }

`