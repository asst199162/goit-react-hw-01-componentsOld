
import {TableData,TableHead,Table,TableR} from "./TransactionHistory.styled"
import PropTypes from 'prop-types';


export const TransactionHistory = ({transactions}) =>
{
    return <Table>
        {transactions.map(({ id, type, amount, currency }) => {
        return <tbody>
            <TableR key ={id}>
                <TableData>{type}</TableData>
                <TableData>{amount}</TableData>
                <TableData>{currency}</TableData>
            </TableR>
        </tbody> 
        }
        )}


    <thead>
        <tr>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
        </tr>
        </thead>

    </Table>
}

Table.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};