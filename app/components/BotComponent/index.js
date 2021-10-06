/**
 *
 * BotComponent
 *
 */

import React from "react";
import bnb from "../../images/bnb.png";
import logo from "../../images/icon-512x512.png";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class BotComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: "",
      mobile: false
    };
  }

  componentDidMount() {
    this.fetchData();
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  fetchData = () => {
    const { data } = this.state;
    if (data.length < 1) {
      fetch("/api/data")
        .then(j => j.json())
        .then(d => this.setState({ data: d.data.splice(0, 5) }));
    }
  };

  updateWindowDimensions = () => {
    const windW = window.innerWidth;
    if (windW < 640) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false });
    }
  };

  render() {
    const { data, mobile } = this.state;
    let renderPicks;
    if (data && data.length > 0) {
      renderPicks = data.map((a, i) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "50vw",
            backgroundColor: "#fff00",
            borderRadius: "1em",
            margin: ".5em",
            padding: ".5em",
            color: "#725ACA"
          }}
        >
          <span
            style={{
              backgroundColor: "#fff",
              fontWeight: 600,
              width: mobile ? "50%" : "25%",
              textAlign: "center",
              padding: 10,
              borderRadius: ".5em"
            }}
          >
            <b>{a.t}</b>
          </span>
          <span
            style={{
              display: mobile ? "none" : "",
              backgroundColor: "#fff",
              fontWeight: 600,
              width: "25%",
              textAlign: "center",
              padding: 10,
              borderRadius: ".5em"
            }}
          >
            ${a.p}
          </span>
          <span
            style={{
              display: mobile ? "none" : "",
              backgroundColor: "#fff",
              fontWeight: 600,
              width: "25%",
              textAlign: "center",
              padding: 10,
              borderRadius: ".5em"
            }}
          >
            {a.d}
          </span>
          <button
            style={{
              color: "#fff",
              fontWeight: 600,
              width: mobile ? "50%" : "25%",
              textAlign: "center"
            }}
          >
            <a
              style={{
                backgroundColor:
                  a.s > 50
                    ? "#725ACA"
                    : a.s > 25
                      ? "#72CDBE"
                        ? a.s > 10
                          ? "#FFC600"
                          : "#E40E0C"
                        : "#E40E0C"
                      : "#E40E0C",
                fontWeight: 600,
                width: mobile ? "50%" : "25%",
                textAlign: "center",
                padding: 10,
                borderRadius: ".5em",
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff"
              }}
              href={`https://www.tradingview.com/chart/?symbol=${a.t}`}
              target="_blank"
              id="pop"
            >
              {a.s > 50
                ? "Strong Buy"
                : a.s > 25
                  ? "Buy"
                    ? a.s > 10
                      ? "Hold"
                      : "Speculative"
                    : "Speculative"
                  : "Speculative"}
            </a>
          </button>
        </div>
      ));
    }

    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          backgroundColor: "rgb(0,0,0)",
          userSelect: "none",
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
              display: "none",
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
          <a href="https://twitter.com/plgwlk" target="_blank" id="pop">
            <img
              style={{
                height: this.state.mobile ? 50 : 75,
                width: this.state.mobile ? 50 : 75,
                marginTop: "1rem",
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
              display: "none",
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
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "25%",
            paddingTop: "7.5%"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              borderRadius: "1em"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "50vw",
                color: "#fff",
                fontWeight: 800,
                backgroundColor: "#73C6B7",
                borderRadius: ".5em",
                margin: "1em",
                marginBottom: ".5em",
                padding: "1em"
              }}
            >
              <span
                style={{ width: mobile ? "50%" : "25%", textAlign: "center" }}
              >
                TOKEN
              </span>
              <span
                style={{
                  display: mobile ? "none" : "",
                  width: "25%",
                  textAlign: "center"
                }}
              >
                PRICE
              </span>
              <span
                style={{
                  display: mobile ? "none" : "",
                  width: "25%",
                  textAlign: "center"
                }}
              >
                PAST 24H
              </span>
              <span
                style={{ width: mobile ? "50%" : "25%", textAlign: "center" }}
              >
                CONFIDENCE
              </span>
            </div>
            {renderPicks}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "1em"
              }}
            >
              <button
                onClick={() =>
                  this.setState({ data: [] }, () => this.fetchData())
                }
                style={{
                  cursor: 'pointer',
                  border: "2.5px solid #6E58C4",
                  color: "#6E58C4",
                  padding: ".5em",
                  fontWeight: 900,
                  borderRadius: ".5em"
                }}
              >
                {!!this.state.data && this.state.data.length > 0
                  ? "RELOAD"
                  : "LOADING.."}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BotComponent.propTypes = {};

export default BotComponent;
