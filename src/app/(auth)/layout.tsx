import React from 'react'

type Props = { children: React.ReactNode }

const AuthLayout = ({ children }: Props) => {
  return (
    <div className='flex items-center justify-center h-screen bg-black'>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 to-gray-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-blue-500/20 to-cyan-500/20 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-2xl" />
        <div className="absolute left-1/4 top-1/3 h-32 w-32 rounded-full bg-teal-500/20 blur-3xl" />
      </div>
      <div className='relative z-10'>
        {children}
      </div>

    </div>
  )
}

export default AuthLayout
