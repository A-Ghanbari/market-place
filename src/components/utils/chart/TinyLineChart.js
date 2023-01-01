import "components/utils/chart/chart.scss"

import { LineChart as ReLineChart } from 'recharts';

function TinyLineChart({ children, ...props }) {
    return (

        <ReLineChart
            {...props}
        >
            {children}
        </ReLineChart>
    );
}

export default TinyLineChart;
