import styled from "styled-components";

export const Container = styled.div`
width: 255px; 
height: 529px; 
/* background-color: red;  */
display: flex;
flex-direction: column;



// Tablet view
@media screen and (max-width: 950px) {
  width: 689px;
  height: 178px;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  // background-color: yellow;
}

@media screen and (max-width: 450px) {
  display: none;
  margin: unset;
}
`

export const FrontendMentors = styled(Container)`
color: black; 
height: 137px;
border-radius: 10px;
background-image: url('/assets/suggestions/desktop/background-header.png');

div {
  margin: 0 24px;
  // background-color: orange;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 67px;
}

.h2 {
  // background-color: green;
  height: 29px;
  color: #FFFFFF;
}

.body-2 {
  // background-color: yellow;
  width: 108px;
  height: 22px;
  color: #FFFFFF;
  opacity: 0.75;
}

@media screen and (max-width: 950px) {
  color: black; 
  width: 223px;
  height: 178px;
  background-image: url('/assets/suggestions/tablet/background-header.png');

  div {
    width: 153px;
    height: 51px;
    position: relative;
    top: 103px;
  }

  .h2 {
    // background-color: green;
    letter-spacing: -0.25px;
    font-size: 20px;
  }
  
  .body-2 {
    // background-color: yellow;
    font-size: 15px;
  }
}
`

export const Tag = styled(Container)`
height: 166px;
background-color: #FFFFFF;
margin-top: 24px;
border-radius: 10px;

.tag-container {
  margin: 24px;
  // background-color: yellow;
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


@media screen and (max-width: 950px) {
  height: 178px;
  width: 223px;
  background: #FFFFFF;
  margin-left: 10px;
  margin-top: 0;
}

@media screen and (max-width: 450px) {
  display: block;
  margin-top: 24px;
}
`

export const All = styled.div`
width: 48px;
height: 30px;
border-radius: 10px;
background-color: ${(props) => props.type === 'All' ? '#4661E6' : '#F7F8FD'};
color: ${(props) => props.type === 'All' ? '#FFFFFF' : '#4661E6'};
display: flex;
justify-content: center;
align-items: center;
font-size: 13px;
font-weight: 600;
cursor: pointer;
`

export const UI = styled(All)`
background-color: ${(props) => props.type === 'UI' ? '#4661E6' : '#F7F8FD'};
color: ${(props) => props.type === 'UI' ? '#FFFFFF' : '#4661E6'};
margin-left: 8px;
  &:hover {
    /* cursor: pointer; */
    /* background: #F2F4FF;  */
  }
`

export const UX = styled(All)`
background-color: ${(props) => props.type === 'UX' ? '#4661E6' : '#F7F8FD'};
color: ${(props) => props.type === 'UX' ? '#FFFFFF' : '#4661E6'};
margin-left: 8px;
  /* &:hover {
    cursor: pointer;
    background: #F2F4FF; 
  } */
`

export const Enhancement = styled(All)`
width: 111px;
background-color: ${(props) => props.type === 'Enhancement' ? '#4661E6' : '#F7F8FD'};
color: ${(props) => props.type === 'Enhancement' ? '#FFFFFF' : '#4661E6'};
  /* &:hover {
    cursor: pointer;
    background: #F2F4FF; 
  } */
`

export const Bug = styled(All)`
width: 56px;
margin-left: 13px;
background-color: ${(props) => props.type === 'Bug' ? '#4661E6' : '#F7F8FD'};
color: ${(props) => props.type === 'Bug' ? '#FFFFFF' : '#4661E6'};
  /* &:hover {
    cursor: pointer;
    background: #F2F4FF; 
  } */
`

export const Feature = styled(All)`
width: 77px;
background-color: ${(props) => props.type === 'Feature' ? '#4661E6' : '#F7F8FD'};
color: ${(props) => props.type === 'Feature' ? '#FFFFFF' : '#4661E6'};
margin-top: 14px;
  /* &:hover {
    cursor: pointer;
    background: #F2F4FF; 
  } */
`

export const RoadMap = styled(Container)`
height: 178px;
background-color: #FFFFFF;
margin-top: 24px;
border-radius: 10px;

.roadmap-container {
  width: 80%;
  height: 100%;
  margin: 19px 24px 24px;
  // background-color: yellow;
}

.roadmap-view {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: orange; */
  height: 26px;
}


.roadmap-view .h3{
  // background-color: green;
  color: #4661E6;
}

.roadmap-view .body-3{
  /* background-color: green; */
  text-decoration: underline; 
  color: #4661E6;
}

.roadmap-view .body-3:hover {
  cursor: pointer;
}

.in_active {
  opacity: 0.25;
  cursor: not-allowed;
  text-decoration: underline; 
  font-size: 13px;
}

.inactive {
  font-size: 16px;
  font-weight: 700;
  color: #647196;
}

.roadmap-planned {
  height: 23px;
  // background-color: orange;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.roadmap-planned div{
  // background-color: green;
  width: 79px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.roadmap-planned .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #F49F85;
}

.roadmap-planned .body-1 {
  margin-left: 16px;
}

.roadmap-planned .num {
  font-size: 16px;
  // background-color: green;
  width: 11px;
  color: #4661E6;
  font-weight: 700;
}

.roadmap-progress {
  height: 23px;
  // background-color: orange;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.roadmap-progress div{
  // background-color: green;
  width: 98px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.roadmap-progress .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #AD1FEA;
}

.roadmap-progress .num {
  font-size: 16px;
  // background-color: green;
  width: 11px;
  color: #4661E6;
  font-weight: 700;
}

.roadmap-live {
  height: 23px;
  // background-color: orange;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.roadmap-live div{
  // background-color: green;
  width: 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.roadmap-live .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #62BCFA;
}

.roadmap-live .num {
  font-size: 16px;
  // background-color: green;
  width: 11px;
  color: #4661E6;
  font-weight: 700;
}


@media screen and (max-width: 950px) {
  height: 178px;
  width: 223px;
  background: #FFFFFF;
  margin-top: 0;
  margin-left: 10px;
}

.roadmap-container {
  width: 80%;
  height: 75%;
  margin: 19px 24px 24px;
  // background-color: yellow;
}

@media screen and (max-width: 450px) {
  display: block;
  margin: 0;
}
`