import styled from 'styled-components';


export const Profile = styled.div`
    border : ${p=>p.theme.borders.black};
    border-radius: ${p=>p.theme.radii.normal};
    width : 250px;
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
    border-top : ${p => p.theme.borders.black};
    border-right : ${p => p.noLineBorder ? p.theme.borders.none : p.theme.borders.black};
    padding-bottom : ${p => p.theme.space[4]}px;
`
export const Stats = styled.ul`
    display: flex;
    margin-top: ${p => p.theme.space[5]}px;
    background-color : ${p=>p.theme.colors.background};
`
export const Text = styled.p`
    margin-top :${p=>p.theme.space[3]}px;
    font-weight: ${p=>p.bold ? p.theme.fontWeights.bold:p.theme.fontWeights.normal};
    color: ${p => p.black ? p.theme.colors.black : p.theme.colors.gray};
    font-size: ${p => p.l ? p.theme.fontSizes.l : p.theme.fontSizes.m};
`

export const DescriptionText = styled.div`
    padding-top:  ${p => p.theme.space[5]}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${p=>p.theme.space[3]}px;
`
export const AmountStat = styled.span`
color: ${p => p.gray ? p.theme.colors.gray : p.theme.colors.black};
font-weight: ${p=> p.bold ? p.theme.fontWeights.bold: p.theme.fontWeights.normal};
`

