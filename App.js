import React from 'react';
import  ReactDOM  from "react-dom";
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * -RestaurantContainer
 *  -Resturantcard
 *      -Img
 *      -Name of res,Star rating,cuisines,delivery Time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */


const App = () => {
    return (
        <div className='app'>
            <Header />
            <Body/>
            {/* Other components or content */}
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
