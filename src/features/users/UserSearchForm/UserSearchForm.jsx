import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../ui/Button';
import Input from '../../../ui/Input';

import styles from './UserSearchForm.module.css';

const UserSearchForm = ({ className }) => {
  const [email, setEmail] = useState('');

  const handlerSearch = () => {

  };

  return (
    <div className={`${styles.container} ${className}`}>
      <Input placeholder="Email или телефон" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button title="Найти" onClick={handlerSearch} />
    </div>
  );
};

UserSearchForm.propTypes = {
  className: PropTypes.string,
};

UserSearchForm.defaultProps = {
  className: '',
};

export default UserSearchForm;
