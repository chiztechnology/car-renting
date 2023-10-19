import { CustomButton } from '@/components'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="overflow-hidden pt-20 pl-10">
      <p>welcome in the car details section</p>
      <Link href={'/'}>
        <CustomButton
          title='return to home'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
        />
      </Link>
    </main>
  )
}

export default page
