/*Admin Main page
Junaid Saleem 103824753
Last edited 10/10/2023*/
import UserActivityChart from './UserActivityChart';
import TestResultChart from './TestResultChart';
import '../Css/Chart.css';

const testData = [
    { postcode: 'Postcode1', positiveCases: 50 },
    { postcode: 'Postcode2', positiveCases: 30 },
    { postcode: 'Postcode3', positiveCases: 20 },
    { postcode: 'Postcode4', positiveCases: 10 },
    // Add more data as needed
];

function AdminHome() {
    return <>
        <div className="chart-main">
            <UserActivityChart />
            <TestResultChart data={testData} />
        </div>
    </>;
}

export default AdminHome;