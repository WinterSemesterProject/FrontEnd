import './components.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import 그래픽카드_1 from './img/그래픽카드_1.png';
import 그래픽카드_2 from './img/그래픽카드_2.png';
import 그래픽카드_3 from './img/그래픽카드_3.png';

function 그래픽카드 () {

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
                    <Link to="/GC/GC1">
                        <img src={그래픽카드_1} className='product_img' width="440px" height="300px"></img>
                        <p>이엠텍 지포스 RTX 4070 Ti GAMINGPRO D6X 12GB</p>
                    </Link>
                </div>
                <div>
                    <Link to="/GC/GC2">
                        <img src={그래픽카드_2} className='product_img' width="440px" height="300px"></img>
                        <p>이엠텍 지포스 RTX 4070 STORM X Dual D6X 12GB</p>
                    </Link>
                </div>
                <div>
                    <Link to="/GC/GC3">
                        <img src={그래픽카드_3} className='product_img' width="440px" height="300px"></img>
                        <p>이엠텍 지포스 RTX 4090 GAMEROCK OC D6X 24GB</p>
                    </Link>
                </div>

            </div>
                
        </div>

    );
}

export default 그래픽카드;