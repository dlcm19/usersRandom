import React from 'react'

const CardUsers = ({randomUser, randomColors, getRandomAll}) => {
  
  

  const objectStyle = {
    color: randomColors
  }

const objectBgStyle = {
  backgroundColor: randomColors
}

  return (
    <article className='card' style={objectStyle}>
        <header>
       <img className='card_img' src={randomUser.picture.large} alt="" />
        </header>
        <div className='card_container'>
          <h2 className='card_name'>{`${randomUser.name.title} ${randomUser.name.first} ${randomUser.name.last}`}</h2>
          <p className='card_item'><b>Gender: </b>{randomUser.gender}</p>
          <p className='card_item'><b>Email: </b>{randomUser.email}</p>
          <button onClick={getRandomAll} className='card_btn' style={objectBgStyle}>&#62;</button>
        </div>
    </article>
  )
}

export default CardUsers
