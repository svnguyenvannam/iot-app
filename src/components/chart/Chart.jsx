import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { iotData } from "../../dummyData.js";

export default function Chart({title, data, dataKey, grid}) {


  return (

    <div className="chart">
      <h3 className="chartTitle"> Biểu Đồ </h3>
      <ResponsiveContainer width="100%" aspect={4 / 1} >
        <LineChart width={500}
          height={300}
          data={iotData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}> 
        <XAxis dataKey="thu" stroke="#5550bd"/>

        

        <Line type="monotone" dataKey="Tempurature" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Humidity" stroke="#82ca9d" activeDot={{ r: 8 }} />

        <Tooltip />
        <Legend/>
        {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3"/>}
        </LineChart>


      </ResponsiveContainer>

    </div>
  );
}
