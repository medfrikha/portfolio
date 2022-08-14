import React from 'react'

import devImage from '../images/photo-2.png'

function Home() {
  return (
    <div>
      <img src='/images/photo-1.jpeg' alt="profile photo" width="200px"></img>
      <p>Hello my name is Mohamed. I'm a full stack developer</p>
      <img src={devImage} alt='' width='40%'/>
    </div>
  )
}

export default Home