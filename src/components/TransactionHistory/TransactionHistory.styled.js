import styled from "styled-components";

export const TableData = styled.td`
border : ${p => p.theme.borders.black};
width: 170px;
text-align: center;
`

export const TableHead = styled.th`
border : ${p => p.theme.borders.black};
text-align: center;
`
export const Table = styled.table`
text-align: center;
padding-top:25px;
td tr :nth-of-type(2n) {background-color:#ff0000};
`

export const TableR = styled.tr`

`

export const TableRe = styled.thead`

`

