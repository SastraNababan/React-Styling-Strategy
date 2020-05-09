import React from 'react'
import style from './index.module.css'
export default function Notification() {
  return (
    <div className={style.notification}>
      <h3 className={style.title}> Notification Title</h3>
      <p>
        This is purposely for very long description that has many characters
      </p>
    </div>
  );
}
