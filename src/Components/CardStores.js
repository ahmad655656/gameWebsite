import React from 'react'

export default function CardStores(props) {
  return (
    <div className="flex w-[40vw] overflow-hidden bg-navBar rounded-lg shadow-lg dark:bg-gray-800">
    <div className="w-2/3 bg-cover" style={{ backgroundImage: `url(${props.image})` }} />

    <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-title">{props.name}</h1>

        <a href={`https://${props.domin}`} target="_blank" rel="noopener noreferrer" className="mt-2 text-sm text-mainText">{props.domin}</a>
        <div className="flex justify-between mt-3 item-center">
            <h1 className="text-lg font-bold text-mainText md:text-xl">{props.gameC}</h1>
        </div>
    </div>
</div>
  )
}
