import styled from "styled-components";

export const SuggestionContainer = styled.div`
width: 825px;
height: 151px;
background: yellow;
margin-top: 24px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;

.suggestion-board {
  width: 761px;
  height: 95px;
  margin: 28px 32px;
  background: blue;
}

.right-components {
  width: 454px;
  height:95px;
  background: orange;
  display: flex;
  justify-content: space-between;
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
  width: 180px;
  height: 26px;
  background-color: white;
}

.text .body-1 {
  color: #3A4374;
  font-weight: 400;
  width: 374px;
  height: 23px;
  background-color: white;
  margin-top: 4px;
  margin-bottom: 12px;
}
`
