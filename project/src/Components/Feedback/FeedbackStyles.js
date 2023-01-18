import styled from 'styled-components'

export const Nav = styled.div`
    width: 76px;
    height: 20px;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    .back {
        color: #647196
    }
`

export const Container = styled.div`
    position: relative;
    width: 456px;
    height: ${(props) => props.type === 'details' ? "154px" : "106px"};
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    gap: 2px;
    /* justify-content: space-between; */

    .input {
        width: 100%;
        height: 48px;
        background: #F7F8FD;
        border: none;
        border-radius: 5px;
        margin-top: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        font-weight: 500;
        font-size: 13px;
        line-height: 19px;
        color: #3A4374;
        padding-left: 16px;
        resize: none;

        .placeholder {
            margin-left: 24px;
            color: #3A4374;
        }

        .down-arrow {
            margin-right: 24px;
        }

        &:hover, &:focus {
            outline: 2px solid #4661E6;
            /* border: ; */
        }

    }
    .details {
        height: 96px;
        padding-top: 16px;
    }


    .select {
        position: absolute;
        top: 122px;
        width: 100%;
        /* height: 240px; */
        background: #FFFFFF;
        box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
        border-radius: 10px;
        z-index: 7;
        /* background-color: red; */

        .options {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 48px;
            border-bottom: 2px solid #F2F4FF;
            cursor: pointer;

            &:hover {
                    span {
                        color: #AD1FEA;
                    }
                }
                

            .option {
                margin-left: 24px;
                color: #647196;
            }

            .check {
                margin-right: 24px;
                /* display: none; */
            }

            &:hover {
                img {
                    display: block;
                }
            }
        }

        .last {
            border-bottom: none;
        }
    }

    .title {
        font-weight: 700;
        letter-spacing: -0.194444px;
        color: #3A4374;
    }

    .description {
        font-weight: 400;
        color: #647196;
    }

    @media (max-width: 450px) {
        width: 279px;
    }
`