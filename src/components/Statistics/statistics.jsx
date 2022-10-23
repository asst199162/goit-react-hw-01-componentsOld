import { Title, Statistic,StatList,StatItem} from "./statistics.style"
import PropTypes from 'prop-types';
export const Statistics = ({ data,title }) =>
{
    return <Statistic>
    {title && <Title>{title}</Title>}
<StatList>
    {data.map(({ id, label, percentage }) =>
        <StatItem key={id} style={{ backgroundColor: randomColor() }}>
            <span>{label}</span>
            <span >{percentage}</span>
        </StatItem>)}
</StatList>
</Statistic>
}
const randomColor = () =>
    '#' + Math.floor(Math.random() * 16777215).toString(16);

Statistic.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage :PropTypes.number,
};