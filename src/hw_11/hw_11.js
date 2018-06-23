import './hw_11.scss';
import { Accordion } from './scrirts/func';

let accordiones = document.querySelectorAll('.accordion__section');
for (let i = 0; i < accordiones.length; i++) {
    Accordion(accordiones[i]);    
}