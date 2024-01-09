import './components.css';
import './product_detail.css'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
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

function Product (props){
    return (
        <div className='product_container'>
            <div className='detail_img'>
              <img src={props.i} className='product_img'></img>
            </div>
            <div className='line'></div>
            <div className='graph'>
                <div className='name'>{props.name}</div>
                <div className='price'>시세</div>
                <Graph url={props.url}></Graph>
            </div>
        </div>
    );
}

export default Product