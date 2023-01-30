import styled from "styled-components";

export const Main = styled.div`
    flex: 1;
    border-radius: 1rem;
    padding: 2rem;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    cursor: pointer;
`

export const GridImageIcon = styled.div`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;

    background: rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
`

export const GridTitle = styled.div`
    font-size: 2.3rem;
    font-weight: bold;
    margin-top: .5rem;
`

export const GridInfo = styled.div`
    font-size: 1.2rem;
    margin-top: 1.4rem;
`

export const YourImc = styled.div`
    font-size: 1.7rem;
    margin: 1rem 0 5rem 0;
`