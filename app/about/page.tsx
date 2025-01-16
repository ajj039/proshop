import React from 'react'
import Image from 'next/image'
import placeimage from "@/public/about.jpg";

const AboutPage = () => {
  return (
    <>
    <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center md:text-left">
        <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
                <p className="mt-4 text-gray-600">We are dedicated to delivering top-notch services with a focus on innovation and customer satisfaction.</p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
                <Image width={400} height={400} src={placeimage} alt="About Us" className="rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>
    </>

  )
}

export default AboutPage