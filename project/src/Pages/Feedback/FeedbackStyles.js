import styled from "styled-components";

export const Container = styled.div`
    width: 540px;
    margin: 92px auto 192px;
    display: flex;
    flex-direction: column;
    gap: 68px;

    .content {
        position: relative;
        width: 100%;
        border-radius: 10px;
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;

        .plus {
            position: absolute;
            left: 42px;
            top: ${(props) => props.type === 'Edit' ? '-19px' : '-28px'};

            @media (max-width: 450px) {
                left: 24px;
            }
        }

        .head {
            color: #3A4374;
            margin: 52px 0 ${(props) => props.type === 'Edit' ? '51px' : '16px'} 42px;
            align-self: baseline;

            @media (max-width: 450px) {
                font-size: 18px;
                line-height: 26px;
                letter-spacing: -0.25px;
                margin-left: 23.5px;
            }
        }

        .error {
            margin-top: -16px;
            align-self: baseline;
            color: #D73737;
            font-weight: 400;
        }

        .buttons {
            width: 456px;
            margin-top: 8px;
            display: flex;
            justify-content: flex-end;
            gap: 16px;
            margin-bottom: 40px;

            @media (max-width: 450px) {
                width: 100%;
                flex-direction: column-reverse;
                justify-content: center;
                align-items: center;
            }
        }

        input[type='button'] {
            height: 44px;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
            color: #F2F4FE;
            cursor: pointer;
        }

        .cancel {
            width: 93px;
            margin-left: 110px;


            @media (max-width: 450px) {
                width: 279px;
                margin-left: unset;
            }
        }

        .delete {
            width: 93px;

            @media (max-width: 450px) {
                width: 279px;
            }
        }

        .save {
            @media (max-width: 450px) {
                width: 279px;
            } 
        }

    }

    @media (max-width: 450px) {
        width: 327px;
    }
`