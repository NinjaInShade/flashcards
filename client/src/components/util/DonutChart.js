// Libraries , css and static files
import React from "react";
import "./DonutChart.css";

export default function DonutChart(props) {
  const { size, strokewidth, value, valuelabel } = props;

  const halfsize = size * 0.5;
  const radius = halfsize - strokewidth * 0.5;
  const circumference = 2 * Math.PI * radius;
  const strokeval = (value * circumference) / 100;
  const dashval = strokeval + " " + circumference;

  const trackstyle = { strokeWidth: strokewidth };
  const indicatorstyle = { strokeWidth: strokewidth, strokeDasharray: dashval };
  const rotateval = "rotate(-90 " + halfsize + "," + halfsize + ")";

  return (
    <svg width={size} height={size} className="donutchart">
      <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track" />
      <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator" />
      <text className="donutchart-text" x={halfsize} y={halfsize} style={{ textAnchor: "middle" }}>
        <tspan className="donutchart-text-label" x={halfsize} y={halfsize + 5}>
          {valuelabel}
        </tspan>
      </text>
    </svg>
  );
}
