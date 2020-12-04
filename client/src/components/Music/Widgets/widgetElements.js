
import styled from 'styled-components';

export const WidgetContainer = styled.div `
    margin-top: 100px;
    margin-left: 10%;
    margin-right:70%;

    background:'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)'
    max-width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border:solid;
    box-shadow: inset 0 0 0 100px rbga(0, 0, 0, 0.2);
    // object-fit: contain;

`

// export const Wrapper = styled.div `
//     background:  'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)'
//     display: flex;
//     flex-direction: column;
//     margin-top: 2px;
//     margin-bottom: 2px;
// `
// export const FormWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
// `
export const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;

`
export const Button = styled.button`
    padding: 5px 0;
    border: none;
    border-radius: 2px;
    font-size: 15px;
    cursor: pointer;
`
export const input =styled.span`
    text-align: center;
`
