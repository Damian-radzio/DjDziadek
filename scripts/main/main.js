const experienceSection = document.querySelector('.experience');
const evenIconOffer = [...document.querySelectorAll('.types .even')];
const oddIconOffer = [...document.querySelectorAll('.types .odd')];
const sectionOffer = document.querySelector('#offer');

const iconLines = [
  one = document.querySelector('.one'),
  two = document.querySelector('.two'),
  three = document.querySelector('.three'),
];

    // typing effect header 
   setTimeout(() => {
      let i = 0;
        const speed = 10;
        const text = `Przy mnie każda impreza będzie niezapomniana!`;
        
        (function TypeWriter(){
          if(i< text.length){
            const textHeader = document.querySelector('.about-intro .text-intro')
            textHeader.innerHTML += text.charAt(i);
            i++;
            
            setTimeout(TypeWriter, speed);
            if(textHeader.textContent === text){
              const buttonHeader = document.querySelector('.about-btn');
              buttonHeader.classList.add('visible');
            }
          }
        })();
      }, 300);
// menubar with animations on scroll 
function MinimalizeMenuBar(menuContent,  menuContentUl, menuContentText, menuHeader, menuIcon, headerName){

const items = [
  menuContent = document.querySelector('.menu-content'),
  menuContentUl = document.querySelector('.menu-content .wrapper ul'),
  menuContentText = document.querySelectorAll('.menu-content .wrapper ul li a'),
  menuHeader = document.querySelector('.header'),
  menuIcon = document.querySelector('.wrap'),
  headerName = document.querySelector('.name'),
]


  if(scrollY > 0){
   items[3].classList.add('active');
    headerName.classList.add('active');
    items[items.length-2].classList.add('active');

    if(window.innerWidth >= 1024){
      items[0].classList.add('scroll');
    }

    if(window.innerWidth < 1024){
      items[0].classList.add('scrollMobile');
      items[1].classList.add('scrollMobile');

      items[2].forEach(a => {
        a.classList.add('scrollMobile');
      });
    }

  }else{
    items[items.length-1].classList.remove('active');
    items[0].classList.remove('active');
    items[0].classList.remove('scroll');
    items[0].classList.remove('scrollMobile');
    items[3].classList.remove('active');
    items[items.length-2].classList.remove('active');
    items[items.length-2].classList.remove('active-menu');

    iconLines[0].classList.remove('active-menu');
    iconLines[1].classList.remove('active-menu');
    iconLines[2].classList.remove('active-menu');
    items[1].classList.remove('scrollMobile');
    items[2].forEach(a => {
      a.classList.remove('scrollMobile');
    });
  }
}



// experience counter
const experienceNumber = document.querySelector('.experience-number');
const updateCount = () => {
  let value = 7;
  let i = 0;
  setInterval(() => {
    experienceNumber.textContent = i;
    if(i<value){
      i++;
      if(i === 3){
        experienceNumber.classList.add('active');;
      }
    }
  }, 60);
}

const checksScrollPos = () => {
  if(window.scrollY >= window.innerHeight/3){
    updateCount();
    window.removeEventListener('scroll', checksScrollPos, false);
  }
}


let time = 100;
const offerIconScrollAnimation = () => {
  if(window.scrollY > window.innerHeight + experienceSection.scrollHeight + sectionOffer.scrollHeight / 2){
    setInterval(() => {
      oddIconOffer[0].classList.add('active');
      setInterval(() => {
        evenIconOffer[0].classList.add('active');
        setInterval(() => {
          oddIconOffer[1].classList.add('active');
          setInterval(() => {
            evenIconOffer[1].classList.add('active');
          }, time);
        }, time);
      }, time);
    }, time);
  } 
   if (window.scrollY > window.innerHeight + experienceSection.scrollHeight + sectionOffer.scrollHeight + 500){
    window.removeEventListener('scroll', offerIconScrollAnimation, false);
  }
}


const hideMenu = () => {
    MenuWrap.classList.remove('active');
  one.classList.remove('active-menu');
  two.classList.remove('active-menu');
  three.classList.remove('active-menu');
  menuIconWrap.classList.remove('active-menu');
}
const menuLinks = [...document.querySelectorAll('.wrapper ul li a')];
menuLinks.forEach(a => {
  a.addEventListener('click', hideMenu);
});

// equipment section
const showMoreIcons = [...document.querySelectorAll('.fa-caret-down')];
function checkIcon(){
  this.parentNode.classList.toggle('active');
    this.parentNode.childNodes[3].classList.toggle('active')
    this.classList.toggle('active');
}

let mql = window.matchMedia('(orientation: landscape)');
// photos in gallery animation
const imageAnimation = (gallerySection, images, equipSection ) => {
  gallerySection = document.querySelector('#gallery');
  images = document.querySelectorAll('.photos .glightbox img');
  equipSection = document.querySelector('#equip');
    if(window.scrollY > window.innerHeight + experienceSection.scrollHeight + sectionOffer.scrollHeight + equipSection.scrollHeight + gallerySection.scrollHeight / 1.3 && !mql.matches){
      images.forEach(image => {
        image.classList.add('active');
      });
    }else if(mql.matches && window.scrollY > window.innerHeight + experienceSection.scrollHeight + sectionOffer.scrollHeight + equipSection.scrollHeight + gallerySection.scrollHeight / 3){
      images.forEach(image => {
        image.classList.add('active');
      });
    } 
    else{
      images.forEach(image => {
        image.classList.remove('active');
      });
    }
  }
  
  // menu icon animation


// wrap
const menuIconWrap = document.querySelector('.wrap');
const MenuWrap = document.querySelector('.menu-content');
const MenuIconAnimation = (e) => {
  e.preventDefault();
  iconLines[0].classList.toggle('active-menu');
  iconLines[1].classList.toggle('active-menu');
  iconLines[2].classList.toggle('active-menu');
  
  menuIconWrap.classList.toggle('active-menu')
  // open menu animation
  MenuWrap.classList.toggle('active');
  
}

const checkOrientation = () => {
  if(window.innerWidth >= 1024 && !mql.matches){
    MenuWrap.classList.add('active');
    menuIconWrap.classList.add('active');
  }else{
    hideMenu();
  }
}


window.addEventListener('scroll', MinimalizeMenuBar);
window.addEventListener('scroll', checksScrollPos);
window.addEventListener('scroll', offerIconScrollAnimation);
window.addEventListener('scroll', imageAnimation);

menuIconWrap.addEventListener('click', MenuIconAnimation);

window.addEventListener('orientationchange', checkOrientation);

showMoreIcons.forEach(icon => {
icon.addEventListener('click', checkIcon);
})

  






  
  
  
  
  
  
  
  
  
  
  