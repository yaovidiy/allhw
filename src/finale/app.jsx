import * as React from 'react';
import {render} from 'react-dom';
import { ActiveMobileMenu } from './components/mobilemenu/mobilemenu.jsx';
import { Menu } from './components/mobilemenu/mobilemenu.jsx';
const menuItems = [
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
render(<ActiveMobileMenu data={menuItems} />, document.querySelector('.popuap-menu'));
render(<Menu />,document.querySelector(".page-header"));