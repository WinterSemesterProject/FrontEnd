import './components.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import RAM_1 from './img/RAM_1.png';
import RAM_2 from './img/RAM_2.png';
import RAM_3 from './img/RAM_3.png';

function RAM () {

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
                    <Link to="/RAM/RAM1">
                        <img src={RAM_1} className='product_img' width="430px" height="200px"></img>
                        <p>G.SKILL DDR5-5600 CL36 AEGIS 5 (16GB)</p>
                    </Link>
                </div>
                <div>
                    <Link to="/RAM/RAM2">
                        <img src={RAM_2} className='product_img' width="430px" height="200px"></img>
                        <p>G.SKILL DDR4-3200 CL16 AEGIS (16GB)</p>
                    </Link>
                </div>
                <div>
                    <Link to="/RAM/RAM3">
                        <img src={RAM_3} className='product_img' width="430px" height="200px"></img>
                        <p>G.SKILL DDR4-4266 CL19 TRIDENT ZSW 패키지 (16GB(8Gx2))</p>
                    </Link>
                </div>

            </div>
                
        </div>

    );
}

export default RAM;