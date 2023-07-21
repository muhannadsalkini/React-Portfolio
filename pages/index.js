import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/public/Components/Navbar';
import Headar from '@/public/Components/Headar';
import {BsFillMoonStarsFill} from 'react-icons/bs'; // react icon pakge
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import {useState} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <Headar/>
      </Head>
      
      <main className='dark:text-gray-200 dark:bg-slate-800 px-10 md:px-20 lg:px-40 '>
        <section className=' min-h-screen'>
          <nav className='bg-slate-200 dark:bg-slate-900 fixed py-10 mb-12 px-10 md:px-20 lg:px-40 flex justify-between top-0 right-0 left-0'>
            <h1 className='text-xl font-burtons'>developedby</h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill className='cursor-pointer text-xl' onClick={() => setDarkMode(!darkMode)}></BsFillMoonStarsFill>
                </li>
                <li><a className='bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-8' href='#'>Resume</a></li>
              </ul>
          </nav>

          <div className='text-center p-10 py-10 pt-40'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Muhannad Salkini</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and desinger</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-100'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved } layout='fill' objectFit='cover'/>
          </div>
        </section>

      {/* */}
      <section className='min-h-screen'>
        <div>
          <h3 className='text-3xl md:text-4xl py-1'>Sevices I offer</h3>
          <p className='text-md md:text-lg py-5 leading-8 text-gray-800 dark:text-gray-100'>
              Lorem ipsum dolor sit <span className='text-teal-500'>amet</span>, consectetur adipiscing elit, sed do eiusmod <span className='text-teal-500'>tempor</span> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <p className='text-md md:text-lg py-5 leading-8 text-gray-800 dark:text-gray-100'>
              Lorem ipsum dolor sit <span className='text-teal-500'>amet</span>, consectetur adipiscing elit, sed do eiusmod <span className='text-teal-500'>tempor</span> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>

        <div className='lg:flex gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 md:text-lg'>
            <Image src={design} width={100} height={100} />
            <h3 className='text-lg md:text-xl font-medium pt-8 pb-2'>Beutiful Designs</h3>
            <p className='py-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
            <h4 className='py-4 text-teal-600 '>Desgn tools I use</h4>
            <p className='text-gray-800 dark:text-gray-100'>Photoshop</p>
            <p className='text-gray-800 dark:text-gray-100'>Illustrator</p>
            <p className='text-gray-800 dark:text-gray-100'>Figma</p>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 md:text-lg'>
            <Image src={code} width={100} height={100} />
            <h3 className='text-lg md:text-xl font-medium pt-8 pb-2'>Code</h3>
            <p className='py-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
            <h4 className='py-4 text-teal-600'>Desgn tools I use</h4>
            <p className='text-gray-800 dark:text-gray-100'>Photoshop</p>
            <p className='text-gray-800 dark:text-gray-100'>Illustrator</p>
            <p className='text-gray-800 dark:text-gray-100'>Figma</p>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 md:text-lg'>
            <Image src={consulting} width={100} height={100} />
            <h3 className='text-lg md:text-xl font-medium pt-8 pb-2'>Consulting</h3>
            <p className='py-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
            <h4 className='py-4 text-teal-600'>Desgn tools I use</h4>
            <p className='text-gray-800 dark:text-gray-100'>Photoshop</p>
            <p className='text-gray-800 dark:text-gray-100'>Illustrator</p>
            <p className='text-gray-800 dark:text-gray-100'>Figma</p>
          </div>
        </div>

      </section>

      <section>
        <div>
          <h3 className='text-3xl md:text-4xl py-1'>Portifolio</h3>
          <p className='text-md md:text-lg py-5 leading-8 text-gray-800 dark:text-gray-100'>
              Lorem ipsum dolor sit <span className='text-teal-500'>amet</span>, consectetur adipiscing elit, sed do eiusmod <span className='text-teal-500'>tempor</span> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <p className='text-md md:text-lg py-5 leading-8 text-gray-800 dark:text-gray-100'>
              Lorem ipsum dolor sit <span className='text-teal-500'>amet</span>, consectetur adipiscing elit, sed do eiusmod <span className='text-teal-500'>tempor</span> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1'>
            <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
          </div>
        </div>
      </section>

      <section>
         <div id="section_footer">
        <div className='text-center py-4'>
          <Link href="#" target="_blank" className='btn btn-link'>
            Privacy
          </Link>
          <span>|</span>
          <Link href="#" target="_blank" className='btn btn-link'>
            Terms
          </Link>
          <span>|</span>
          <Link href="mailto:#>" className='btn btn-link'>
            Contact
          </Link>
          <p>Copyright © 2023, 1ManStartup LLC. All Rights Reserved.</p>
        </div>
      </div>  
      </section>      
      </main>
    </div>
  )
}
