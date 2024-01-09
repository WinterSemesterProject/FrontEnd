import './main.css';
import components from './부품별.png';
import chart from './실시간차트.png';
import product from './제품별.png';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function Main() {

return (
    <div className='main'>
        <div className='main-bg'></div>
        
        <div className='container'>
          <div className="row">
            <div className="col-md-4">
                <Link to="/CPU">
                  <img src={components} />
                  <p>부품별</p>
                </Link>
            </div>
            <div className="col-md-4">
                <Link to="/GC/GC1">
                  <img src={chart} />
                  <p>가격 그래프</p>
                </Link>
            </div>
            <div className="col-md-4">
                <Link to="/HDD">
                  <img src={product} />
                  <p>제품별</p>
                </Link>
            </div>
          </div>
        </div>
    </div>
    );
}

export default Main;