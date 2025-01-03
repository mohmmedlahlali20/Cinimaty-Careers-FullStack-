import React from 'react'

export default function Wait() {
  return (

    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>

  )
}
