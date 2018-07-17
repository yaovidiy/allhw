import * as React from 'react';
import './mobilemenu.scss';

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
        const items = [
        {title:"ABOUT",
         index:1    
        },
        {title:"CONTACT",
         index:2
        },
        {title:"FAQS",
         index:3
        },
        {title:"MANAGE BOOKING",
         index:4
        },
        {title:"SIGN IN",
         index:5 
        },
        {title:"REGISTER",
         index:6
        }
        ];
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
        const menu = document.querySelector(".hidden");
        const bar = Array.from(document.querySelectorAll(".menu-bar__line"));
        console.log(bar);
        if (menu.className === "hidden hidden__active"){
        menu.className = "hidden";
        bar.forEach((elem)=>{
        elem.className = "menu-bar__line";
        });
        } else {
        bar.forEach((elem)=>{
         elem.className = "menu-bar__line menu-bar__active";
        })
        menu.className = "hidden hidden__active";
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