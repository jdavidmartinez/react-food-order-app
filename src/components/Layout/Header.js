import React, { Fragment} from 'react';

import clasess from './Header.module.css';
import  mealsImage from '../../assets/meals.jpg'

const Header = (props) => {
    return <Fragment>
        <header className={clasess.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div className={clasess['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!"/>
        </div>
    </Fragment>
};

export default Header;