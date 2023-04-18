import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
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
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
