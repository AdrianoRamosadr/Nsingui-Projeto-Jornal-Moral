

let cabeca = document.querySelector('header')



window.addEventListener('scroll', mudarCor)

function mudarCor(){
    if(window.pageYOffset > 0 && cabeca.classList.contains('cabecalho')){
        cabeca.classList.remove('cabecalho')
        cabeca.classList.add('mudar')
        
    }
    else if(window.pageYOffset == 0 && cabeca.classList.contains('mudar')){
        cabeca.classList.add('cabecalho')
        cabeca.classList.remove('mudar')
    }

   
}

// Seleciona todas as caixas que queremos animar
const paragrafo = document.querySelectorAll('.esconder');

// Função que verifica a posição de rolagem e aplica a classe 'aparecer'
function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.2; 
  // Calcula o ponto de disparo (80% da altura da janela)
  
  paragrafo.forEach(texto => {
    const subirTexto = texto.getBoundingClientRect().top;
    // Pega a posição atual da parte superior de cada caixa

    if (subirTexto < triggerBottom) {
      // Se a parte superior da caixa estiver acima do ponto de disparo, aplica a classe 'aparecer'
      texto.classList.add('aparecer');
    } else {
      // Caso contrário, remove a classe 'aparecer'
      texto.classList.remove('aparecer');
    }
  });
}

// Evento que verifica o scroll e chama a função 'checkBoxes'
window.addEventListener('scroll', checkBoxes);

// Chama a função 'checkBoxes' inicialmente para verificar a posição das caixas ao carregar a página
checkBoxes();

// window.addEventListener('scroll', ofuscar)

// function ofuscar(){
//     if(window.pageYOffset > 0 && cabeca.classList.contains('fusco')){
//         corpo.classList.remove('fusco')
//         corpo.classList.add('mostrar')
//     }
//     if(window.pageYOffset > 0 && cabeca.classList.contains('fusco')){
//     corpo.classList.add('fusco')
//         corpo.classList.remove('mostrar')
//     }
// }


const swiper = new Swiper('.slider-wrapper', {
  
    loop: true,
    grabCursor: true,
    spaceBetween: 12,
    width: 300,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
    
  });

//   const sms = document.querySelectorAll('.messagem')

//   window.addEventListener('click', dizerOla)

//   function dizerOla(){
    
//   }

function exibirMenu(){
  console.log('funcionou')

  let mostrar = document.querySelector('.expandir')

  mostrar.classList.toggle('exibir')
}

function Mudarmodos(){
  let corpo = document.querySelector('.light')
  let cab = document.querySelector('.cabecalho')
  let card = document.querySelector('.card-lista')
 
  cab.classList.toggle('dark')
  corpo.classList.toggle('dark')
  card.classList.toggle('dark')

}

