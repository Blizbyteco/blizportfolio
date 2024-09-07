import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Company from '../pages/Company'
import RootLayout from '../layouts/RootLayout'

export default function Router() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<Home />}  />
                <Route path="company/" element={<Company />} />
            </Route>
        </Routes>
    </HashRouter>
  )
}
