import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from "recharts";

const data = [
    { name: 'Янв', uv: 4000, pv: 2400, amt: 2410 },
    { name: 'Фев', uv: 2000, pv: 1398, amt: 2410 },
    { name: 'Март', uv: 4000, pv: 1398, amt: 2410 },
    { name: 'Апрель', uv: 3000, pv: 1398, amt: 2410 },
    // Другие данные...
];

function CustomChart() {
    return (
        <LineChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            <Line type="monotone" dataKey="amt" stroke="#8884d8" />
            <ReferenceLine y={1500} label="Test" stroke="red" strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
        </LineChart>
        // <LineChart width={500} height={300} data={data}>
        //     <XAxis dataKey="name"/>
        //     <YAxis/>
        //     <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        //     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        //     <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        // </LineChart>
    );
}

export default CustomChart;
