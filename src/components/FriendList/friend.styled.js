import styled from 'styled-components';

export const ItemList = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border : ${p => p.theme.borders.black};
    width:250px;
    height: 80px;
    margin-top:${p => p.theme.space[4]}px;
    box-shadow: ${p => p.theme.shadows.first};
    border-radius:${p => p.theme.radii.normal};
        :first-child {
    margin-top: 0px;}

` 
export const Icon = styled.span`
color:${p=>p.isOnline?'green':'red'};
`

