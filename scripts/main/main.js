const experienceSection = document.querySelector('.experience');
const evenIconOffer = [...document.querySelectorAll('.types .even')];
const oddIconOffer = [...document.querySelectorAll('.types .odd')];
const sectionOffer = document.querySelector('.offer')

// menubar with animations on scroll 
function MinimalizeMenuBar(menuContent,  menuContentUl, menuContentText, menuHeader, menuIcon, nameBar){
const items = [
  menuContent = document.querySelector('.menu-content'),
  menuContentUl = document.querySelector('.menu-content .wrapper ul'),
  menuContentText = document.querySelectorAll('.menu-content .wrapper ul li a'),
  menuHeader = document.querySelector('.header'),
  menuIcon = document.querySelector('.wrap'),
  nameBar = document.querySelector('.name'),
]


  if(scrollY > 0){
   items[3].classList.add('active');
    items[items.length-1].classList.add('active')
    items[items.length-2].classList.add('active');

    if(window.innerWidth >= 1024){
      items[0].classList.add('scroll');
    }

    if(window.innerWidth < 1024){
      items[0].classList.add('scrollMobile');
      items[1].classList.add('scrollMobile')

      items[2].forEach(a => {
        a.classList.add('scrollMobile')
      });
    }

  }else{
    items[0].classList.remove('active');
    items[0].classList.remove('scroll');
    items[0].classList.remove('scrollMobile');
    items[3].classList.remove('active');
    items[items.length-2].classList.remove('active');
    items[1].classList.remove('scrollMobile')
    items[2].forEach(a => {
      a.classList.remove('scrollMobile')
    });
  }
}
window.addEventListener('scroll', MinimalizeMenuBar)

// typing effect header 

setTimeout(() => {
  let i = 0;
  const speed = 10;
  const text = `Przy mnie każda impreza będzie niezapomniana! Dj-Dziadek`;
  
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
        experienceNumber.classList.add('active')
      }
    }
  }, 90);
}

const checksScrollPos = () => {
  if(window.scrollY >= window.innerHeight/3){
    updateCount();
    window.removeEventListener('scroll', checksScrollPos, false)
  }
}
window.addEventListener('scroll', checksScrollPos)






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
}
window.addEventListener('scroll', offerIconScrollAnimation)


// about Me button scroll animation
const AboutMeButton = $('.about-btn');
const moveToAboutMe = (e) => {
  e.preventDefault();
  $('body, html').animate({
    scrollTop: $('.about-me').offset().top
  }, 100)
}
AboutMeButton.click(moveToAboutMe);

// menu after click
// about me
const AboutMeMenuBtn = $('.menu-about-me');
AboutMeMenuBtn.click(moveToAboutMe)

// offer
const OfferMenuBtn = $('.menu-offer');
const moveToOffer = (e) => {
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $('.offer').offset().top - 50
  })
}
OfferMenuBtn.click(moveToOffer);


// gallery
const moveToGallery = (e) => {
  e.preventDefault();
  $('body, html').animate({
    scrollTop: $('.gallery').offset().top - 100
  }, 100)
}
const galleryMenuBtn =  $('.menu-gallery');
galleryMenuBtn.click(moveToGallery);


// contact (menu btn & icon)

const moveToContact = () => {
  $('html, body').animate({
    scrollTop: $('.contact').offset().top
  }, 100)
}
const contactMenuBtn = $('.menu-contact');
const contactIcon = $('.contact-icon');

contactMenuBtn.click(moveToContact);
contactIcon.click(moveToContact);


// back to top Animation
const heroeName = document.querySelector('.name');
const backToTop = () => {
   $('html, body').animate({
     scrollTop: $('.main-header').offset().top
   }, 200)
}
heroeName.addEventListener('click', backToTop)

// // photos in gallery animation
// const imageAnimation = (gallerySection, images) => {
//    gallerySection = document.querySelector('.gallery')
//     images = document.querySelectorAll('.photos .glightbox img');
//     if(window.scrollY > window.innerHeight + experienceSection.scrollHeight + sectionOffer.scrollHeight + gallerySection.scrollHeight / 1.2){
//       images.forEach(image => {
//         image.classList.add('active')
//       });
//     }else{
//       images.forEach(image => {
//         image.classList.remove('active')
//       });
//     }
// }
// window.addEventListener('scroll', imageAnimation)

// menu icon animation
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
// wrap
const menuIconWrap = document.querySelector('.wrap');
const MenuWrap = document.querySelector('.menu-content')
const MenuIconAnimation = (e) => {
  e.preventDefault();
  one.classList.toggle('active-menu')
  two.classList.toggle('active-menu')
  three.classList.toggle('active-menu')
  menuIconWrap.classList.toggle('active-menu')
  
  // open menu animation
  MenuWrap.classList.toggle('active');
  
}
menuIconWrap.addEventListener('click', MenuIconAnimation);

const checkOrientation = () => {
  if(window.innerWidth >= 1024 && window.screen.orientation.type === "landscape-primary"){
    MenuWrap.classList.add('active');
    menuIconWrap.classList.add('active');
    
  }else{
    MenuWrap.classList.remove('active');
    one.classList.remove('active-menu')
    two.classList.remove('active-menu')
    three.classList.remove('active-menu')
    menuIconWrap.classList.remove('active-menu')
  }
}
window.addEventListener('orientationchange', checkOrientation)











