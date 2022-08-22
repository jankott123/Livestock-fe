import * as React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useState, useEffect } from "react";
import { propsToClassKey } from "@mui/styles";

const data = [
  { name: "19.2.2000", hmotnost: 40, pv: 2400 },
  { name: "19.2.2000", hmotnost: 50, pv: 400 },
];

export default function Graf(props) {
  

  return (

   
    <LineChart width={850} height={300} data={props.hmotnost}>
      <Line type="monotone" dataKey="hmotnost" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="datum" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}
