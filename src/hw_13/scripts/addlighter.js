import { ligther } from './lighter';
export function addligghter (target){
    const button = document.createElement('button');
    button.classList.add('lighter__add');
    button.classList.add('col-md-3');
    button.innerHTML = 'Add lighter';

    target.appendChild(button);
    button.addEventListener('click', ()=>{
        ligther(target);
    });
}