import styled from 'styled-components'
import { FaRegStar, FaRegClock } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex-direction: column;  

  &::after {
    content: "";
    margin: 10px 15px;
    width: calc(100% - 30px);
    height: 2px;
    background: #ECEFF4;
    clear: both;
  }

  .name {
    font-size: 24px;
    font-style: italic;
    line-height: 34px;
    color: #3B4252;
    text-decoration: none;

    @media(max-width: 1024px) {
      font-size: 16px;
      line-height: 20px;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .description {
    font-size: 18px;
    line-height: 28px;
    color: #3B4252;

    @media(max-width: 1024px) {
      font-size: 13px;
      line-height: 18px;
    }
  }

  .info {
    display: flex;
    flex-direction: row;
    color: '#8190A5'
    font-size: 18px;
    font-style: italic;
    line-height: 26px;

    &-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-left: 15px;

      &:first-child {
        margin-left: 0;
      }
    }
  }
`

export const IconStar = styled(FaRegStar).attrs({
  size: 18,
  color: '#8190A5'
})`
  margin: 0 5px;
  line-height: 26px;
`

export const IconClock = styled(FaRegClock).attrs({
  size: 18,
  color: '#8190A5'
})`
  margin: 0 5px;
  line-height: 26px;
`
