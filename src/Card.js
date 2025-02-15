import React, { useContext } from 'react'
import Button from './Button'
import watch from './assets/Images/shopping.webp'
import { PassingContent } from './App'

const Card = () => {
    const {count} = useContext(PassingContent)
    
  return (
    <div className='Card'>
        <p>Cart Value is {count}</p>
        <div className='Card_top'>
            <div className='box'>
                <img src={watch}></img>
            </div>
        </div>
        <div className='card_Bottom'>
            <h1>Watch</h1>
            <h1>Rs:3000</h1>
        </div>
        <div className='Btn'>
            <Button value= "add to cart" />
        </div>
    </div>
  )
}

export default Card