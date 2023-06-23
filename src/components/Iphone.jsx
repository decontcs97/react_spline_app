import React from 'react'
import Spline from '@splinetool/react-spline';

const Iphone = () => {
  return (
    <div>
      <div className="relative">
        <div className="font-poppins font-normal text-8xl text-white absolute right-56 top-14">
          <h1>A</h1>
          <span className="text-gradient">New</span>{" "}
          <h1>way to</h1>
          <span className="text-gradient">Discover</span>{" "}
        </div>
      </div>
      <Spline scene="https://prod.spline.design/WIx9MunT2ARUToxo/scene.splinecode" />
      <div className="inline-block font-poppins font-normal text-xl text-white absolute right-28 bottom-2 max-w-xl">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias laudantium, cupiditate nisi libero suscipit 
          magni quidem, 
          impedit, dolor ipsa veritatis ipsam 
          exercitationem explicabo odio ullam ipsum! R
          eiciendis voluptate corrupti sequi. Eaque, quisquam.</p>
      </div>
    </div>
    
  )
}

export default Iphone
