export function accordion (accordion) {
    const header = Array.from(accordion.querySelectorAll('.accordion__header'));
    const active = 'accordion__content_active';
    const triangleOpen = 'triangle__open';
    const triangleClose = 'triangle__close';
    let activeAcordion;
    let activingAcordion;
    for (let i = 0; i < header.length;i++){
        header[i].addEventListener('click', function(){
            let section = header[i].parentElement;
            activeAcordion = accordion.querySelector('.accordion__content_active');
            activingAcordion = section.children[1];
            if (activeAcordion === activingAcordion){
                header[i].classList.add(triangleClose);
                activingAcordion.classList.remove(active);
            }
            else if (activeAcordion === null) {
                header[i].classList.add(triangleOpen);
                activingAcordion.classList.add(active);
            }
            else {
                activeAcordion.classList.remove(active);
                header[i].classList.add(triangleOpen);
                activingAcordion.classList.add(active);
            }
        });
    }
}