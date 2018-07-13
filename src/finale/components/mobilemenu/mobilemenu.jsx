import * as React from 'react';
import './mobilemenu.scss';

export class ActiveMobileMenu extends React.Component {
    toogleMenu() {
        const menu = document.querySelector(".hidden");
        if (munu.className === "hidden__active"){
        menu.className = "hidden";
        } else {
        menu.className = "hidden__active";
        }
    }
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
        <div onClick={this.toogleMenu.bind(this)} className="mobile-menu__close">
        <div className="mobile-menu__close-item"></div>
        <div className="mobile-menu__close-item"></div>
        </div>
            <div className="mobile-menu__icon">
            </div>
            { menu }
        </div>
    }
}