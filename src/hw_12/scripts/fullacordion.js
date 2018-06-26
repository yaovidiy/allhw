export function fullAccordion (target, items) {
const section = document.createElement('section');
const header = document.createElement('div');
const content = document.createElement('div');
const text = document.createElement('span');
const triangleOpen = 'triangle__open';
const triangleClose = 'triangle__close';
const active = 'accordion__content_active'
let activeAcordion;
let activingAcordion;
let activeHeader;
    

section.classList.add('accordion__section');
target.appendChild(section);

header.classList.add('accordion__header', 'triangle__close');
header.innerHTML = items.title;
header.addEventListener('click', () => {
    activeAcordion = target.querySelector('.accordion__content_active');
    activeHeader = target.querySelector('.triangle__open');            
    activingAcordion = content;
    if (activeAcordion === activingAcordion) {
        header.classList.remove(triangleOpen);
        header.classList.add(triangleClose);
        activingAcordion.classList.remove(active);
    }
    else if (activeAcordion === null) {
        header.classList.remove(triangleClose);
        header.classList.add(triangleOpen);
        activingAcordion.classList.add(active);
    }
    else {
        activeAcordion.classList.remove(active);
        activeHeader.classList.remove(triangleOpen);
        activeHeader.classList.add(triangleClose);
        header.classList.add(triangleOpen);
        activingAcordion.classList.add(active);
    }
});
section.appendChild(header);

content.classList.add('accordion__content');
section.appendChild(content);

text.classList.add('accordion__content_text');
text.innerHTML = items.text;
content.appendChild(text);
}