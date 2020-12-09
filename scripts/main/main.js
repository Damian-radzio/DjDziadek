// menubar with animations on scroll 
const nameBar = document.querySelector('.name');
const menuIcon = document.querySelector('.wrap');
const menuWrap = document.querySelector('.header');
const menuContent = document.querySelector('.menu-content');
const menuContentUl = document.querySelector('.menu-content .wrapper ul');
const menuContentText = document.querySelectorAll('.menu-content .wrapper ul li a');
function MinimalizeMenuBar(){
  if(scrollY > 0){
    menuWrap.classList.add('active');
    nameBar.classList.add('active')
    menuIcon.classList.add('active');
    if(window.innerWidth >= 1024){
      menuContent.classList.add('scroll');
    }
    if(window.innerWidth < 1024){
      menuContent.classList.add('scrollMobile');
      menuContentUl.classList.add('scrollMobile')
      menuContentText.forEach(a => {
        a.classList.add('scrollMobile')
      });
    }
  }else{
    menuWrap.classList.remove('active');
    nameBar.classList.remove('active');
    menuIcon.classList.remove('active');
    menuContent.classList.remove('scroll');
    menuContent.classList.remove('scrollMobile');
    menuContentUl.classList.remove('scrollMobile')
    menuContentText.forEach(a => {
      a.classList.remove('scrollMobile')
    });
  }
}
window.addEventListener('scroll', MinimalizeMenuBar)

// typing effect header 
setTimeout(() => {
  const text = "Przy mnie każda impreza będzie niezapomniana! Dj Dziadek"
let i = 0;
let speed = 30;
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
}, 500);





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


// about me blur animation
const experienceSection = document.querySelector('.experience');


const evenIconOffer = [...document.querySelectorAll('.types .even')];
const oddIconOffer = [...document.querySelectorAll('.types .odd')];
const sectionOffer = document.querySelector('.offer')
let time = 300;
const offerIconScrollAnimation = () => {
  if(window.scrollY > window.innerHeight + experienceSection.scrollHeight + sectionOffer.scrollHeight / 1.2){
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
    scrollTop: $('.about-me').offset().top + 100
  }, 400)
}

AboutMeButton.click(moveToAboutMe);
const AboutMeMenuBtn = $('.wrapper .about-me');
AboutMeMenuBtn.click(moveToAboutMe)



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

// back to top Animation
const heroeName = document.querySelector('.name');
const backToTop = () => {
   $('html, body').animate({
     scrollTop: $('.main-header').offset().top
   }, 200)
}
heroeName.addEventListener('click', backToTop)









