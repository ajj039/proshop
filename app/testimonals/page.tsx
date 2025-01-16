import React from 'react'

const TestimonalPage = () => {
  return (
    <section className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="text-gray-600">Amazing service and outstanding support! Highly recommend.</p>
                <h3 className="mt-4 font-bold text-gray-800">- John Doe</h3>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="text-gray-600">Their team exceeded our expectations. Fantastic work!</p>
                <h3 className="mt-4 font-bold text-gray-800">- Jane Smith</h3>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="text-gray-600">Professional, efficient, and creative. Couldn't ask for more!</p>
                <h3 className="mt-4 font-bold text-gray-800">- Mark Lee</h3>
            </div>
        </div>
    </div>
</section>

  )
}

export default TestimonalPage