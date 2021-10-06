/**
 *
 * ChatViewComponent
 *
 */

import React from "react";
import PropTypes from "prop-types";
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class ChatViewComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          scrollSnapAlign: "center",
          borderRadius: "1em",
          scrollSnapStop: "always",
          margin: this.props.landscape ? "5vh" : "3vh",
          backgroundColor: "#C7DEDE",
          height: 336,
          width: 346,
          padding: ".75rem",
          background:
            "radial-gradient(ellipse at top, #5B9DFF, transparent),radial-gradient(ellipse at bottom, #6D5BC8, transparent)",
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
            border: "1px solid #6DA1D9",
            borderRadius: ".75em",
            zoom: 1
          }}
          allow-same-origin
          same-origin
          allow-popups
          src="https://tlk.io/plugtalk"
        />
      </div>
    );
  }
}

ChatViewComponent.propTypes = {
  mobile: PropTypes.bool,
  landscape: PropTypes.bool
};

export default ChatViewComponent;
