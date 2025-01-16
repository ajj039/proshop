import React from 'react'

const HomePage = () => {
  return (
    <section id="home" className="bg-gray-100 py-20">
    <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 md:text-6xl">Welcome to proshop</h1>
        <p className="mt-4 text-gray-600">Create amazing digital experiences with ease.</p>
        <a href="#about" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">Learn More</a>
    </div>
</section>
  )
}

export default HomePage