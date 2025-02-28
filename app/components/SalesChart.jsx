import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from "recharts";

const data = [
  { name: "5k", value: 20 },
  { name: "10k", value: 35 },
  { name: "15k", value: 45 },
  { name: "20k", value: 25 },
  { name: "25k", value: 60 },
  { name: "30k", value: 40 },
  { name: "35k", value: 30 },
  { name: "40k", value: 55 },
  { name: "45k", value: 65 },
  { name: "50k", value: 50 },
  { name: "55k", value: 40 },
  { name: "60k", value: 45 }
];

const SalesChart = () => {
  return (
    <div className="bg-white  shadow-md rounded-2xl w-full h-[444px]">
      <div className="">
      <h2 className="text-xl font-semibold px-8 pt-9">Sales Details</h2>
        
      </div>
      <div className="pt-8 px-8">

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#007BFF"
            strokeWidth={2}
            dot={{ fill: "#007BFF", strokeWidth: 2 }}
            />
          <Area type="monotone" dataKey="value" stroke="#007BFF" fill="rgba(0, 123, 255, 0.2)" />
        </LineChart>
      </ResponsiveContainer>
            </div>
    </div>
  );
};

export default SalesChart;
