import styled from 'styled-components';


export const Profile = styled.div`
padding : 10px;
border : 1px solid black;
border-radius: 5px;
text-align : center;
width : 250px;
margin-left: auto;
margin-right: auto;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

export const Avatar = styled.img`
height : 100px;
margin-left: auto;
margin-right: auto;

`;

export const Itemstats = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const Stats = styled.ul`
display: flex;
padding-top: 12px; 
`
export const Text = styled.p`
margin-top :4px;
font-weight: 700;
font-size: 32px;
`

export const DescriptionText = styled.div`
padding-top: 15px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`