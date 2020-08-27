import React from 'react';
import ReactDom from 'react-dom'

import DatePicker from "./DatePicker/index";


function App() {
    return <div><DatePicker/></div>
}


ReactDom.render(<App/>, document.querySelector('#root'));
