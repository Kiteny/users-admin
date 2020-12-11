import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../ui/Button';
import styles from './UserForm.module.css';

const UserForm = ({
  children, title, buttonTitle, onSubmit,
}) => (
  <form className={styles.container} onSubmit={onSubmit}>
    <h3 className={styles.header}>{title}</h3>
    <div className={styles.inputsWrraper}>
      {children}
    </div>
    <Button
      title={buttonTitle}
      type="submit"
      className={styles.submit}
      fulfilled
    />
  </form>
);

UserForm.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

UserForm.defaultProps = {
  onSubmit: () => {},
};

export default UserForm;
