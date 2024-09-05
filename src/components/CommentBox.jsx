import React from 'react'

export default function CommentBox({name, role, content}) {
  return (
    <div className='shrink-0 bg-white rounded-md px-6 py-8 max-w-xl shadow-md'>
        <div className='flex justify-between items-center'>
            <div>
                <h4 className='font-semibold text-lg'>{name}</h4>
                <span className='text-sm text-gray-500'>{role}</span>
            </div>
            <p className='text-base'>Maduraholic</p>
        </div>

        <p className='mt-6'>
            {content}
        </p>
    </div>
  )
}
