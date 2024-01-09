import './components.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import CPU_1 from './img/CPU_1.png';
import CPU_2 from './img/CPU_2.png';
import CPU_3 from './img/CPU_3.png';

function CPU () {

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
                    <Link to="/CPU/CPU1">
                        <img src={CPU_1} className='product_img' width="415px" height="300px"></img>
                        <p>인텔 코어i5-14세대 14600K (랩터레이크 리프레시)</p>
                    </Link>
                </div>
                <div>
                    <Link to="/CPU/CPU2">
                        <img src={CPU_2} className='product_img' width="415px" height="300px"></img>
                        <p>인텔 코어i7-14세대 14700K (랩터레이크 리프레시)</p>
                    </Link>
                </div>
                <div>
                    <Link to="/CPU/CPU3" >
                        <img src={CPU_3} className='product_img' width="415px" height="300px"></img>
                        <p>인텔 코어i9-14세대 14900K (랩터레이크 리프레시)</p>
                    </Link>
                </div>

            </div>
                
        </div>

    );
}

export default CPU;
/*
<div className='page_main'>
              <div className="row">
                <div className="col-md-4">
                  <Link to="/CPU/product1">
                    <img src={CPU_1}/>
                    <p>인텔 코어i5-14세대 14600K (랩터레이크 리프레시)</p>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="/CPU/product2">
                    <img src={CPU_2}/>
                    <p>인텔 코어i7-14세대 14700K (랩터레이크 리프레시)</p>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="/CPU/product3">
                    <img src={CPU_3} />
                    <p>인텔 코어i9-14세대 14900K (랩터레이크 리프레시)</p>
                  </Link>
                </div>
             </div>
            </div>
            */