
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [data,setData]=useState([]);
   useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setData(data))
   },[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <LineChart width={400} height={300} data={data}>
                            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                            <CartesianGrid stroke="#aaa" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Legend verticalAlign="top" height={36} />
                            <Line name="Month wise Sell" type="monotone" />
                        </LineChart> </div>

                    <div className="col">
                        {/* InvestMent Vs Reveniew */}
                        <AreaChart width={430} height={250} data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            <Legend verticalAlign="top" height={40} />
                            <Line name="Investment Vs Revenue" type="monotone" />
                        </AreaChart>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {/* Bar chart : Month Vs Sell */}
                        <BarChart width={730} height={250} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="sell" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" fill="#8884d8" />
                            <Bar dataKey="revenue" fill="#82ca9d" />
                        </BarChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;