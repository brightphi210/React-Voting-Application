import React from 'react'
import logo from './images/ECN_logo-1.png'


const Navbar = ({connectWallet}) => {
  return (
    <div className='w-full '>
      <div className='flex m-auto w-11/12 lg:w-full lg:px-[10rem] left-0 right-0 fixed my-10 top-0 '>
        <div className='flex items-center w-full lg:px-10 lg:py-0 px-3 py-1 lg:rounded-full bg-blue-200 rounded-md'>
              <div className='lg:w-20 w-20'>
                  <img src={logo} alt="" />
              </div>

              <ul className='flex ml-auto gap-10 items-center'>
                <button onClick={connectWallet} class="btn btn-active btn-primary bg-white text-black text-xs lg:text-xs border-none hover:bg-purple-50 py-3 lg:py-1 px-10">Cast your vote</button>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar