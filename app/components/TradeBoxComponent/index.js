/**
 *
 * TradeBoxComponent
 *
 */

import React from "react";
import PropTypes from "prop-types";
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class TradeBoxComponent extends React.Component {
  render() {
    return (
      <div
        style={{
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
                "linear-gradient(180deg, rgba(37,165,154,1) 50%, rgba(108,84,200,1) 100%)",
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
                  display: "flex",
                  flexDirection: "column",
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
          </div>
          <div
            style={{
              scrollSnapAlign: "center",
              color: "#fff",
              fontSize: "1.75rem",
              paddingTop: this.props.mobile ? 0 : "1.25vh",
              height: "18.5vh",
              borderRadius: "1rem",
              backgroundColor: "#6D57C7",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                width: "18rem",
                fontSize: "1.2rem",
                color: "#bdbdbd"
              }}
            >
              <button
                style={{
                  marginLeft: "1rem",
                  cursor: "pointer",
                  pointerEvents: "all",
                  color: "#fff",
                  fontWeight: 700,
                  marginTop: ".5em",
                  backgroundColor: "#27A69A",
                  height: 50,
                  width: "90%",
                  borderRadius: "1em",
                  border: "2.5px solid #fff"
                }}
              >
                Enter Up
              </button>
              <button
                style={{
                  marginLeft: "1rem",
                  cursor: "pointer",
                  color: "#fff",
                  fontWeight: 700,
                  marginTop: ".5em",
                  backgroundColor: "#EE5351",
                  height: 50,
                  width: "90%",
                  borderRadius: "1em",
                  border: "2.5px solid #fff",
                  pointerEvents: "all"
                }}
              >
                Enter Down
              </button>
              <div
                style={{
                  marginTop: this.props.mobile ? '.1rem' : ".25rem",
                  fontSize: ".75rem",
                  color: "#bdbdbd",
                  display: "flex",
                  justifyContent: "space-evenly"
                }}
              >
                <span>Prize Pool:</span>
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
                "linear-gradient(0deg, rgba(238,83,81,1) 50%, rgba(108,84,200,1) 100%)",
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
                justifyContent: "center",
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

TradeBoxComponent.propTypes = {
  mobile: PropTypes.bool
};

export default TradeBoxComponent;
