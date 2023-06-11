import { Fragment } from "react";
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  CreditCardIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import { FiLogOut } from "react-icons/fi";
import { BellIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Menu, Transition, Popover } from "@headlessui/react";
import Link from "next/link";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
export default function TopBar({ showNav, setShowNav }) {
  const router = useRouter();
  const {logout}= UserAuth();
  let user= JSON.parse(sessionStorage.getItem("user"));
const handleLogout=async (e) =>{
   console.log("first")
    if(user){
      logout();
      router.push('/login')
   }
}
  return (
    <div
      className={`fixed w-full h-12 flex justify-between items-center transition-all duration-[400ms]  z-10 top-0  bg-slate-300  shadow ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16 ">
        <Bars3CenterLeftIcon
          className="h-8 w-8  text-gray-700 cursor-pointer hover:bg-slate-500"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
       
      <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
            <div className="flex justify-center mt-auto pr-5 ">
        <picture>
          <img
            className="w-15 h-10 rounded-full"
            src="/assets/logo/sm.jpg"
            alt="company logo"
          />
        </picture>
        
      </div>
      <p className="hidden md:block">
       <span className='text-pink-600 font-light'> well come</span>
      <span className="ml-2 text-purple-600 font-bold">
      {user && user.firstname}
       </span></p>
            <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1"> 
              <Menu.Item>
                  <Link
                    href="/admin1/settings"
                    className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <Cog8ToothIcon className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                </Menu.Item>
                <Menu.Item>
                 
                <button onClick={() => handleLogout()} className="flex  hover:bg-orange-500 hover:text-white text-gray-700 rounded w-full p-2 text-sm transition-colors items-center">  
                  
                  
                  < FiLogOut className="h-4 w-4 mr-2" />
                     Logout
                    </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      
      </div>
    </div>
  );
}
