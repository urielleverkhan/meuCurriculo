import styled, { keyframes } from 'styled-components'

 export const Email = styled.a `
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    font-style: italic;
    font-family: 'Times New Roman', Times, serif;
    text-decoration:none;
    margin-top: 5px;
 `;

   
 const subirLinha = p => keyframes`
 0% { width: 0; }
 100% { width: ${p}; }
`
export const LinhaGrossa = styled.div`
    width:  0;
    height: 5px;
    border-radius: 5px;
    background-color: #382e35;
    margin-top: -3px;
    float:left;

    animation-name: ${props =>subirLinha(props.porcents)};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: ${props =>props.pausado};
 `