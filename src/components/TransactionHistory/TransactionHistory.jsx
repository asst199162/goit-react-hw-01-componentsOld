
import {TableData,TableHead,Table,TableR} from "./TransactionHistory.styled"
import PropTypes from 'prop-types';


export const TransactionHistory = ({transactions}) =>
{
    return <Table>
        <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
            return <TableR key={id}>
                <TableData>{type}</TableData>
                <TableData>{amount}</TableData>
                <TableData>{currency}</TableData>
                </TableR>
        }
        )}
        </tbody>

    <thead>
        <tr>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
        </tr>
        </thead>

    </Table>
}

Table.propTypes = {
    id:PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
};