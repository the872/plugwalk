/**
 *
 * HomeComponent
 *
 */

import React from "react";
import TradeBoxComponent from "../TradeBoxComponent";

import logo from "../../images/icon-512x512.png";
import bnb from "../../images/bnb.png";
import PostTradeBoxComponent from "../PostTradeBoxComponent";
import LastTradeBoxComponent from "../LastTradeBoxComponent";
import PropTypes from "prop-types";
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class HomeComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      lastPrice: 0,
      lockPrice: 0,
      lockTime: 0,
      lastGameLock: 0,
      lastGamePrice: 0,
      lastTime: 0,
      mobile: false,
      first: false
    };
  }

  updateWindowDimensions = () => {
    const { first } = this.state;
    const windW = window.innerWidth;
    if (windW > 640) {
      this.setState({ mobile: false });
    } else {
      if (first) {
        this.setState({ mobile: true });
      } else {
        this.setState({ mobile: true, first: true }, () =>
          document.getElementById("post").scrollIntoView()
        );
      }
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

  getData = () => {
    fetch("https://api.binance.com/api/v3/ticker/bookTicker?symbol=BNBUSDT")
      .then(data => data.json())
      .then(parsed =>
        this.setState({ lastPrice: parsed.bidPrice, lastTime: Date.now() })
      );
  };

  lockPrice = () => {
    const { lastPrice, lockPrice, lastTime } = this.state;
    this.setState({
      lockPrice: lastPrice,
      lastGamePrice: lastPrice,
      lastGameLock: lockPrice,
      lockTime: lastTime
    });
  };

  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgb(0,0,0)",
          background:
            "linear-gradient(180deg, rgba(115,198,182,1) 5%, rgba(108,84,200,1) 100%)"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            userSelect: "none",
            height: "7.5vh",
            paddingTop: "1vh",
            width: "100vw"
          }}
        >
          <div
            style={{
              color: "#6D57C7",
              textShadow: "2px 2px #C7DEDE",
              fontWeight: 700,
              marginTop: ".75rem",
              paddingLeft: ".5rem",
              paddingTop: ".2rem",
              backgroundColor: "#C7DEDE",
              height: this.state.mobile ? 37.5 : 50,
              lineHeight: this.state.mobile ? 1.5 : 2,
              textAlign: "middle",
              letterSpacing: 1.5,
              width: "8rem",
              borderRadius: "1rem",
              boxShadow:
                "0 0 0 3px #6D57C790, 0 0 0 6px #6D57C790, 0 0 0 9px #64CEF570"
            }}
          >
            <img
              style={{
                height: this.state.mobile ? "1rem" : "1.5rem",
                width: this.state.mobile ? "1rem" : "1.5rem",
                pointerEvents: "none"
              }}
              src={bnb}
            />
            <span
              style={{
                verticalAlign: "middle",
                fontSize: "1.25rem",
                marginLeft: ".5rem",
                textShadow: "2px 2px #73C7B3"
              }}
            >
              ${Number(this.state.lastPrice).toFixed(2)}
            </span>
          </div>
          <a href="https://twitter.com/plgwlk" id="pop">
            <img
              style={{
                height: this.state.mobile ? 50 : 75,
                width: this.state.mobile ? 50 : 75,
                marginTop: ".33rem",
                borderRadius: "10rem",
                pointerEvents: "none",
                boxShadow:
                  "0 0 0 3px #6D57C790, 0 0 0 6px #6D57C790, 0 0 0 9px #64CEF570"
              }}
              alt="plug"
              src={logo}
            />
          </a>
          <button
            style={{
              cursor: "pointer",
              color: "#6D57C7",
              textShadow: "2px 2px #73C7B3",
              boxShadow:
                "0 0 0 3px #6D57C790, 0 0 0 6px #6D57C790, 0 0 0 9px #64CEF570",
              fontWeight: 700,
              marginTop: ".75rem",
              backgroundColor: "#C7DEDE",
              height: this.state.mobile ? 40 : 50,
              letterSpacing: 1.5,
              width: "8rem",
              borderRadius: "1rem"
            }}
          >
            Connect Wallet
          </button>
        </div>
        <div
          id="scroll"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: this.state.mobile ? "flex-start" : "center",
            height: "50vh",
            width: "100%",
            overflowX: "scroll",
            marginTop: "1vh",
            float: "left",
            scrollSnapType: "x mandatory"
          }}
        >
          <LastTradeBoxComponent
            lastPrice={this.state.lastGamePrice}
            lastLock={this.state.lastGameLock}
            mobile={this.state.mobile}
          />
          <PostTradeBoxComponent
            lastPrice={this.state.lastPrice}
            lockedPrice={this.state.lockPrice}
            mobile={this.state.mobile}
            time={this.state.lockTime}
          />
          <TradeBoxComponent mobile={this.state.mobile} />
          <div
            style={{
              display: this.state.mobile ? "" : "none",
              visibility: "hidden",
              borderRadius: "1em",
              userSelect: "none",
              pointerEvents: "none",
              height: "40vh",
              backgroundColor: "#252934",
              padding: ".2rem",
              boxShadow:
                "0 0 0 3px #6D57C790, 0 0 0 6px #6D57C790, 0 0 0 9px #64CEF570"
            }}
          />
        </div>
        <iframe
          style={{
            marginLeft: this.state.mobile ? 0 : "2.5vw",
            borderRadius: this.state.mobile ? 0 : "1em",
            marginBottom: this.state.mobile ? 0 : "1vh",
            height: this.state.mobile ? "41.5vh" : "40vh",
            width: this.state.mobile ? "100vw" : "95vw",
            boxShadow: this.state.mobile
              ? "none"
              : "0 0 0 3px #6D57C790, 0 0 0 6px #6D57C790, 0 0 0 9px #64CEF570"
          }}
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_4e6b8&symbol=BINANCE%3ABNBUSDT&interval=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=8&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_medium=widget&utm_campaign=chart&utm_term=BINANCE%3ABNBUSDT"
        />
      </div>
    );
  }
}

HomeComponent.propTypes = {
  mobile: PropTypes.bool
};

export default HomeComponent;
