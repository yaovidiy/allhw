export function Accordion (accordions) {
    // const accordion = document.querySelector('.accordion');
   // const sections = Array.from(accordions.querySelectorAll('.accordion__section'));
     const header = accordions.querySelector('.accordion__header');
     const content = accordions.querySelector('.accordion__content');
     const active = 'accordion__content_active';
     const triangleOpen = 'triangle__open';
     const triangleClose = 'triangle__close';
     header.addEventListener('click', function(){
            openAccordion();              
         
     });
 
 function openAccordion() {
    let activeAccordion = document.querySelector('.accordion__content_active');
     activeAccordion.classList.remove(active);    
     content.classList.add(active); //Открываем скрытый контент
     header.classList.remove(triangleClose); // Убираем белый смотрящий вверх триугольгик 
     header.classList.add(triangleOpen);// Добавляем белый смотрящий вниз треугольник
     }
     
 
 }