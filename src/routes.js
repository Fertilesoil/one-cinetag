﻿import Favoritos from 'pages/Favoritos'
import Inicio from 'pages/Inicio'
import Player from 'pages/Player'
import NaoEncontrada from 'pages/NaoEncontrada'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaBase from 'pages/PaginaBase'

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path={`/`} element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path='favoritos' element={<Favoritos />} />
          <Route path=':id' element={<Player />} />
        </Route>

        <Route path='*' element={<NaoEncontrada />} />
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes