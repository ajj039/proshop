import React from 'react'

const ServicePage = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md text-center hover:scale-110 transition">
                <h3 className="text-xl font-bold text-gray-800">Web Design</h3>
                <p className="mt-4 text-gray-600">Crafting visually stunning and user-friendly designs.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center hover:scale-110 transition">
                <h3 className="text-xl font-bold text-gray-800">Development</h3>
                <p className="mt-4 text-gray-600">Building robust and scalable web applications.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center hover:scale-110 transition">
                <h3 className="text-xl font-bold text-gray-800">SEO Optimization</h3>
                <p className="mt-4 text-gray-600">Improving online visibility and search rankings.</p>
            </div>
        </div>
    </div>
</section>

  )
}

export default ServicePage