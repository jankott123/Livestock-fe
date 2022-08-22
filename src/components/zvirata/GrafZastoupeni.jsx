import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { Legend } from "@devexpress/dx-react-chart-material-ui";
import { Tooltip } from "@devexpress/dx-react-chart-material-ui";
import { EventTracker, HoverState } from "@devexpress/dx-react-chart";
import { Palette } from "@devexpress/dx-react-chart";
import {
  schemeCategory10,
  schemeAccent,
  schemeDark2,
  schemePaired,
  schemePastel1,
  schemePastel2,
  schemeSet1,
  schemeSet2,
  schemeSet3,
} from "d3-scale-chromatic";
import Authorization, { hasAccess } from "../../services/Authorization";

import { Divider } from "@mui/material";
import { BatterySaverSharp } from "@mui/icons-material";

export default class GrafZastoupeni extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      barva: ["#8bc34a", "#3f51b5", "#0276aa", "#b2a429", "#FF4081", "#E040FB"],
    };
  }

  async componentDidMount() {
    await hasAccess();
    fetch(process.env.REACT_APP_APISERVER + "zastoupeniZvirat", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  }

  render() {
    return (
      <div>
        <Chart data={this.state.data} height={300}>
          <Palette scheme={this.state.barva} />
          <PieSeries valueField="1" argumentField="nazev_druhu" />

          <Animation />
          <Legend />
          <EventTracker />
          <Tooltip enabled="true" />
          <HoverState />
        </Chart>
      </div>
    );
  }
}
