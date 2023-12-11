import React from 'react';
import css from './User.module.css';




export const User = ({el}) => {
  return (
    <div className={css.userCard} >
        <div className={css.avatar} >
            <img src={el.img} alt=""/>
            </div>
        <b className={css.name}>{el.full_name}</b>
        <b className={css.country}>{el.status}</b>
        <b className={css.age}>{el.age}</b>
      
    </div>
  )
}

