import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Flex from './Flex'
import { Block, CarCrash, Games, MusicNote, Newspaper, Sports, Title, TwelveMp } from '@mui/icons-material'
import Home from '../Pages/Home'

export default function Drawer() {
  return (
    <div className="flex flex-col justify-between h-screen bg-white border-e">
  <div className="px-4 py-6">
    <span className="grid w-32 h-10 text-xs text-gray-600 bg-gray-100 rounded-lg place-content-center">
      Logo
    </span>
  <ul className="mt-6 space-y-1">
   
    </ul> 
  </div>

  <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
    <a href="#" className="flex items-center gap-2 p-4 bg-white hover:bg-gray-50">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="object-cover rounded-full size-10"
      />

      <div>
        <p className="text-xs">
          <strong className="block font-medium">Eric Frusciante</strong>

          <span> eric@frusciante.com </span>
        </p>
      </div>
    </a>
  </div>
</div>
  )
}