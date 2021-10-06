/**
 *
 * NewHomePage
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { compose } from "redux";
import BotComponent from "../../components/BotComponent";

/* eslint-disable react/prefer-stateless-function */
export class NewHomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>plugwalk</title>
          <meta name="description" content="plugwalk.app" />
        </Helmet>
        <BotComponent />
      </div>
    );
  }
}

NewHomePage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps
);

export default compose(withConnect)(NewHomePage);
