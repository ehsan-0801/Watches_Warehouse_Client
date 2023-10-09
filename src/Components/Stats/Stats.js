
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useWatch from '../../Hooks/useWatch';

const Stats = () => {
    const [watches, setWatches] = useWatch()
    return (
        <div className="p-3 my-2">
            <h2 className="text-primary">Stats</h2>
            <div className="container">
                <div className="row mx-auto my-5">
                    <div className="col-md-6 col-sm-12">
                        <BarChart width={ 300 } height={ 250 } data={ watches }>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="quantity" fill="#82ca9d" />
                        </BarChart>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <BarChart width={ 300 } height={ 250 } data={ watches }>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="price" fill="#8884d8" />
                        </BarChart>
                    </div>
                </div>
                <div className="row container mx-auto">
                    <div className="col-md-6 col-sm-12">
                        <LineChart width={ 300 } height={ 400 } data={ watches }
                            margin={ { top: 5, right: 30, left: 20, bottom: 5 } }>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="quantity" stroke="#8884d8" />
                            <Line type="monotone" dataKey="quantity" stroke="#82ca9d" />
                        </LineChart>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <LineChart width={ 300 } height={ 400 } data={ watches }
                            margin={ { top: 5, right: 30, left: 20, bottom: 5 } }>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="price" stroke="#8884d8" />
                            <Line type="monotone" dataKey="price" stroke="#82ca9d" />
                        </LineChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;