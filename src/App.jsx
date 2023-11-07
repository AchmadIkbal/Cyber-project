import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import KelasPage from './pages/KelasPage';
import FaqPage from './pages/FaqPage';
import TestimonialPage from './pages/TestimonialPage';
import SyaratKetentuanPage from './pages/SyaratKetentuanPage';


import NavbarComponent from './component/NavbarComponent';
import FooterComponent from './component/FooterComponent';



function App() {
  return <div>
    <NavbarComponent/>
    <Routes>
      <Route path='/' Component={HomePage}/>
      <Route path='/kelas' Component={KelasPage}/>
      <Route path='/testimonial' Component={TestimonialPage}/>
      <Route path='/faq' Component={FaqPage}/>
      <Route path='/syaratketen' Component={SyaratKetentuanPage}/>
    </Routes>
    <FooterComponent/>
  </div>
}

export default App;
