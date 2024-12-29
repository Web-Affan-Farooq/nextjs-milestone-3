import React from 'react'

const Card_blogs = ({title}: {title:string}) => {
  return (
    <div className='rounded-lg p-4 w-[350px]  text-gray-600 shadow-lg shadow-gray-500'>
        <h1 className='text-2xl font-bold text-gray-600 '>{title}</h1>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ratione cumque, debitis enim laboriosam error </p>
    </div>
  )
}

export default Card_blogs