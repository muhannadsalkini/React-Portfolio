import React, { Component } from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'; // react icon pakge

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>developedby</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-xl' onClick={() => setDarkMode(!darkMode)}></BsFillMoonStarsFill>
              </li>
              <li><a className='bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-8' href='#'>Resume</a></li>
              </ul>
          </nav>
      </div>
    )
  }
}

export default Navbar
