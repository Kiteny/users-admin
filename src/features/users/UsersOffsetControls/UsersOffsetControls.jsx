// Vendors
import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
  FaBackward, FaForward, FaFastBackward, FaFastForward,
} from 'react-icons/fa';

// State
import { selectUsersTotal } from '../_usersSlice_';

// Styles
import styles from './UsersOffsetControls.module.css';

const UsersOffsetControls = ({ className }) => {
  const history = useHistory();
  const { offset } = useParams();
  const selection = useSelector((state) => state.users.selection);
  const usersCount = useSelector(selectUsersTotal);
  const pagesCount = useMemo(() => Math.ceil(usersCount / selection), [usersCount, selection]);
  const isBegin = +offset === 1;
  const isEnd = +offset === pagesCount || pagesCount === 0;

  useEffect(() => {
    if (pagesCount < 1) return;

    if (+offset > pagesCount) {
      history.push(`/users/${pagesCount}`);
    }

    if (+offset < 1) {
      history.push('/users/1');
    }
  }, [offset, pagesCount]);

  const handlerAction = (e) => {
    const action = e.currentTarget.getAttribute('action');

    let newOffset = offset;
    switch (action) {
      case 'begin':
        history.push('/users/1');
        break;
      case 'back':
        newOffset = +offset - 1;

        if (newOffset >= 1) {
          history.push(`/users/${newOffset}`);
        }
        break;
      case 'for':
        newOffset = +offset + 1;

        if (newOffset <= pagesCount) {
          history.push(`/users/${newOffset}`);
        }
        break;
      case 'end':
        history.push(`/users/${pagesCount}`);
        break;
      default:
        break;
    }
  };

  return (
    <div className={`${styles.container}  ${className}`}>
      <button type="button" action="begin" onClick={handlerAction} disabled={isBegin}>
        <FaFastBackward size="25" color={isBegin ? '#dddddd' : '#303030'} />
      </button>
      <button type="button" action="back" onClick={handlerAction} disabled={isBegin}>
        <FaBackward size="25" color={isBegin ? '#dddddd' : '#303030'} />
      </button>
      <span>{offset}</span>
      <button type="button" action="for" onClick={handlerAction} disabled={isEnd}>
        <FaForward size="25" color={isEnd ? '#dddddd' : '#303030'} />
      </button>
      <button type="button" action="end" onClick={handlerAction} disabled={isEnd}>
        <FaFastForward size="25" color={isEnd ? '#dddddd' : '#303030'} />
      </button>
    </div>
  );
};

UsersOffsetControls.propTypes = {
  className: PropTypes.string,
};

UsersOffsetControls.defaultProps = {
  className: '',
};

export default UsersOffsetControls;
