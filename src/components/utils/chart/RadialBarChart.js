import { RadialBarChart as ReRadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

export default function RadialBarChart({ width, height, data }) {
    return (
        <ResponsiveContainer
            maxHeight={height}
            maxWidth={width}
        >
            <ReRadialBarChart width={width} height={height} cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                <RadialBar
                    minAngle={15}
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    clockWise
                    dataKey="uv"
                />
            </ReRadialBarChart>
        </ResponsiveContainer>
    )
}
