import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Graph(props) {
    
    const [data, setData] = useState(null);
    useEffect(() => {
        axios
        .get('http://52.79.140.65:8080/' + props.url + '')
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div>
          <LineChart width={850} height={450} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="cal" />
          <YAxis type='number' domain={['dataMin', 'dataMax']}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
          </LineChart>
    
        </div>
      );
}

export default Graph