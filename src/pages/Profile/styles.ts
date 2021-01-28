import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  width: calc(100% - 450px);
  overflow-y: auto;
  height: 100vh;

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
    @media(max-width: 1024px) {
      display: none;
    }
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
    cursor: pointer;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  @media(max-width: 1024px) {
    width: 100%;
    padding: 20px;
  }
`
