import React from 'react'

export default function CardPlatform(props) {
  return (
    <div className="max-w-sm w-full lg:max-w-full rounded-[20px] lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 rounded-[20px] flex-none bg-cover bg-center text-center" style={{ backgroundImage: `url(${props.image})` }} title="Woman holding a mug">
  </div>
  <div className=" bg-white rounded-[20px]  p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="flex items-center text-sm text-mainText">
       Slug: {props.item1}
      </p>
      <div className="mb-2 text-lg text-xl font-bold text-logo">OS: {props.item2}</div>
      <p className="text-base text-logo">GamesCount{props.item3}</p>
    </div>
    <div className="flex flex-col items-start">
        <h1 className=' flex flex-row items-center gap-[20px] text-title text-2xl '>Games</h1>
      <div className=" flex flex-row items-center gap-[30px] text-mainText text-sm ">
       {props.children}
      </div>
    </div>
  </div>
</div>
  )
}
