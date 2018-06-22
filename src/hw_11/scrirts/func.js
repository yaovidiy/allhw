export function Accordion (accordions) {
    // const accordion = document.querySelector('.accordion');
   // const sections = Array.from(accordions.querySelectorAll('.accordion__section'));
     const header = accordions.querySelector('.accordion__header');
     const content = accordions.querySelector('.accordion__content');
     const active = 'accordion__content_active';
     const triangleOpen = 'triangle__open';
     const triangleClose = 'triangle__close';
     let activeAccordion = document.querySelector(active);
     header.addEventListener('click', function(){
            openAccordion();              
         
     });
 
 function openAccordion() {
     if (activeAccordion){
     activeAccordion.classList.remove(active);    
     content.classList.add(active); //Открываем скрытый контент
     header.classList.remove(triangleClose); // Убираем белый смотрящий вверх триугольгик 
     header.classList.add(triangleOpen);// Добавляем белый смотрящий вниз треугольник
     }
     else {
        content.classList.add(active); //Открываем скрытый контент
        header.classList.remove(triangleClose); // Убираем белый смотрящий вверх триугольгик 
        header.classList.add(triangleOpen);// Добавляем белый смотрящий вниз треугольник            
     }
     
 }
 
 }