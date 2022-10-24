// Total number of Tools in the records, 
// number of tools with missing information, 
// percentage of tools with missing information compared with the total number of tools in the records,
// number of tools edited using this record management tool
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import PropTypes from 'prop-types';
import AnimatedNumber from 'react-animated-number';


const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

const RecordsDashboard = () => {
    const colors = scaleOrdinal(schemeCategory10).range();
    const data = [
        { Missinginfo: "Tool-1", tools: 20 },
        { Missinginfo: "Tool-2", tools: 44, },
        { Missinginfo: "Tool-3", tools: 36 },
        { Missinginfo: "T00l-4", tools: 50 },
    ];
    const data2 = [
    {
        name: 'Tool A',
        uv: 40,
        female: 2400,
    },
    {
        name: 'Tool B',
        uv: 30,
        female: 1398,
    },
    {
        name: 'Tool C',
        uv: 20,
        female: 9800,
    },
    {
        name: 'Tool D',
        uv: 27.80,
        female: 3908,
    },
    {
        name: 'Tool E',
        uv: 18.90,
        female: 4800,
    },
    {
        name: 'Tool F',
        uv: 23.90,
        female: 3800,
    },
    {
        name: 'Tool G',
        uv: 34.90,
        female: 4300,
    },
    ]

    const data3 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
    };

  return (
    <div style={{ textAlign: "center" }}>
        <h1 className="records">Records Dashboard</h1>
        <div className="records-container"> 
            <div className="records-chart">
                <h2 className="records-title">Number of Tools in the Records</h2>
                <AnimatedNumber
                    component="text"
                    value={9650}
                    duration={1000}
                    formatValue={(n) => n.toFixed(0)}
                    className="records-number"
                />
            </div>
            <br />
            <div className="records-chart">
                <h2 className="records-title">Number of Tools with Missing Information</h2>
                <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                }}
                barSize={20}
                >
                <XAxis
                    dataKey="Missinginfo"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="tools" fill="#8884d8" background={{ fill: "#eee" }} />
                </BarChart> 
            </div>
            <div className="records-chart">
                <h2 className="records-title">Percentage of Tools with Missing Information</h2>

                <PieChart width={400} height={400}>
                    <Pie
                        data={data3}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data3.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className="records-chart">
                <h2 className="records-title">Number of Tools with frequently Missing Information</h2>
                <BarChart
                    width={500}
                    height={300}
                    data={data2}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis  />
                    <Bar dataKey="female" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data2.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>        
        </div>
    </div>  
    );
};

export default RecordsDashboard;
