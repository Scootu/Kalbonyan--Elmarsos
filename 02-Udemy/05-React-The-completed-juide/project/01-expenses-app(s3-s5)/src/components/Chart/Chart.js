import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
    
    const dataPointValues = props.dataPoints.map((data)=> { 
        return data.value ;
    });
    console.log(dataPointValues);
    const totalMax = Math.max(...dataPointValues);
    console.log(totalMax);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};
export default Chart;
