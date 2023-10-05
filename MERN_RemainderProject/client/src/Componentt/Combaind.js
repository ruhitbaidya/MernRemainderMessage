import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CheckRemainder from './CheckRemainder'
import Navbar from './Navbar'
import SetRemainder from './SetRemainder'

const Combaind = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={<SetRemainder />} />
                <Route path="/check-remainder" element={<CheckRemainder />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Combaind
