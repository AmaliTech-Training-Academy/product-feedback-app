import styled from "styled-components";

export const Container = styled.div`
    width: 540px;
    height: 745px;
    margin: 92px 0px 192px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* margin-top: 96px; */

    .content {
        position: relative;
        width: 100%;
        height: 657px;
        border-radius: 10px;
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        /* justify-content: center; */

        .plus {
            position: absolute;
            left: 42px;
            top: -28px;
        }

        .head {
            color: #3A4374;
            margin: 52px 0 16px 42px;
            align-self: baseline;
        }

        .buttons {
            width: 456px;
            margin-top: 8px;
            display: flex;
            justify-content: flex-end;
            gap: 16px;
        }

        .cancel {
            width: 93px;
        }
    }
`