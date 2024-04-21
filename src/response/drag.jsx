import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

import Calendar from "./Calendar/Calendar.jsx";
import Weather from "./Weather/Weather.jsx";
import Chatbot from "./Chatbot/Chatbot.jsx";
import Extension from "./Extension/Extension.jsx";
import Time from "./Time/Time.jsx";
import Recommend from "./Recommand/Recommand.jsx"

const ReactGridLayout = WidthProvider(RGL);

export default class ResizableHandles extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 6,
    rowHeight: 60,
    onLayoutChange: function() {},
    cols: 16
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    // this.state = {
    //   layout: JSON.parse(JSON.stringify(originalLayout))
    // };

    // this.onLayoutChange = this.onLayoutChange.bind(this);
    // this.resetLayout = this.resetLayout.bind(this);
    this.state = { layout };
  }

  generateDOM() {
    const getContent = (index) => {
      switch (index) {
        case 0:
          return <Calendar />;  
        case 1:
          return < Chatbot/>;
        case 2:
          return < Weather/>;
        case 3:
          return < Time/>;
        case 4:
          return < Recommend/>;
        case 5:
          return < Extension/>;
        default:
          return ;
      }
    };

    return _.map(_.range(this.props.items), function(i) {
      return (
        <div key={i}>{getContent(i)}</div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    const availableHandles = ["sw", "ne"]; //"s", "w", "e", "n", "sw", "nw", "se", "ne"
    const oLayout = [
      { x: 2, y: 2, w: 6, h: 5}, // calender
      { x: 8, y: 2, w: 6, h: 10}, // chatbot
      { x: 2, y: 6, w: 3, h: 3}, //  Weather
      { x: 2, y: 8, w: 3, h: 2}, //  Time
      { x: 5, y: 6, w: 3, h: 5}, // Recommondation
      { x: 2, y: 12, w: 12, h: 3}, // expend
    ];

    return _.map(new Array(p.items), function(item, i) {
      const y = _.result(p, "y") || oLayout[i].y;
      return {
        x: oLayout[i].x,
        y: y,
        w: oLayout[i].w,
        h: oLayout[i].h,
        i: i.toString(),
      }
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <div>
        <div className="navbar-title"> Navbar</div>
        <div className="bento-panel">
        <ReactGridLayout
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          {...this.props}
        >
          {this.generateDOM()}
        </ReactGridLayout>
        </div>
      </div>
    );
  }
}

if (true) {
  import("./test-hook.jsx").then(fn => fn.default(ResizableHandles));
}