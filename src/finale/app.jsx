import * as React from 'react';
import {render} from 'react-dom';
import { ActiveMobileMenu } from './components/mobilemenu/mobilemenu.jsx';
import { Menu } from './components/mobilemenu/mobilemenu.jsx';

render(<ActiveMobileMenu/>, document.querySelector('.hidden'));
render(<Menu />,document.querySelector(".page-header"));