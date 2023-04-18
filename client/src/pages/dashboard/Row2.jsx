import DashboardBox from '../../components/DashboardBox';

const Row2 = () => {
  return (
    <>
      {/* Element D */}
      <div className=' row-span-3 lg:col-start-1 lg:row-start-5'>
        <DashboardBox>Row 2 - D</DashboardBox>
      </div>
      {/* Element E */}
      <div className=' row-span-2 lg:col-start-2 lg:row-start-5 '>
        <DashboardBox>Row 2 - E</DashboardBox>
      </div>
      {/* Element F */}
      <div className=' row-span-3 lg:col-start-3 lg:row-start-4 '>
        <DashboardBox>Row 2 - F</DashboardBox>
      </div>
    </>
  );
};

export default Row2;
