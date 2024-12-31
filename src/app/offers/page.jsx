import React, { Suspense } from 'react'
import Offers from './components/Offers';


export default function Home({ searchParams }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Offers searchParams={searchParams} />
    </Suspense>
  )
}
