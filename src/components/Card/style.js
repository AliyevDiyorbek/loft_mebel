import styled from 'styled-components';
import { ReactComponent as heart } from '../../assets/svg/heart.svg'
export const Container = styled.div`
width: 100%;
/* max-width: 263px; */
width: 24%;
background: #FFFFFF;
margin: 3px;
padding: 20px 15px;
position: relative;
transition: .3s;
&:hover{
    box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.11);
}
`
Container.Header = styled.div`
margin-top: 38px;
 height: 200px;
display: flex;
align-items: center;
justify-content: center;
/* overflow: hidden; */
cursor: pointer;
`
Container.Body = styled.div`
margin-top: 20px;
/* background-color: green; */
`
export const Title = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #414141;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width: 100%;
overflow-wrap: break-word;
`
export const SubTitle = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #414141;
padding-top: 15px;
`
export const Text = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #414141;
padding-top: 6px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width: 100%;
`
export const Price = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #414141;
padding-top: 9px;
`
export const Footer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 8px;
`
Footer.Col = styled.div`

`
Footer.Text = styled.h4`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 11px;
color: #C4C4C4;
`
Footer.Size = styled.h4`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 11px;
color: #414141;
padding-top: 8px;
`


export const Img = styled.img`
 width: 100%;
 height: 100%;
 transition: .3s;
 &:hover{
    transform: scale(1.1);
 }
`

export const Button = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
color: #FFFFFF;
background: #245462;
padding: 13px 0;
height: 40px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 17px;
cursor: pointer;
transition: 0.2s;
&:hover{
    opacity: 0.9;
}
&:active{
    opacity: 0.5;
}
`
export const Heart = styled.div`
 position: absolute;
 right: 15px;
 top: 21px;
`
Heart.Black = styled(heart)`
cursor: pointer;
`