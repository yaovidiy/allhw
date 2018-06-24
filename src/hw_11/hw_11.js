import './hw_11.scss';
import { accordion } from './scrirts/main';

let accordiones = document.querySelectorAll('.accordion');
for (let i = 0; i < accordiones.length; i++){
    accordion(accordiones[i]);
}