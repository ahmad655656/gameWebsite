import React from 'react'

export default function CardTags(props) {
  return (
    <div className="flex flex-col items-center justify-center w-full w-[40vw] mx-auto">
    <div className="w-[40vw] h-64 bg-center bg-cover rounded-lg bg-mainBackground" style={{ backgroundImage: `url(${props.image})` }} />

    <div className="-mt-10 overflow-hidden rounded-lg shadow-lg w-[70%] bg-navBar sm:max-md:w-64">
        <h3 className="py-2 text-xs font-bold tracking-wide text-center bg-mainBackground text-title">{props.name}</h3>

        <div className="flex items-center justify-between px-3 py-2">
            <span className="font-bold text-mainText">{props.gameC}</span>
            <span className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform text-mainText bg-button">{props.lang}</span>
        </div>
    </div>
</div>
  )
}
