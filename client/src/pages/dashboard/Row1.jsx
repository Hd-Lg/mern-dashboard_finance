import DashboardBox from '../../components/DashboardBox';

const Row1 = () => {
  return (
    <>
      {/* Element A */}
      <div className=' row-span-4 lg:col-start-1 lg:row-start-1 '>
        <DashboardBox>Row 1 - A</DashboardBox>
      </div>
      {/* Element B */}
      <div className=' row-span-4 lg:col-start-2 lg:row-start-1 '>
        <DashboardBox>Row 1 - B</DashboardBox>
      </div>
      {/* Element C */}
      <div className=' row-span-3 lg:col-start-3 lg:row-start-1 '>
        <DashboardBox>Row 1 - C</DashboardBox>
      </div>
    </>
  );
};

export default Row1;
