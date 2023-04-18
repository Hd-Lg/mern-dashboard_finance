import React from 'react';

/*
The Grid Layout for lg screen as follow:
a b c
a b c
a b c
a b f
d e f
d e f
d h i
g h i
g h j
g h j

otherwise one above the other from a => j
*/

const Dashboard = () => {
  return (
    <div className='w-full h-full gap-6 grid auto-cols-auto auto-rows-[80px] lg:grid-cols-LargeScreen lg:grid-rows-LargeScreen'>
      <div className='bg-red-500 row-span-4 lg:col-start-1 lg:row-start-1'>
        {/* Element A */}
        <p>A</p>
      </div>
      <div className='bg-red-500 row-span-4 lg:col-start-2 lg:row-start-1 '>
        {/* Element B */}
        <p>B</p>
      </div>
      <div className='bg-red-500 row-span-3 lg:col-start-3 lg:row-start-1 '>
        {/* Element C */}
        <p>C</p>
      </div>
      <div className='bg-red-500 row-span-3 lg:col-start-1 lg:row-start-5'>
        {/* Element D */}
        <p>D</p>
      </div>
      <div className='bg-red-500 row-span-2 lg:col-start-2 lg:row-start-5 '>
        {/* Element E */}
        <p>E</p>
      </div>
      <div className='bg-red-500 row-span-3 lg:col-start-3 lg:row-start-4 '>
        {/* Element F */}
        <p>F</p>
      </div>
      <div className='bg-red-500 row-span-3 lg:col-start-1 lg:row-start-8'>
        {/* Element G */}
        <p>G</p>
      </div>
      <div className='bg-red-500 row-span-4 lg:col-start-2 lg:row-start-7'>
        {/* Element H */}
        <p>H</p>
      </div>
      <div className='bg-red-500 row-span-2 lg:col-start-3 lg:row-start-7'>
        {/* Element I */}
        <p>I</p>
      </div>
      <div className='bg-red-500 row-span-2 lg:col-start-3 lg:row-start-9'>
        {/* Element J */}
        <p>J</p>
      </div>
    </div>
  );
};

export default Dashboard;
