import React from 'react'

const HomeSkeleton = ({count,title,className=""}) => {

  return (
    <div>
      <div className={`w-64 border rounded-2xl h-30 flex flex-col px-4 items-start justify-center ${className}`}>
        <h1 className='text-2xl'>{title}</h1>
        <h1 className='text-2xl'>{count}</h1>
      </div>
    </div>
  )
}

export default HomeSkeleton
