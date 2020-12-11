import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import styles from './DropDown.module.css';

const DropDown = forwardRef(({
  onChange, items, title, className,
}, ref) => {
  const [selected, setSelected] = useState();
  const [opened, setOpened] = useState(false);

  const handlerClickHead = () => {
    setOpened((state) => !state);
  };

  const handlerClickOption = (e) => {
    const value = e.target.textContent;

    onChange(value);
    setSelected(value);
    setOpened(false);
  };

  const rendredItems = items.map((item, index) => (
    <li id={index} key={item}>
      <button type="button" className={styles['list-item']} onClick={handlerClickOption}>
        {item}
      </button>
    </li>
  ));

  const renderedTitle = title
    ? <h3 className={styles.header}>{`${title}:`}</h3>
    : null;

  const listStyles = opened ? styles.list : styles.hidden;
  const arrow = opened ? <RiArrowUpSLine size="25" /> : <RiArrowDownSLine size="25" />;

  return (
    <div className={`${styles.wrraper} ${className}`}>
      {renderedTitle}
      <button type="button" className={styles.head} onClick={handlerClickHead} ref={ref}>
        <span className={styles.arrow}>
          {arrow}
        </span>
        <span className={styles.title}>{selected}</span>
      </button>
      <ul className={listStyles}>
        {rendredItems}
      </ul>
    </div>
  );
});

DropDown.propTypes = {
  onChange: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  className: PropTypes.string,
};

DropDown.defaultProps = {
  onChange: () => {},
  items: [],
  title: '',
  className: '',
};

export default DropDown;
