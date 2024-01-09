import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Main from './main';
import CPU from './CPU';
import RAM from './RAM';
import 그래픽카드 from './GC';
import SSD from './SSD';
import HDD from './HDD';
import axios from 'axios';
import Product from './product_detail';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import CPU1 from './img/CPU_1.png';
import CPU2 from './img/CPU_2.png';
import CPU3 from './img/CPU_3.png';
import RAM1 from './img/RAM_1.png';
import RAM2 from './img/RAM_2.png';
import RAM3 from './img/RAM_3.png';
import 그래픽카드1 from './img/그래픽카드_1.png';
import 그래픽카드2 from './img/그래픽카드_2.png';
import 그래픽카드3 from './img/그래픽카드_3.png';
import SSD1 from './img/SSD_1.png';
import SSD2 from './img/SSD_2.png';
import SSD3 from './img/SSD_3.png';
import HDD1 from './img/HDD_1.png';
import HDD2 from './img/HDD_2.png';
import HDD3 from './img/HDD_3.png';
import Graph from './graph';

function App() {


  return (
    <div className='App'>

      <Routes>
        <Route path="/" element={
        <div>
          <Header></Header>
          <Main></Main>
        </div>
        }>
        </Route>

        <Route path="/CPU" element={
        <div>
          <Header></Header>
          <CPU></CPU>
        </div>
        }>
        </Route>

        <Route path='/CPU/CPU1' element={ 
          <div>
            <Header></Header>
            <Product i={CPU1} url='CPU/CPU1' name='인텔 코어i5-14세대 14600K (랩터레이크 리프레시)'></Product>
          </div> }></Route>
        <Route path='/CPU/CPU2' element={ 
          <div>
            <Header></Header>
            <Product i={CPU2} url='CPU/CPU2' name='인텔 코어i7-14세대 14700K (랩터레이크 리프레시)'></Product>
          </div> }></Route>
        <Route path='/CPU/CPU3' element={ 
          <div>
            <Header></Header>
            <Product i={CPU3} url='CPU/CPU3' name='인텔 코어i9-14세대 14900K (랩터레이크 리프레시)'></Product>
          </div> }></Route>

        <Route path="/RAM" element={
        <div>
          <Header></Header>
          <RAM></RAM>
        </div>
        }>

        </Route>

        <Route path='/RAM/RAM1' element={ 
          <div>
            <Header></Header>
            <Product i={RAM1} url='RAM/RAM1' name='G.SKILL DDR5-5600 CL36 AEGIS 5 (16GB)'></Product>
          </div> }></Route>
        <Route path='/RAM/RAM2' element={ 
          <div>
            <Header></Header>
            <Product i={RAM2} url='RAM/RAM2' name='G.SKILL DDR4-3200 CL16 AEGIS (16GB)'></Product>
          </div> }></Route>
        <Route path='/RAM/RAM3' element={ 
          <div>
            <Header></Header>
            <Product i={RAM3} url='RAM/RAM3' name='G.SKILL DDR4-4266 CL19 TRIDENT ZSW 패키지 (16GB(8Gx2))'></Product>
          </div> }></Route>

        <Route path="/GC" element={
        <div>
          <Header></Header>
          <그래픽카드></그래픽카드>
        </div>
        }>

        </Route>

        <Route path='/GC/GC1' element={ 
          <div>
            <Header></Header>
            <Product i={그래픽카드1} url='GC/GC1' name='이엠텍 지포스 RTX 4070 Ti GAMINGPRO D6X 12GB'></Product>
          </div> }></Route>
        <Route path='/GC/GC2' element={ 
          <div>
            <Header></Header>
            <Product i={그래픽카드2} url='GC/GC2' name='이엠텍 지포스 RTX 4070 STORM X Dual D6X 12GB'></Product>
          </div>}></Route>
        <Route path='/GC/GC3' element={ 
          <div>
            <Header></Header>
            <Product i={그래픽카드3} url='GC/GC3' name='이엠텍 지포스 RTX 4090 GAMEROCK OC D6X 24GB'></Product>
          </div> }></Route>


        <Route path="/SSD" element={
        <div>
          <Header></Header>
          <SSD></SSD>
        </div>
        }>

        </Route>

        <Route path='/SSD/SSD1' element={ 
          <div>
            <Header></Header>
            <Product i={SSD1} url='SSD/SSD1' name='마이크론 Crucial P3 M.2 NVMe 대원씨티에스 (1TB)'></Product>
          </div> }></Route>
        <Route path='/SSD/SSD2' element={ 
          <div>
            <Header></Header>
            <Product i={SSD2} url='SSD/SSD2' name='마이크론 Crucial P5 Plus M.2 NVMe 대원씨티에스 (1TB)'> </Product>
          </div> }></Route>
        <Route path='/SSD/SSD3' element={ 
          <div>
            <Header></Header>
            <Product i={SSD3} url='SSD/SSD3' name='마이크론 Crucial T500 M.2 NVMe 대원씨티에스 (1TB)'></Product>
          </div> }></Route>


        <Route path="/HDD" element={
        <div>
          <Header></Header>
          <HDD></HDD>
        </div>
        }>
        </Route>

        <Route path='/HDD/HDD1' element={ 
          <div>
            <Header></Header>
            <Product i={HDD1} url='HDD/HDD1' name='Seagate BarraCuda 7200/256M (ST2000DM008, 2TB)'></Product>
          </div> }></Route>
        <Route path='/HDD/HDD2' element={ 
          <div>
            <Header></Header>
            <Product i={HDD2} url='HDD/HDD2' name='Seagate BarraCuda 5400/256M (ST8000DM004, 8TB)'></Product>
          </div> }></Route>
        <Route path='/HDD/HDD3' element={ 
          <div>
            <Header></Header>
            <Product i={HDD3} url='HDD/HDD3' name='Seagate BarraCuda 5400/256M/해외구매 (ST8000DM004, 8TB)'></Product>
          </div> }></Route>


      </Routes>

    </div>

  );
}



export default App;
