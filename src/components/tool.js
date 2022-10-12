import React from 'react'
export default function Cocktail({  name, id, username, email }) {
  return (
    <article className='tool'>
      <div className='img-container'>
        <img alt={name} src={`https://robohash.org/${id}`} />
      </div>
      <div className='tool-footer'>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <p>{email}</p>
      </div>
    </article>
  )
}
