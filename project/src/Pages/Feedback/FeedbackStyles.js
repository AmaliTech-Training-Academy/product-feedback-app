import styled from "styled-components";

export const Container = styled.div`
    width: 540px;
    height: ${(props) => props.type === "Edit" ? '910px' : '745px'};
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

            @media (max-width: 450px) {
                left: 24px;
            }
        }

        .head {
            color: #3A4374;
            margin: 52px 0 16px 42px;
            align-self: baseline;

            @media (max-width: 450px) {
                font-size: 18px;
                line-height: 26px;
                letter-spacing: -0.25px;
                margin-left: 23.5px;
            }
        }

        .buttons {
            width: 456px;
            margin-top: 8px;
            display: flex;
            justify-content: flex-end;
            gap: 16px;

            @media (max-width: 450px) {
                width: 100%;
                flex-direction: column-reverse;
                justify-content: center;
                align-items: center;
                /* background-color: red; */
            }
        }

        .cancel {
            width: 93px;

            @media (max-width: 450px) {
                width: 279px;
            }
        }

        @media (max-width: 450px) {
            height: 708px;
        }
    }

    @media (max-width: 450px) {
        width: 327px;
        height: 782px;
        margin-top: 34px;
    }
`