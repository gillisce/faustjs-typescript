import React from 'react';
import className from 'classnames/bind';
import { Heading } from '..';
import styles from './Hero.module.scss';

let cx = className.bind(styles);

export default function Hero({ title, level = 'h2', children, className }) {
  return (
    <div className={cx(['component', className])}>
      <Heading level={level} className={undefined}>
        <span className={cx('title')}>{title}</span>
      </Heading>
      {children}
    </div>
  );
}
