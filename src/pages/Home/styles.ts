import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 100;
  line-height: 50px;
  font-style: italic;
  color: #3B4252;

  @media(max-width: 600px) {
    font-size: 30px;
  }
`
