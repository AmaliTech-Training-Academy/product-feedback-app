import styled from "styled-components";

export const Container = styled.div`
width: 255px; 
height: 529px; 
background-color: red;
display: flex;
flex-direction: column;
`

export const FrontendMentors = styled(Container)`
color: black; 
height: 137px;
border-radius: 10px;
background-color: blue;

div {
  margin: 0 24px;
  background-color: orange;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 67px;
}

.h2 {
  background-color: green;
  letter-spacing: 2px;
  height: 29px;
}

.body-2 {
  background-color: yellow;
  width: 108px:
  height: 22px;
}
`

export const Tag = styled(Container)`
height: 166px;
background-color: blue;
margin-top: 24px;
border-radius: 10px;

.tag-container {
  margin: 24px;
  background-color: yellow;

}

.upper-tag{
  display: flex;
  flex-direction: row;
}

.middle-tag{
  display: flex;
  flex-direction: row;
  margin-top: 14px;
}
`

export const All = styled.div`
width: 48px;
height: 30px;
border-radius: 10px;
background-color: #4661E6;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
font-size: 13px;
font-weight: 600;
`

export const UI = styled(All)`
background-color: #F2F4FF;
color: #4661E6;
margin-left: 8px;
`

export const UX = styled(All)`
background-color: #F2F4FF;
color: #4661E6;
margin-left: 8px;
`

export const Enhancement = styled(All)`
width: 111px;
background-color: #F2F4FF;
color: #4661E6;
`

export const Bug = styled(All)`
width: 56px;
margin-left: 13px;
background-color: #F2F4FF;
color: #4661E6;
`

export const Feature = styled(All)`
width: 77px;
background-color: #F2F4FF;
color: #4661E6;
margin-top: 14px;
`

export const RoadMap = styled(Container)`
height: 178px;
background-color: blue;
margin-top: 24px;
border-radius: 10px;
`