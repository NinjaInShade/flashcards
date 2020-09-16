// Libraries , css and static files
import React from "react";
import styled from "styled-components";

// Components and util
import { colours } from "../../utils/globalCSS";

const DonutChartSvg = styled.svg`
  border-radius: 50%;
  display: block;
`;

const DonutChartTrack = styled.circle`
  fill: transparent;
  stroke: rgba(16, 99, 176, 0.5);
  stroke-width: 26;
  r: ${(props) => props.r};
  cx: ${(props) => props.cx};
  cy: ${(props) => props.cy};
  transform: ${(props) => props.transform};
`;

const DonutChartIndicator = styled(DonutChartTrack)`
  fill: transparent;
  stroke: ${colours.primary200};
  stroke-width: 26;
  stroke-dasharray: 0 10000;
  transition: stroke-dasharray 0.3s ease;
`;

const DonutChartText = styled.text`
  fill: #000000;
  x: ${(props) => props.x};
  y: ${(props) => props.y};
`;

const DonutChartTextLabel = styled.tspan`
  font-size: 1.2rem;
  font-weight: 550;
  x: ${(props) => props.x};
  y: ${(props) => props.y};
`;

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
    <DonutChartSvg width={size} height={size} className="donutchart">
      <DonutChartTrack r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} />
      <DonutChartIndicator r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} />
      <DonutChartText x={halfsize} y={halfsize} style={{ textAnchor: "middle" }}>
        <DonutChartTextLabel x={halfsize} y={halfsize + 5}>
          {valuelabel}
        </DonutChartTextLabel>
      </DonutChartText>
    </DonutChartSvg>
  );
}
