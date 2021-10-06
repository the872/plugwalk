/**
 *
 * WalletConnectComponent
 *
 */

import React from "react";
import PropTypes from "prop-types";
// import styled from 'styled-components';

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

// Create a connector
const connector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required
  qrcodeModal: QRCodeModal
});

/* eslint-disable react/prefer-stateless-function */
class WalletConnectComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      wallet: "",
      connectWallet: false
    };
  }

  componentDidMount() {
    const tryToGet = window.localStorage.getItem("walletconnect");
    const testBool = !!tryToGet;
    if (testBool) {
      this.setState({
        wallet: JSON.parse(tryToGet).accounts[0],
        connectWallet: true
      });
    }
  }

  callWallet() {
    const { connectWallet } = this.state;

    if (!connectWallet) {
      this.setState({ connectWallet: true }, () => {
        const request = connector._formatRequest({
          method: "get_accounts"
        });
        connector
          ._sendCallRequest(request)
          .then(result => {
            // Returns the accounts
            console.log(result);
          })
          .catch(error => {
            // Error returned when rejected
            console.error(error);
          });
      });
    } else {
      this.setState({ connectWallet: false, wallet: "" }, () => {
        localStorage.clear(),   location.reload();
      });
    }
  }

  buyIn() {
    // Draft transaction
    const tx = {
      from: "0xbc28Ea04101F03aA7a94C1379bc3AB32E65e62d3", // Required
      to: "0x89D24A7b4cCB1b6fAA2625Fe562bDd9A23260359", // Required (for non contract deployments)
      data: "0x", // Required
      gasPrice: "0x02540be400", // Optional
      gas: "0x9c40", // Optional
      value: "0x00", // Optional
      nonce: "0x0114" // Optional
    };

    // Send transaction
    connector
      .sendTransaction(tx)
      .then(result => {
        // Returns transaction id (hash)
        console.log(result);
      })
      .catch(error => {
        // Error returned when rejected
        console.error(error);
      });
  }

  render() {
    const { connectWallet } = this.state;
    if (connectWallet) {
      // Check if connection is already established
      if (!connector.connected) {
        // create new session
        connector.createSession().then(() => {
          // Subscribe to connection events
          connector.on("connect", (error, payload) => {
            if (error) {
              throw error;
            }

            // Get provided accounts and chainId
            const { accounts, chainId } = payload.params[0];
            this.setState({ wallet: accounts[0] });
          });
          connector.on("session_update", (error, payload) => {
            if (error) {
              throw error;
            }

            // Get updated accounts and chainId
            const { accounts, chainId } = payload.params[0];
            console.log(accounts);
          });

          connector.on("disconnect", (error, payload) => {
            if (error) {
              throw error;
            }

            // Delete connector
          });
        });
      } else {
        // Subscribe to connection events
        connector.on("connect", (error, payload) => {
          if (error) {
            throw error;
          }

          // Get provided accounts and chainId
          const { accounts, chainId } = payload.params[0];
          this.setState({ wallet: accounts[0] });
        });
        connector.on("session_update", (error, payload) => {
          if (error) {
            throw error;
          }

          // Get updated accounts and chainId
          const { accounts, chainId } = payload.params[0];
          console.log(accounts);
        });

        connector.on("disconnect", (error, payload) => {
          if (error) {
            throw error;
          }
          // Delete connector
        });
      }
    }

    const formatString = this.state.wallet
      ? `${this.state.wallet.slice(0, 4)}....${this.state.wallet.slice(
          this.state.wallet.length - 4
        )}`
      : "Connect Wallet";

    return (
      <button
        onClick={() => this.callWallet()}
        style={{
          cursor: "pointer",
          color: "#6D57C7",
          textShadow: "2px 2px #73C7B3",
          boxShadow:
            "0 0 0 3px #6D57C790, 0 0 0 6px #6D57C790, 0 0 0 9px #64CEF570",
          fontWeight: 700,
          marginTop: ".75rem",
          backgroundColor: "#C7DEDE",
          height: this.props.mobile ? 40 : 50,
          letterSpacing: 1.5,
          width: "8rem",
          borderRadius: "1rem"
        }}
      >
        {formatString}
      </button>
    );
  }
}

WalletConnectComponent.propTypes = {
  mobile: PropTypes.bool
};

export default WalletConnectComponent;
