import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BanknotesIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [selected, setSelected] = useState('dashboard');
  return (
    <nav className='flex justify-between items-center mb-1 p-2'>
      {/* Left side */}
      <div className='flex justify-between items-center gap-4'>
        <BanknotesIcon className='w-8 h-8' />
        Financial Dashboard
      </div>
      {/* Right side */}
      <div className='flex justify-between items-center gap-8'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? '' : isActive ? 'font-bold text-lg underline' : ''
          }
        >
          dashboard
        </NavLink>
        <NavLink
          to='/predictions'
          className={({ isActive, isPending }) =>
            isPending ? '' : isActive ? 'font-bold text-lg underline' : ''
          }
        >
          predictions
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
