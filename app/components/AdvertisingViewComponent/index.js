/**
 *
 * AdvertisingViewComponent
 *
 */

import React from "react";
import PropTypes from "prop-types";
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class AdvertisingViewComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          scrollSnapAlign: "center",
          borderRadius: "1em",
          scrollSnapType: "block",
          scrollSnapStop: "normal",
          margin: this.props.landscape ? "5vh" : "3vh",
          backgroundColor: "#292F33",
          minHeight: 336,
          minWidth: 346,
          padding: ".75rem",
          boxShadow:
            "0 0 0 3px #6D57C790, 0 0 0 6px #6D57C790, 0 0 0 9px #64CEF570"
        }}
      >
        <div
          style={{
            display: "block",
            flexGrow: 1,
            margin: 0,
            padding: 5,
              paddingTop: 0,
            width: "20.15rem",
            height: "19.5rem",
            border: "2.5px inset white",
            borderRadius: ".75rem"
          }}
        >
          <a
            style={{
              color: "#fff",
              width: "20rem",
              height: "19.5rem",
              textDecoration: "none",
                borderRadius: ".75rem",
            }}
            className="twitter-timeline"
            data-width="19.5rem"
            data-height="19rem"
            data-theme="dark"
            href="https://twitter.com/plgwlk?ref_src=twsrc%5Etfw"
          >
            👀
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
        </div>
      </div>
    );
  }
}

AdvertisingViewComponent.propTypes = {
  landscape: PropTypes.bool
};

export default AdvertisingViewComponent;
