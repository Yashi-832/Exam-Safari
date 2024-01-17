<<<<<<< HEAD
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import '../herosection/hero.css'
import { Link } from 'react-router-dom'
import'./index.css'
const navigation = [
  { name: 'Contact Us', href: '#', current: false, style: { fontSize: '70px' } },
  { name: 'Team', href: '#', current: false, style: {fontSize: '70px'}},
  { name: 'Projects', href: '#', current: false, style: {fontSize: '70px'} },
  { name: 'Calendar', href: '#', current: false, style: {fontSize: '70px'} },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#142d55] h-30">
      {( open : any) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-0">
            <div className="relative flex h-20 items-center justi-2 fy-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={"/"}>
                  <img
                    className="h-11 w-auto animatedImage"
                    src={"/images/logo.png"}
                    alt="Your Company"
                    />
                    </Link>
                </div>
                <div className="hidden sm:ml-8 sm:block">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-5 py-3 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-7 w-7" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {( active : any ) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {( active : any ) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {( active : any ) => (
                          <Link to={"/Login"}>
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                           Login
                          </a>
                            </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
=======
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <>
        <div className="mt-[-120px] w-full fixed z-10 ">
            <div className='bg-[#142d55]  flex justify-between px-4' >
                <div className='flex gap-2 p-2 md:ml-32 ' >
                <IoCall style={{color: "#e0e0e0",}} className=' h-6 w-6' />
                <p className=' hidden md:contents   items-center justify-center bg-[#04233b] px-4 text-sm font-medium text-white sm:px-6 lg:px-8'>Call: +91 9559652054</p>                    
                </div>
                <div className='flex gap-2 p-2 ' >
                <MdEmail style={{color: "#e0e0e0",}} className=' h-6 w-6' />
                <p className=' hidden md:contents   items-center justify-center bg-[#04233b] px-4 text-sm font-medium text-white sm:px-6 lg:px-8'>Email : examsafari@gmail.com</p>                    
                </div>
                <div className='flex gap-2 p-2 md:mr-32 ' >
                <FaLocationDot style={{color: "#e0e0e0",}} className=' h-6 w-6'/>
                <p className=' hidden md:contents items-center justify-center bg-[#04233b] px-4 text-sm font-medium text-white sm:px-6 lg:px-8'>Location</p>                    
                </div>           
             </div>

            <nav className="flex justify-between bg-white text-[#142d55] px-2 md:px-4 h-[70px]  ">
              <Link to="/">              
              <div>
                <img src="./images/logo.png" className="h-32 md:ml-32 md:h-12 md:mt-4" alt="" />
              </div>
              </Link>

              <Link to={'/login'}>
              <div  className="md:text-2xl font-semibold md:mr-32 border border-[#142d55] px-2 md:mt-4 py-1 rounded-[5px]">Login</div>
              </Link>

            </nav>        
       
      

        </div>
    </>
  )
}

export default Navbar
>>>>>>> 909f7c8 (first day task)
