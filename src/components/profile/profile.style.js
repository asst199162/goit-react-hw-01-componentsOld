import styled from 'styled-components';
import { theme } from 'theme';


export const Profile = styled.div`
border : ${p=>p.theme.borders.black};
border-radius: ${p=>theme.radii.normal};
text-align : center;
width : 250px;
margin-left: auto;
margin-right: auto;
box-shadow: ${p=>p.theme.shadows.first};
`;

export const Avatar = styled.img`
margin-top : ${p => p.theme.space[4]}px;
height : 100px;
margin-left: auto;
margin-right: auto;

`;

export const Itemstats = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border : ${p => p.theme.borders.black};
    padding-bottom : ${p => p.theme.space[4]}px;
`
export const Stats = styled.ul`
display: flex;
padding-top: ${p=>p.theme.space[5]}px; 
`
export const Text = styled.p`
margin-top :${p=>p.theme.space[3]};
font-weight: ${p=>p.bold ? p.theme.fontWeights.bold:p.theme.fontWeights.normal};
font-size: ${p=>p.l ? p.theme.fontSizes.l: p.theme.fontSizes.m};
`

export const DescriptionText = styled.div`
padding-top:  ${p=>p.theme.space[5]}px;
display: flex;
flex-direction: column;
align-items: center;
gap:  ${p=>p.theme.space[3]}px;
`