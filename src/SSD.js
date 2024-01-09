import './components.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import SSD_1 from './img/SSD_1.png';
import SSD_2 from './img/SSD_2.png';
import SSD_3 from './img/SSD_3.png';

function SSD () {

    return (
        <div className="component_main">
            <ul className='page_ul'>
              <li><Link to="/CPU">CPU</Link></li>
              <li><Link to="/RAM">RAM</Link></li>
              <li><Link to="/GC">GRAPHIC CARD</Link></li>
              <li><Link to="/SSD">SSD</Link></li>
              <li><Link to="/HDD">HDD</Link></li>
            </ul>

            <div className='page_main'>
                <div>
                    <Link to="/SSD/SSD1">
                        <img src={SSD_1} className='product_img' width="400px" height="180px"></img>
                        <p>마이크론 Crucial P3 M.2 NVMe 대원씨티에스 (1TB)</p>
                    </Link>
                </div>
                <div>
                    <Link to="/SSD/SSD2">
                        <img src={SSD_2} className='product_img' width="400px" height="180px"></img>
                        <p>마이크론 Crucial P5 Plus M.2 NVMe 대원씨티에스 (1TB) </p>
                    </Link>
                </div>
                <div>
                    <Link to="/SSD/SSD3">
                        <img src={SSD_3} className='product_img' width="400px" height="180px"></img>
                        <p>마이크론 Crucial T500 M.2 NVMe 대원씨티에스 (1TB)</p>
                    </Link>
                </div>

            </div>
                
        </div>

    );
}

export default SSD;