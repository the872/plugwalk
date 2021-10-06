/**
 *
 * LastTradeBoxComponent
 *
 */

import React from "react";
import PropTypes from "prop-types";
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class LastTradeBoxComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          scrollSnapAlign: "center",
          borderRadius: "1em",
          userSelect: "none",
          pointerEvents: "none",
          margin: "5vh",
          height: "40vh",
          width: "25rem",
          maxWidth: "100vw",
          backgroundColor: "#252934",
          padding: ".5rem",
          boxShadow:
            "0 0 0 3px #6D57C790, 0 0 0 6px #6D57C790, 0 0 0 9px #64CEF570"
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              color: "#fff",
              fontSize: "1.25em",
              justifyContent: "center",
              background:
                Number(this.props.lastPrice - this.props.lastLock).toFixed(2) >
                0
                  ? "linear-gradient(180deg, rgba(37,165,154,1) 50%, rgba(108,84,200,1) 100%)"
                  : "#9A9A9A",
              height: "10vh",
              borderTopRightRadius: "25em",
              borderTopLeftRadius: "25em",
              width: "90%",
              marginLeft: "5%",
              maxWidth: "100vw",
              border: "5px solid #252934"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                width: "20rem"
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  width: "20rem",
                  textAlign: "center",
                  fontWeight: 900,
                  height: 37.5,
                  marginTop: this.props.mobile ? 0 : ".5rem"
                }}
              >
                UP
              </div>
              <div
                style={{
                  userSelect: "none",
                  fontWeight: 500,
                  width: "19.5rem",
                  fontSize: "1rem",
                  textAlign: "center"
                }}
              >
                5x Payout
              </div>
            </div>
          </div>
          <div
            style={{
              color: "#fff",
              fontSize: "1.75rem",
              paddingTop: this.props.mobile ? ".5vh" : "1.25vh",
              height: "18.5vh",
              borderRadius: "1rem",
              backgroundColor: "#6D57C7",
              display: "flex",
              justifyContent: "center",
              border:
                Number(this.props.lastPrice - this.props.lastLock).toFixed(2) >
                0
                  ? "5px solid #27A69A"
                  : "5px solid #EE5351"
            }}
          >
            <div>
              <div
                style={{
                  marginLeft: "1rem",
                  width: "18rem",
                  fontSize: "1rem",
                  lineHeight: "1rem",
                  color: "#bdbdbd"
                }}
              >
                Closed Price
              </div>
              <div style={{ fontSize: "3rem", color: "#fff" }}>
                <div
                  style={{
                    fontWeight: 900,
                    display: "flex",
                    width: "20rem",
                    justifyContent: "center",
                    textShadow: "2px 2px #73C7B3"
                  }}
                >
                  ${Number(this.props.lastPrice).toFixed(2)}
                  <span
                    style={{
                      fontSize: "1.33rem",
                      marginTop: "1.5rem",
                      height: 32,
                      width: 95,
                      marginLeft: "1rem",
                      borderRadius: "1rem",
                      backgroundColor:
                        Number(
                          this.props.lastPrice - this.props.lastLock
                        ).toFixed(2) > 0
                          ? "#27A69A"
                          : "#EE5351",
                      color: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      letterSpacing: 1,
                      float: "right",
                      textShadow: "1px 1px #bdbdbd"
                    }}
                  >
                    $
                    {Number(this.props.lastPrice - this.props.lastLock).toFixed(
                      2
                    )}
                  </span>
                </div>
              </div>
              <div
                style={{
                  marginLeft: "1rem",
                  width: "18rem",
                  fontSize: ".75rem",
                  color: "#bdbdbd"
                }}
              >
                Locked Price:{" "}
                <span style={{ float: "right", color: "#fff" }}>
                  ${Number(this.props.lastLock).toFixed(2)}
                </span>
              </div>
              <div
                style={{
                  marginLeft: "1rem",
                  width: "18rem",
                  fontSize: ".75rem",
                  color: "#bdbdbd"
                }}
              >
                Prize Pool:{" "}
                <span style={{ float: "right", color: "#fff" }}>100 BNB</span>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              color: "#fff",
              fontSize: "1.1rem",
              justifyContent: "center",
              background:
                Number(this.props.lastPrice - this.props.lastLock).toFixed(2) <
                0
                  ? "linear-gradient(0deg, rgba(238,83,81,1) 50%, rgba(108,84,200,1) 100%)"
                  : "#9A9A9A",
              height: "10vh",
              borderBottomRightRadius: "25em",
              borderBottomLeftRadius: "25em",
              width: "90%",
              marginLeft: "5%",
              maxWidth: "100vw",
              border: "5px solid #252934"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                width: "20rem"
              }}
            >
              <div
                style={{
                  fontSize: "1.75rem",
                  width: "20rem",
                  textAlign: "center",
                  fontWeight: 900,
                  marginTop: this.props.mobile ? 0 : "1rem",
                  height: 37.5
                }}
              >
                DOWN
              </div>
              <div
                style={{
                  userSelect: "none",
                  fontWeight: 500,
                  width: "20rem",
                  fontSize: "1rem",
                  textAlign: "center"
                }}
              >
                5x Payout
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LastTradeBoxComponent.propTypes = {
  lastPrice: PropTypes.number,
  lastLock: PropTypes.number
};

export default LastTradeBoxComponent;
