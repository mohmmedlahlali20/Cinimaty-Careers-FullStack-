import React, { Suspense } from 'react'
import Offers from './components/Offers';
import Wait from './Wait';


export default function Home({ searchParams }) {
  return (
    <Suspense fallback={<Wait/>}>
      <Offers searchParams={searchParams} />
    </Suspense>
  )
}
