import React from 'react';
import { users } from './data/users';

export default function UsersList({id, email, first_name, last_name, avatar, active}) {
  
  const style_cards = {
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: '10px',
    width: '150px',
    minHeight: '100px',
    margin: '10px',
    backgroundColor: active ? 'red' : 'green'
  }

  return (
    <div style={style_cards}>
      <p>{id}</p>
      <a href={email}>{email}</a>
      <p>{first_name}</p>
      <p>{last_name}</p>
      <img src={avatar} alt="photo" />
    </div>
  )
}

