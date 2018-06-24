export function accordion (accordion) {
    const header = Array.from(accordion.querySelectorAll('.accordion__header'));
    const active = 'accordion__content_active';
    const triangleOpen = 'triangle__open';
    const triangleClose = 'triangle__close';
    let activeAcordion;
    let activingAcordion;
    let activeHeader;
    for (let i = 0; i < header.length;i++){
        header[i].addEventListener('click', function(){
            let section = header[i].parentElement;
            activeAcordion = accordion.querySelector('.accordion__content_active');
            activeHeader = accordion.querySelector('.triangle__open');            
            activingAcordion = section.children[1];
            if (activeAcordion === activingAcordion){
                header[i].classList.remove(triangleOpen);
                header[i].classList.add(triangleClose);
                activingAcordion.classList.remove(active);
            }
            else if (activeAcordion === null) {
                header[i].classList.remove(triangleClose);
                header[i].classList.add(triangleOpen);
                activingAcordion.classList.add(active);
            }
            else {
                activeAcordion.classList.remove(active);
                activeHeader.classList.remove(triangleOpen);
                activeHeader.classList.add(triangleClose);
                header[i].classList.add(triangleOpen);
                activingAcordion.classList.add(active);
            }
        });
    }
}