import React from 'react'


function Home() {
  return (
    <div>
        <div className='add-to-cart'>
            <img className='cart' src='images/add-to-cart.png'></img>

        </div>
      <h1>home comp</h1>
      <div className='cart-wrapper'>
        <div className='image-wrapper item'>
        <img src='./images/car1.JPG' alt="My Image" />
        </div>
        <div className='text-wrapper item'>
            <span>Model:FARARI</span><br/>
            <span>Price : $1cr</span>
        <div className='button-wrapper item'>
        <button className='button'>Add to cart</button>
        </div>
        
        
        </div>

      </div>
    </div>
  )
}

export default Home;
