import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.scss";

const Chart = (props) => {
  const dataPointsValueArray = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointsValueArray);

  console.log(dataPointsValueArray + ": " + totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
