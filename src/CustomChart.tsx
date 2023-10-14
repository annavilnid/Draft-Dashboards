import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
    { time: '00:00', value: 0 },
    { time: '00:00', value: 1000 },
    { time: '00:00', value: 2000 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
    { time: '00:00', value: 1500 },
];

function CustomChart() {
    return (
        <LineChart width={800} height={400} data={data}>
            <XAxis dataKey="time" interval={0} />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" name="Значения" dot={false} />
            <Tooltip />
            <Legend />
        </LineChart>
    );
}

export default CustomChart;




