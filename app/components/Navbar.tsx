"use client"
import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../utils/redux/slices/userSlice';
// import { wrapper } from '../utils/store';

const Navbar = () => {
  const user = useSelector((state : any) => state.user.user);
  const isAuthenticated = useSelector((state : any) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link className="text-white font-bold text-xl" href="/">
                Logo
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/">
                  Home
                </Link>
                <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div>
            {isAuthenticated ?
              <>
              <Link href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Hi,{`${user}`}
              </Link>
              <button onClick={handleLogout}>LogOut</button></>
              : <></>}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// export default wrapper.withRedux(Navbar);
