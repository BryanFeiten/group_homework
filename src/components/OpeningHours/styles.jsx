import styled from "styled-components";

export const CardHours = styled.div`
    height: 50vh;
    background: #8a1712;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const LateralImg = styled.img `
    height: 50vh;
`;

export const CentralContent = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const Description = styled.h3 `
    font-size: ${props => props.size ? props.size : '40px'};
    color: white;
    margin-left: ${props => props.initialMargin ? props.initialMargin : '0'};
`;

export const CardHoursDetails = styled.div `
    height: 80px;
    width: 70vw;
    border-bottom: 3px solid #BB9E5A;
    border-top: 3px solid #BB9E5A;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Icon = styled.img `
    width: 30px;
    height: 30px;
`;

export const ContainerInfo = styled.div `
    display: flex;
`;

