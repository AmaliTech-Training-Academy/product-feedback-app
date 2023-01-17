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
    width: 456px;
    height: 106px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    gap: 2px;
    /* justify-content: space-between; */

    .input {
        position: relative;
        width: 100%;
        height: 48px;
        background: #F7F8FD;
        /* border: none; */
        border-radius: 5px;
        margin-top: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        .placeholder {
            margin-left: 24px;
            color: #3A4374;
        }

        .down-arrow {
            margin-right: 24px;
        }

        .select {
            position: absolute;
            top: 64px;
            width: 100%;
            height: 240px;
            background: #FFFFFF;
            box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
            border-radius: 10px;
            /* background-color: red; */

            .options {
                width: 100%;
                height: 48px;
                border-bottom: 2px solid #F2F4FF;
            }
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
`