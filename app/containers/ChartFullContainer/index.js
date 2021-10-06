/**
 *
 * ChartFullContainer
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import ChartFullComponent from "../../components/ChartFullComponent";

/* eslint-disable react/prefer-stateless-function */
export class ChartFullContainer extends React.Component {
  render() {
    return (
      <div>
        <div style={{ height: '100vh', width: '100vw' }}>
          <ChartFullComponent />
        </div>
      </div>
    );
  }
}

ChartFullContainer.propTypes = {
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

export default compose(withConnect)(ChartFullContainer);
