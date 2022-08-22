import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { Legend } from '@devexpress/dx-react-chart-material-ui';
import { Tooltip } from '@devexpress/dx-react-chart-material-ui';
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';
import { Palette } from '@devexpress/dx-react-chart';
import Authorization, { hasAccess } from "../../services/Authorization";

export default class GrafDojene extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {data: [],
      barva: ['#8bc34a', '#3f51b5', '#0276aa', '#bdbdbd', '#FF4081', '#E040FB']};
  }

  async componentDidMount() {

    await hasAccess();
    fetch(process.env.REACT_APP_APISERVER + "dojeneZvirata", {
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
      <div className="card">
    {this.state.data !== [] ?
        <Chart
          data={this.state.data}
          height={300}
        >
         <Palette scheme={this.state.barva} />
          <PieSeries
            valueField="pocet"
            argumentField="nazev_druhu"
            innerRadius={0.6}
          />
    
       
          <Animation />
          <Legend />
          <EventTracker />
          <Tooltip enabled="true" />
          <HoverState />
        </Chart> : null}
      </div>
    );
  }
}
