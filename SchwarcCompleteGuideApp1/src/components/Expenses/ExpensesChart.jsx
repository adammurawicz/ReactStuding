import {Chart} from '../Chart/Chart'

export const ExpensesChart = (props) => {

    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Fab', value: 0},
        {label: 'March', value: 0},
        {label: 'April', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth()
        chartDataPoints[expenseMonth].value += expense.amount
    }

    return <Chart dataPoints={chartDataPoints}/>
}