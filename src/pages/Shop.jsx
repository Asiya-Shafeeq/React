import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewArrival from '../components/NewArrival/NewArrival'
import BackGround from '../components/BackGround/BackGround'
import Womens from '../components/Womens/Womens'
import Brand from '../components/Brand/Brand'
import Combos from '../components/Combos/Combos'
import FeedBack from '../components/FeedBack/FeedBack'
function Shop() {
  return (
    <div>
      <Hero/>
      <Offers/>
      <NewArrival/>
      <BackGround/>
      <Popular/>
      <Womens/>
      <Brand/>
      <Combos/>
      <FeedBack/>
    </div>
  )
}

export default Shop
