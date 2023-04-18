import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '@/components/Navbar.jsx';
import Dashboard from '@/pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-full px-1 py-2 text-gray-300'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/predictions' element={<div>Prediction Page</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
