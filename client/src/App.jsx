import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '@/components/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-full px-1 py-2'>
        <Navbar />
        <Routes>
          <Route path='/' element={<div>Dashboard Page</div>} />
          <Route path='/predictions' element={<div>Prediction Page</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
