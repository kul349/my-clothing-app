import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className='font-sans antialiased text-gray-800 bg-gray-500'>
      {/* Header */}
      <header className='bg-white shadow-sm py-4 px-6 flex justify-between items-center fixed w-full z-10 top-0'>
        <div className='text-2xl font-bold tracking-wider uppercase'>
          ATELIER MODE 
        </div>
        <nav className='hidden md:flex space-x-8 text-sm font-medium'>
          <a href="#" className='hover:text-gray-900 transition-colors duration-200'>NEW ARRIVAL</a>
          <a href="#" className="hover:text-gray-900 transition-colors duration-200">MEN</a>
          <a href="#" className="hover:text-gray-900 transition-colors duration-200">ACCESSORIES</a>
          <a href="#" className="hover:text-gray-900 transition-colors duration-200">SALE</a>
        </nav>
        <div className='flex items-center space-x-4'>
          <button className='p-2 rounded-full hover:bg-gray-100 transition-colors duration-200'>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className='p-2 rounded-full hover:bg-gray-100 transition-colors duration-200'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
           <button className='p-2 rounded-full hover:bg-gray-100 transition-colors duration-200'>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </header>
      {/* Hero section */}
      <section
  className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
  style={{
    backgroundImage: "url('/assets/img1.jpg')", marginTop:"64px"
  }}
>
  <div className='absolute inset-0 bg-black opacity-40'></div>
  <div className='relative text-center z-10'>
    <h1 className='text-5xl md:text-6xl font-serif leading-tight mb-6 tracking-wide'>
                  DISCOVER YOUR <br /> SIGNATURE STYLE

    </h1>
    <button className='px-8 py-3 bg-white text-gray-800 text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors duration-200'>SHOP NOW</button>
  </div>
</section>

        {/*Category section */}
        <section className='container mx-auto py-16 px-6'>
          <div className='flex flex-wrap justify-center gap-8'>
            <div className='relative w-72 h-48 rounded-md overflow-hidden shadow-lg group'>
              <img src="/assets/img2.jpg" alt="Women's Collection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center'>
                <span className='text-white text-lg font-medium tracking-wide'>WOMEN'S</span>
              </div>
            </div>
             <div className='relative w-72 h-48 rounded-md overflow-hidden shadow-lg group'>
              <img src="/assets/img2.jpg" alt="Women's Collection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center'>
                <span className='text-white text-lg font-medium tracking-wide'>MEN'S</span>
              </div>
            </div>
             <div className='relative w-72 h-48 rounded-md overflow-hidden shadow-lg group'>
              <img src="/assets/img2.jpg" alt="Women's Collection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center'>
                <span className='text-white text-lg font-medium tracking-wide'>ACCESSORIES</span>
              </div>
            </div>
            
          </div>
        </section>
        {/* product section */}

<section className='container mx-auto py-16 px-6'>
  <h2 className='text-3xl font-serif text-center mb-12'>Our Latest Product</h2>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
    <div className='bg-white broder border-gray-200 p-4 shadow-sm hover:shadow-sm transition-shadow duration-300'>
      <img src="/assets/img5.jpg" alt="product1" className='w-full h-72 object-cover'/>
       <h3 className="text-lg font-medium">Silk Midi Dress</h3>
            <p className="text-sm text-gray-600">- ATELIER</p>
            <p className="text-lg font-semibold mt-2">$120</p>
    </div>
    <div className='bg-white border border-gray-200 p-4 shadow-sm hover:shadow-sm transition-shadow duration-300'>
              <img src="/assets/img4.jpg" alt="product2" className='w-full h-72 object-cover' />
  <h3 className="text-lg font-medium">Organic Cotton Tee</h3>
            <p className="text-sm text-gray-600">- MODE</p>
            <p className="text-lg font-semibold mt-2">$45</p>  

    </div>

     <div className='bg-white broder border-gray-200 p-4 shadow-sm hover:shadow-sm transition-shadow duration-300'>
      <img src="/assets/img3.jpg" alt="product1" className='w-full h-72 object-cover'/>
       <h3 className="text-lg font-medium">Linen Jumpsuit</h3>
            <p className="text-sm text-gray-600">- ATELIER</p>
            <p className="text-lg font-semibold mt-2">$90</p>
    </div>

    <div className='bg-white broder border-gray-200 p-4 shadow-sm hover:shadow-sm transition-shadow duration-300'>
      <img src="/assets/img6.jpg" alt="product1" className='w-full h-72 object-cover'/>
       <h3 className="text-lg font-medium">Leather Crossbody Bag</h3>
            <p className="text-sm text-gray-600">- MODE</p>
            <p className="text-lg font-semibold mt-2">$188</p>
    </div>
  </div>
</section>
<footer className='bg-gray-900 text-white py-10 mt-6'>
<div className='container mx-auto px-6 flex flex-wrap justify-between items-center text-sm'>
  <div className='mb-4 md:mb-0'>
    <p>&copy; {new Date().getFullYear()} ATELIER MODE. ALL right reserved</p>
  </div>
  <div className='flex space-x-6'>
    <a href="#" className='hover:text-gray-300 transition-color duration-200'>ABOUT US</a>
    <a href="#" className='hover:text-gray-300 transition-color duration-200'>CUSTOMER SERVICE</a>
    <a href="#" className='hover:text-gray-300 transition-color duration-200'>PRIVACY POLICY</a>

  </div>
   <div className="flex space-x-4 mt-4 md:mt-0">
  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
    <FaFacebookF />
  </a>
  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
    <FaTwitter />
  </a>
  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
    <FaInstagram />
  </a>
</div>
</div>
</footer>
    </div>
  )
}

export default App