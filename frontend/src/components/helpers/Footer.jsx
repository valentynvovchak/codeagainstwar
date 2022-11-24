import React from 'react'

const agreement = "By using our site, you consent to us storing analytical data to improve your user experience"
const copyright = `© CodeAgainstWar ${new Date().getFullYear()}`

export default function Footer() {
    return (<div className='font-bold text-sm pt-3 sm:pl-4 bg-gray-200 flex flex-col items-center justify-center'>
        <span className='text-black-500'>{ agreement } </span>
        <span className='text-blue-500'>{ copyright } </span>    
    </div>)
}
