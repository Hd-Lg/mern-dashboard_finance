import DashboardBox from '@/components/DashboardBox';

const Row3 = () => {
  return (
    <>
      {/* Element G */}
      <div className=' row-span-3 lg:col-start-1 lg:row-start-8'>
        <DashboardBox>Row 3 - G</DashboardBox>
      </div>
      {/* Element H */}
      <div className=' row-span-4 lg:col-start-2 lg:row-start-7'>
        <DashboardBox>Row 3 - H</DashboardBox>
      </div>
      {/* Element I */}
      <div className=' row-span-2 lg:col-start-3 lg:row-start-7'>
        <DashboardBox>Row 3 - I</DashboardBox>
      </div>
      {/* Element J */}
      <div className=' row-span-2 lg:col-start-3 lg:row-start-9'>
        <DashboardBox>Row 3 - J</DashboardBox>
      </div>
    </>
  );
};

export default Row3;
