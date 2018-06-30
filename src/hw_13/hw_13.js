import './hw_13.scss';

import { ligther } from './scripts/lighter';
import { addligghter } from './scripts/addlighter';
import { ligtertoogle } from './scripts/lightertoogle';

const target = document.querySelector('.conteiner');

for (let i = 0; i < 5; i++){
    ligther(target);
}
addligghter(target);
ligtertoogle(target);