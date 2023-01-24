import styled from "styled-components";

export const SuggestionContainer = styled.div`
width: 825px;
height: 151px;
background: #FFFFFF;
margin-top: 24px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
&:hover {
  cursor: pointer;
}
.suggestion-board {
  width: 761px;
  height: 95px;
  margin: 28px 32px;
  // background: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right-components {
  height:95px;
  // background: orange;
  display: flex;
  gap: 40px;
}

.top-arrow {
  width: 40px;
  height: 53px;
  border-radius: 10px;
  background: #F7F8FD;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.top-arrow:hover {
  cursor: pointer;
  background: #F2F4FF;
}

.top-arrow span {
  font-size: 13px;
  font-weight: 700;
  color: #3A4374;
  margin-top: 8px;
}

.text {
  display: flex;
  flex-direction: column;
}
.text .h3 {
  color: #3A4374;
  font-weight: 700;
  height: 26px;
  background-color: white;
}

.text .body-1 {
  color: #3A4374;
  font-weight: 400;
  height: 23px;
  background-color: white;
  margin-top: 4px;
  margin-bottom: 12px;
}

.left-components {
  width: 44px;
  height: 23px;
  // background: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-components span{
  font-size: 16px;
  font-weight: 700;
  color: #3A4374;
}

@media screen and (max-width: 950px) {
  width: 689px;
}

@media screen and (max-width: 450px) {
  width: 327px;
  height: 200px;
  margin: 24px auto 0;

  .suggestion-board {
    height: 152px;
    background: blue;
    margin: 24px;
  }

  .right-components {
    height:152px;
    /* background: orange; */
    display: flex;
    flex-direction: column-reverse;
  }

  .top-arrow {
    width: 69px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: -24px;
  }

  .top-arrow span {
    margin: 5px 0 0 8px;
  }
  
  .text .h3 {
    height: 19px;
    /* background-color: green; */
    font-size: 13px;
    line-height: 19px;

  }

  .text .body-1 {
    height: 38px;
    margin-top: 9px;
    font-size: 13px;
    line-height: 19px;
    /* background-color: green; */
  }

  .left-components {
    width: 44px;
    height: 23px;
    /* background: green; */
    position: absolute;
    transform: translate(235px, 64px);
  }

}
`
