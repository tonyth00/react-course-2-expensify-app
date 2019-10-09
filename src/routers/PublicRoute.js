import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = props =>
  props.isAuthenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <div>
      <Route {...props} />
    </div>
  );

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
