import "./chart.css";
import React, { PureComponent } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
	return (
		<div className="chart">
			<h3 className="chartTitle">User Analytics</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#5550bd" />
					<Line type="monotone" dataKey="Active User" stroke="#8884d8" />
					{/* to get the vertical line when hover */}
					<Tooltip />
					<Legend />
					{grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
