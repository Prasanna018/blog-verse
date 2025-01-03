import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CardList from '../components/Post/CardList.jsx'
function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Hero />
            <CardList></CardList>
        </div>
    )
}

export default HomePage
