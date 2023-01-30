import styled from "styled-components";

export const Container = styled.div`
    padding-top: 4rem;
    padding-inline: 2rem;
    padding-bottom: 5rem;

    @media (max-width: 770px) {
        & {
            padding-top: 0;
        }
    }
` 

export const Header = styled.header`
    max-width: 90.0rem;
    margin: 4.0rem auto;

    & p {
        font-size: 2rem;
    }

    @media (max-width: 770px) {
        & {
            padding: 0 2rem;
        }
}
`

export const Main = styled.div`
    max-width: 90.0rem;
    margin: 0 auto;
    display: flex;

    @media (max-width: 770px) {
        & {
            padding: 0 2rem;
            flex-direction: column;
        }
    }
` 

export const LeftSide = styled.div`
    flex: 1;
    margin-right: 4.0rem;

    & h1 {
        font-size: 4rem;
        color: #3A4B5C;
        margin-bottom: 1.6rem;
    }

    & p {
        font-size: 1.6rem;
        margin-bottom: 4rem;
        color: #6A7D8B;
    }

    & input {
        width: 100%;
        border: 0;
        border-bottom: 2px solid rgba(150, 163, 171, 0.5);
        padding: 1rem .2rem;
        margin-bottom: 2rem;

        font-size: 1.4rem;
        outline: 0;
    }

    & form input:disabled {
        opacity: 0.5;
    }

    & form input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    & form button {
        width: 100%;
        padding: 1.5rem 0;
        margin-top: 4rem;
        border: 0;
        border-radius: 1rem;

        background: #227C9D;
        font-size: 1.5rem;
        color: white;
        cursor: pointer;

        transition: opacity ease 200ms;
    
    
    }

    & form button:hover {
        opacity: .7;
    }

    & form button:disabled {
        opacity: 0.5;
        cursor: auto;
    }

    @media (max-width: 770px) {
        & {
            margin-right: 0;
        }
    }
`

export const RightSide = styled.div`
    flex: 1;
    margin-left: 4.0rem;
    display: flex;

    @media (max-width: 770px) {
        & {
            margin-left: 0;
            margin-top: 5rem;
        }
    }
`

export const Grid = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 430px) {
        & {
            grid-template-columns: 1fr;
        }
    }
`

export const RightBig = styled.div`
    flex: 1;
    display: flex;
`

export const RightArrow = styled.div`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    position: absolute;
    background: #227C9D;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    margin-left: -3.5rem;
    margin-top: 14.5rem;

    transition: opacity ease 200ms;

    &:hover {
        opacity: .7;
    }

    @media (max-width: 770px) {
        & {
            margin-left: 0;
            margin-top: 0;
            border-radius: 1rem;
        }
    }
`

