import './components.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import HDD_1 from './img/HDD_1.png';
import HDD_2 from './img/HDD_2.png';
import HDD_3 from './img/HDD_3.png';

function HDD () {

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
                    <Link to="/HDD/HDD1">
                        <img src={HDD_1} className='product_img' width="280px" height="350px"></img>
                        <p>Seagate BarraCuda 7200/256M (ST2000DM008, 2TB)</p>
                    </Link>
                </div>
                <div>
                    <Link to="/HDD/HDD2">
                        <img src={HDD_2} className='product_img' width="280px" height="350px"></img>
                        <p>Seagate BarraCuda 5400/256M (ST8000DM004, 8TB)</p>
                    </Link>
                </div>
                <div>
                    <Link to="/HDD/HDD3">
                        <img src={HDD_3} className='product_img' width="280px" height="350px"></img>
                        <p>Seagate BarraCuda 5400/256M/해외구매 (ST8000DM004, 8TB)</p>
                    </Link>
                </div>

            </div>
                
        </div>

    );
}

export default HDD;