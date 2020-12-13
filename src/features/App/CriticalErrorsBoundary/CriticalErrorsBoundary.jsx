/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CriticalErrorsBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return <div>Что пошло сильно не так!</div>;
    }
    return children;
  }
}

CriticalErrorsBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
