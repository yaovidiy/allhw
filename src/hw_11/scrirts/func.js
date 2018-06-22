export function Accordion () {
    // const accordion = document.querySelector('.accordion');
     const header = document.querySelector('.accordion__header');
     const content = document.querySelector('.accordion__content');
     const active = 'accordion__content_active';
     const activeHead = 'accordion__header_active';
     let state = 'close';
     header.addEventListener('click', function(){
         if (state === 'open'){
             closeAccordion();
             state = 'close';
         }
         else{
            openAccordion();
            state = 'open';              
         }
     });
 
 function openAccordion() {
     content.classList.add(active);
     header.classList.add(activeHead);
 }
 function closeAccordion() {
     content.classList.remove(active);
     header.classList.remove(activeHead);
 }
 
 }