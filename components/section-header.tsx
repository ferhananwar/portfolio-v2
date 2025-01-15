import React from 'react'

export default function SectionHeader(
    {children}:{children:React.ReactNode}) {
  return (
    <h2 className='text-[1.75rem] text-center capitalize font-medium mb-8'>{children}</h2>
  )
}
