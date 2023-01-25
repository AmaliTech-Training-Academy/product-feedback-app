import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 72px;
    background-image: url('./assets/suggestions/mobile/background-header.png');
    /* background-color: black; */
    /* opacity: 0.6; */
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: fixed; */
    z-index: 1;
    display: none;

    .topic {
        width: 115px;
        height: 41px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 24px;

        .title {
            font-weight: 700;
            font-size: 15px;
            line-height: 22px;
            letter-spacing: -0.1875px;
            color: #FFFFFF;
        }

        .subtitle {
            font-weight: 500;
            font-size: 13px;
            line-height: 19px;
            color: #FFFFFF;
            mix-blend-mode: normal;
            opacity: 0.75;
        }
    }

    img {
        margin-right: 28px;
    }

    .pop-up {
        position: absolute;
        top: 72px;
        /* left: 0;
        right: 0;
        bottom: 0; */
        background-color: rgba(0, 0, 0, 0.5);
        /* opacity: 0.6; */
        width: 100%;
        height: 100vh;
        z-index: 5;
    }

    .menu {
        width: 271px;
        height: 100%;
        background-color: #F7F8FD;
        margin-left: auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
    }

    @media (max-width: 450px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`