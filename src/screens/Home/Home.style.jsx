import styled from "styled-components";
import { motion } from "framer-motion"

export const HomeContainer = styled.div`
  margin-top:-70px;
`

export const HomeVideo = styled.div`
  position:relative;
`

export const HomeContent = styled.div`
  max-width:1140px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin:0 auto;
  padding:40px 0;
`

export const VideoOverlay = styled(motion.div)`
  z-index:999;
  position:absolute;
  left: 50%;
  top:30%;
  transform: translate(-50%, 0) !important;
  text-align: center;
  
  > input {
    margin-top:25px;
    border-radius:8px;
    font-size:17px;
    width:160px !important;
  }
`

export const VideoOverlayText = styled.div`
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  font-size:33px;
  color:white;
  text-align: center;
`

export const SlideContent = styled.div`
  position:absolute;
  top:40%;
  left:20%;
  text-align: center;
`

export const SlideHeader = styled.h1`
  color:white;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  font-size: 48px;
`
