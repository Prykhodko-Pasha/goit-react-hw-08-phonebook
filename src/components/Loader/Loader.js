import React from 'react';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.lds_wrapper}>
      <div className={s.lds_default}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
