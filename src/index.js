import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import cars from "./practise";

const [honda, tesla] = cars;

const {
  speedStatus: { topSpeed: hondaTopSpeed }
} = honda;

const {
  speedStatus: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  colorByPopularity: [hondaTopColor]
} = honda;
const {
  colorByPopularity: [teslaTopColor]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Model</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColor}</td>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColor}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
