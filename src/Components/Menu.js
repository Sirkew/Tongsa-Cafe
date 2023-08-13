import React from 'react';
import {menu} from './Data';

const Menu = () => {
  return (
    <>
        <section className='menu' id='menu'>
            <h1 className='heading'>Our <span>menu</span></h1>
            <div className="box-container">
                {
                    menu.map((item, index) => (
                        <div className='box'>
                            <img src={item.img}/>
                        </div>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default Menu
