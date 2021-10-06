/**
 *
 * ChartFullComponent
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class ChartFullComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      mobile: false,
      landscape: false
    };
  }

  updateWindowDimensions = () => {
    const { first } = this.state;
    if (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    ) {
      if (window.matchMedia("(orientation: landscape)").matches) {
        this.setState({ landscape: true });
      } else {
        this.setState({ landscape: false });
      }
      if (first) {
        this.setState({ mobile: true });
      } else {
        this.setState({ mobile: true });
      }
    } else {
      this.setState({ mobile: false });
    }
  };

  componentDidMount() {
    this.interval = setInterval(() => this.getData(), 1000);
    this.lp = setInterval(() => this.lockPrice(), 10000);
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.lp);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw"
        }}
      >
        <iframe
          id="here"
          style={{
            position: "relative",
            display: "block",
            flexGrow: 1,
            margin: 0,
            left: 0,
            top: 0,
            padding: 0,
            height: "100%",
            width: this.state.mobile ? "100%" : "calc(100% + 45px)",
            border: "none"
          }}
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_aac03&symbol=BINANCE%3AXRPUSDT&hidesidetoolbar=0&withdateranges=1&details=1&studies=MACD%40tv-basicstudies&interval=D&symboledit=1&saveimage=1&showpopupbutton=1&theme=dark&style=8&timezone=America/New_York"
        />
      </div>
    );
  }
}

ChartFullComponent.propTypes = {};

export default ChartFullComponent;
