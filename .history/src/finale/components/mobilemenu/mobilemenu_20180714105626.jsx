import * as React from 'react';
//import './mobilemenu.scss';

export class ActiveMobileMenu extends React.Component {
    changeColor(e){
        const target = e.target;
        let active = document.querySelector(".mobile-menu__item-active");
        if (active === null) {
            target.className = "mobile-menu__item-active";
        } else {
            active.className = "mobile-menu__item";
            target.className = "mobile-menu__item-active";
        }  
    }
    render(){
        const items = this.props.data;
        const menu = [];
        items.forEach((item) =>{
                const menuItem = <div onClick={ this.changeColor.bind(this) } key={ item.index } className="mobile-menu__item">
                { item.title } 
            </div>;
            menu.push(menuItem);      
        });
        return <div className="mobile-menu">
            <div className="mobile-menu__icon">
            </div>
            { menu }
        </div>
    }
}
export class Menu extends React.Component {
    toogleMenu() {
        const menu = document.querySelector(".popuap-menu");
        const bar = Array.from(document.querySelectorAll(".menu-bar__line"));
        if (menu.className === "popuap-menu popuap-menu__active"){
        menu.className = "popuap-menu";
        bar.forEach((elem)=>{
        elem.className = "menu-bar__line";
        });
        } else {
        bar.forEach((elem)=>{
         elem.className = "menu-bar__line menu-bar__active";
        })
        menu.className = "popuap-menu popuap-menu__active";
        }
    }
    render(){
        return  <div> <img src="./assets/images/fleetster-logo.png" alt="logo" />
        <div className="menu-bar" onClick={ this.toogleMenu.bind(this) }>
            <div className="menu-bar__line"></div>
            <div className="menu-bar__line"></div>
        </div>
        <h1 className="menu-text">
        Find your ideal car from 500+ cars
        </h1>
        </div>
    }
}