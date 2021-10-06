/**
 *
 * ChartViewComponent
 *
 */

import React from "react";
import PropTypes from "prop-types";
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class ChartViewComponent extends React.Component {
  render() {
    return (
      <div
        id="chart"
        style={{
          scrollSnapAlign: "center",
          borderRadius: "1em",
          scrollSnapStop: "normal",
          margin: this.props.landscape ? "5vh" : "3vh",
          backgroundColor: "#292F33",
          height: 336,
          width: 346,
          padding: ".75rem",
          boxShadow:
            "0 0 0 3px #6D57C790, 0 0 0 6px #6D57C790, 0 0 0 9px #64CEF570"
        }}
      >
        <iframe
          style={{
            display: "block",
            flexGrow: 1,
            margin: 0,
            padding: 0,
            width: "20.15rem",
            height: "19.5rem",
            border: '2.5px inset white',
            borderRadius: '.75rem'
          }}
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_9d160&symbol=BINANCE%3ABNBUSDT&interval=1&symboledit=0&saveimage=0&hidelegend=1&showpopupbutton=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&hide_side_toolbar=false&style=8&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_medium=widget&utm_campaign=Chart&utm_term=BINANCE%3ABNBUSDT"
        />
      </div>
    );
  }
}

ChartViewComponent.propTypes = {
  mobile: PropTypes.bool,
  landscape: PropTypes.bool
};

export default ChartViewComponent;
