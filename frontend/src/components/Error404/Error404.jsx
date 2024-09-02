import React from 'react'
import NotFoundImage from '../../assets/website/oops-404.avif'

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <img src={NotFoundImage} alt="404 Not Found" className="w-1/2 mb-8" />
      <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
      <a
        href="/"
        className="mt-8 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark"
      >
        Go Back Home
      </a>
    </div>
  )
}

export default Error404
