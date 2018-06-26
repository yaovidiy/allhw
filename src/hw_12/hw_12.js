import './hw_12.scss';

const itemsList = [
    {
        title: 'Collapsible item #1',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
    },
    {
        title: 'Collapsible item #2',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'    
    },
    {
        title: 'Collapsible item #3',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'    
    },
    {
        title: 'Collapsible item #4',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'    
    },
    {
        title: 'Collapsible item #5',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'    
    },
]
import { fullAccordion } from './scripts/fullacordion';
const target = document.querySelector('.accordion');
for(let i = 0; i < itemsList.length; i++){
    fullAccordion(target,itemsList[i]);
}