import styled from "styled-components";

export const Nav = styled.div`
    position: relative;
    width: 100%;
    height: ${(props) => props.type === 'home' ? '72px' : '113px'};
    background: #373F68;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: #FFFFFF;
    margin: ${(props) => props.type === 'home' ? undefined : '78px 0 48px'};

    a {
        color: #FFFFFF;
    }

    .suggestion-image {
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
        cursor: pointer;

        svg {
            margin-left: 9px;
        }

        @media (max-width: 450px) {
            margin-left: 24px;
        }
    }

    .inactive {
        color: #F2F4FE;
        opacity: 0.5;
        cursor: not-allowed;

        @media (max-width: 450px) {
            margin-left: 24px;
        }
    }

    svg path {
            stroke: #FFF;
        }

    button {
        position: absolute;
        top: 0;
        right: 16px;
        bottom: 0;
        margin: auto 0;
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

    .roadmap-link {
        margin-left: 32px;
    }

    .roadmap-goback {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    @media (max-width: 950px) {
        width: 689px;
        margin: ${(props) => props.type === 'home' ? undefined : '56px auto 32px'}
    }

    @media (max-width: 450px) {
        width: 100vw;
        border-radius: 0;
        margin: ${(props) => props.type === 'home' ? '71px 0 0' : '0'};

        .add-feedback {
        width: 134px;
        margin-right: 8px;
    }
    }

`