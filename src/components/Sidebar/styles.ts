import styled from 'styled-components'

import { BsPeople } from 'react-icons/bs'
import {
  FaRegHeart,
  FaRegStar,
  FaRegBuilding,
  FaRegEnvelope,
  FaLink,
  FaTwitter,
  FaMapMarkerAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa'

type PropsType = {
  isVisible: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 100vh;
  padding: 30px 25px;
  background: #3B4252;
  overflow-x: hidden;
  overflow-y: auto;

  @media(max-width: 1024px) {
    display: ${(props: PropsType) => props.isVisible ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;  
    padding: 20px;  
    z-index: 2;
  }
  
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

  .user-img {
    align-self: center;
    margin: 30px 0;
    width: 298px;
    border-radius: 50%;

    @media(max-width: 1024px) {
      width: 90%;
      margin: 0 0 20px 0;
    }
  }

  .user {
    &-name {
      font-size: 40px;
      font-style: italic;
      line-height: 50px;
      color: #ECEFF4;

      @media(max-width: 1024px) {
        font-size: 24px;
        line-height: 24px;
      }
    }

    &-login {  
      font-size: 28px;
      font-style: italic;
      line-height: 34px;
      color: #ECEFF4;

      @media(max-width: 1024px) {
        font-size: 16px;
        line-height: 24px;
      }
    }

    &-bio {
      margin: 23px 0 0;
      font-size: 18px;
      line-height: 28px;
      color: #8190A5;

      @media(max-width: 1024px) {
        margin: 10px 0 0;
        font-size: 14px;
        line-height: 24px;
      }
    }

    &-status {
      margin: 23px 0 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      color: #ECEFF4;
      font-size: 18px;
      font-style: italic;
      line-height: 26px;

      @media(max-width: 1024px) {
        align-items: flex-start;
        flex-direction: column;
        margin: 10px 0;
        font-size: 12px;
        line-height: 20px;
      }

      &-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        @media(max-width: 1024px) {
          margin: 5px 0;
        }
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      margin: 0 0 30px;

      @media(max-width: 1024px) {
        margin: 5px 0;
      }

      &-item {
        display: flex;
        margin: 6px 0;
        flex-direction: row;
        align-items: center;
        color: #ECEFF4;
        font-size: 22px;
        font-style: italic;
        line-height: 34px;

        @media(max-width: 1024px) {
          font-size: 16px;
          line-height: 20px;
        }

        a {
          color: #ECEFF4;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
            color: #fff;
          }
        }
      }
    }
  }

  .btn-goback {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    color: #3B4252;
    font-size: 18px;
    font-style: italic;
    line-height: 62px;
    width: 192px;
    height: 50px;
    text-align: center;
    background-color: #ECEFF4;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;

    @media (max-width: 1024px) {
      margin-top: 15px;
      width: 120px;
      height: 34px;
      font-size: 14px;
      line-height: 34px;
    }
  }
`

export const IconUsers = styled(BsPeople).attrs({
  size: 18,
  color: '#ECEFF4'
})`
  margin: 0 5px;
  line-height: 26px;
`

export const IconHeart = styled(FaRegHeart).attrs({
  size: 18,
  color: '#ECEFF4'
})`
  margin: 0 5px;
  line-height: 26px;
`

export const IconStar = styled(FaRegStar).attrs({
  size: 18,
  color: '#ECEFF4'
})`
  margin: 0 5px;
  line-height: 26px;
`

export const IconCompany = styled(FaRegBuilding).attrs({
  size: 24,
  color: '#ECEFF4'
})`
  margin-right: 14px;
  line-height: 34px;

  @media(max-width: 1024px) {
    margin-right: 6px;
    line-height: 20px;
  }
`

export const IconLocation = styled(FaMapMarkerAlt).attrs({
  size: 24,
  color: '#ECEFF4'
})`
  margin-right: 14px;
  line-height: 34px;

  @media(max-width: 1024px) {
    margin-right: 6px;
    line-height: 20px;
  }
`

export const IconEmail = styled(FaRegEnvelope).attrs({
  size: 24,
  color: '#ECEFF4'
})`
  margin-right: 14px;
  line-height: 34px;

  @media(max-width: 1024px) {
    margin-right: 6px;
    line-height: 20px;
  }
`

export const IconSite = styled(FaLink).attrs({
  size: 24,
  color: '#ECEFF4'
})`
  margin-right: 14px;
  line-height: 34px;

  @media(max-width: 1024px) {
    margin-right: 6px;
    line-height: 20px;
  }
`

export const IconTwitter = styled(FaTwitter).attrs({
  size: 24,
  color: '#ECEFF4'
})`
  margin-right: 14px;
  line-height: 34px;

  @media(max-width: 1024px) {
    margin-right: 6px;
    line-height: 20px;
  }
`

export const IconBars = styled(FaBars).attrs({
  size: 24,
  color: '#000'
})`
  display: none;
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 3;

  @media (max-width: 1024px) {
    display: ${(props: PropsType) => props.isVisible ? 'block' : 'none'};
  }
`

export const IconTimes = styled(FaTimes).attrs({
  size: 24,
  color: '#fff'
})`
  display: none;
  position: fixed;
  top: 15px;
  left: 265px;
  z-index: 3;

  @media (max-width: 1024px) {
    display: ${(props: PropsType) => props.isVisible ? 'block' : 'none'};
  }
`

export const Background = styled.div`
  position: absolute;
  display: none;
  top: 0;
  left: 300px;
  content: "";
  width: calc(100vw - 300px);
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;

  @media (max-width: 1024px) {
    display: ${(props: PropsType) => props.isVisible ? 'block' : 'none'};
  }
`
