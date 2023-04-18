import React from 'react';

const DashboardBox = ({ children }) => {
  return (
    <div className='flex justify-between items-center rounded-2xl shadow-lg bg-[#2c2e35] w-full h-full'>
      {children}
    </div>
  );
};

export default DashboardBox;
