import styled from "styled-components";

export const Head = styled.div`
    position: relative;
    width: 825px;
    height: 72px;
    background: #373F68;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: #FFFFFF;

    img {
        margin-left: 24px;

        @media (max-width: 450px) {
            display: none;
        }
    }

    .suggestions {
        @media (max-width: 450px) {
            display: none;
        } 
    }

    .sort {
        font-weight: 500;
        margin: 0 273px 0 22px;
        cursor: pointer;

        svg {
            margin-left: 9px;
        }

        svg path {
            stroke: #FFF;
        }

        @media (max-width: 950px) {
            margin-right: 141px;
        }
        @media (max-width: 450px) {
            margin-right: 44px;
        }
    }

    button {
        flex: 1;
        margin-right: 16px;
    }

    .select {
        position: absolute;
        left: 210px;
        top: 88px;
        width: 255px;
        background: #FFFFFF;
        box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
        border-radius: 10px;
        z-index: 7;

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
            }

            /* &:hover {
                img {
                    display: block;
                }
            } */
        }

        .last {
            border-bottom: none;
        }

        @media (max-width: 450px) {
            left: 24px;
        }
    }

    @media (max-width: 950px) {
        width: 689px;
    }

    @media (max-width: 450px) {
        width: 100%;
        border-radius: 0;
    }
`