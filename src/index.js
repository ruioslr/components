import React from 'react';
import ReactDom from 'react-dom';
import {DatePicker} from 'antd';

import MyDatePicker from "./DatePicker/index";



function App() {
    return <div>
        <MyDatePicker/>
        <DatePicker />
    </div>
}


ReactDom.render(<App/>, document.querySelector('#root'));
