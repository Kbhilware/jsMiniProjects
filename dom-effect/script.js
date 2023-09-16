'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const tab = document.querySelectorAll('.operations__tab');
const tabCon = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.nav__logo');
const section1 = document.getElementById('section--1');
const header = document.querySelector('.header');
const allSection = document.querySelectorAll('section');


btnScrollTo.addEventListener('click', function () {
  const s1coor = section1.getBoundingClientRect();

  section1.scrollIntoView({ behavior: 'smooth' });
})

const hovrHandler = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    let sib = link.closest('.nav').querySelectorAll('.nav__link');
    sib.forEach(el => {
      if (el !== link) return el.style.opacity = this;
      logo.style.opacity = this;
    })
  }
}
nav.addEventListener('mouseover', hovrHandler.bind(0.5));
nav.addEventListener('mouseout', hovrHandler.bind(1))

const section1Cor = section1.getBoundingClientRect().top;

// document.querySelectorAll('.nav__link').forEach(function(el,i){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     const targetSection = document.querySelector(id);
//     console.log(targetSection);
//     targetSection.scrollIntoView({behavior: 'smooth'})
//   })
// })

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    const targetSection = document.querySelector(id);
    targetSection.scrollIntoView({ behavior: 'smooth' })
  }
})

// tab

tabCon.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  // remove active class
  tab.forEach(r => r.classList.remove('operations__tab--active'));
  const clickedBtn = clicked.dataset.tab;
  tabContent.forEach(r => r.classList.remove('operations__content--active'));
  // add active class
  clicked.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${clickedBtn}`).classList.add('operations__content--active');
})
const navHeight = nav.getBoundingClientRect().height;
const stikyHeader = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerOpitions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
}

const headerinter = new IntersectionObserver(stikyHeader, headerOpitions);
headerinter.observe(header);

const revealSection = function (entries, obs) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  obs.unobserve(entry.target)
}
const sectionObs = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})

allSection.forEach(el => {
  el.classList.add('section--hidden');
  sectionObs.observe(el);
})



//lazy load
const allImg = document.querySelectorAll('img[data-src]');

const lazyImg = function (el, obs) {
  const [entry] = el;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  // entry.target.setAttribute('src',getlazy);
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  })
  obs.unobserve(entry.target);
}

const imgInter = new IntersectionObserver(lazyImg, {
  root: null,
  threshold: 0.15
});

allImg.forEach(el => imgInter.observe(el))


//slider
const sliderBase =  function(){
  const allSlide = document.querySelectorAll('.slide');
  const slideLeft = document.querySelector('.slider__btn--left');
  const slideRight = document.querySelector('.slider__btn--right');
  const dotsSlector = document.querySelector('.dots');
  let slideCount = 0;
  let maxSlideLen = allSlide.length;
  const addDot = function(){
    allSlide.forEach(function(_, i){
    dotsSlector.insertAdjacentHTML('beforeend',`<button class="dots__dot" data-slide="${i}"></button>`);
    });
  }
  addDot();


// dots__dot--active
dotsSlector.addEventListener('click',function(e){
  if(!e.target.classList.contains('dots__dot')) return;
  slideCount = e.target.dataset.slide;
  goToSlide(slideCount);
  activeDot(slideCount);
})
 
const activeDot = function(slide){
  document.querySelectorAll('.dots__dot').forEach(e => e.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}
  
const goToSlide = function (slideCount) {
  allSlide.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - slideCount)}%)`;
  })
}

goToSlide(slideCount);
activeDot(slideCount);
const nxtSlide = function () {
  if (slideCount === maxSlideLen - 1) slideCount = 0; else slideCount++;
  goToSlide(slideCount);
  activeDot(slideCount);
}
const prevSlide = function () {
  if (slideCount === 0) slideCount = maxSlideLen - 1; else slideCount--;
  goToSlide(slideCount);
  activeDot(slideCount);
}

slideLeft.addEventListener('click', prevSlide);
slideRight.addEventListener('click', nxtSlide);

document.addEventListener('keydown',function(e){
  e.key === "ArrowRight" && nxtSlide();
  e.key === "ArrowLeft" && prevSlide();
  activeDot(slideCount);
})

}
sliderBase();


var createCounter = function(n, i) {
    let x = n -1;
    return function() {
    // .instance
        x++
        console.log(x);
    };
};

 const counter = createCounter(-2);
counter();
counter();
counter();
counter();
counter();
counter();

var checkIfInstanceOf = function(obj, classFunction) {
  // console.log(obj, classFunction);
    if(classFunction === String || classFunction === Number || classFunction === BigInt){
      console.log('if');
      let x = obj instanceof classFunction;
      return !x
    }
    else{
    console.log('else');
      return console.log(obj instanceof classFunction);
    }
};
checkIfInstanceOf(5n, Object);
checkIfInstanceOf(5n, BigInt)
/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
 
 

// const obsCallback = function(entries,observe){
//     entries.forEach(entry => {
//       console.log(entry);
//     })
// }

// const obsOpitions = {
//   root:null,
//   threshold : 0.1
// }

// const observer = new IntersectionObserver(obsCallback,obsOpitions);

// observer.observe(section1)




// const h1 = document.querySelector('h1');
// console.log(h1.children);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);
// console.log(h1.parentElement);
// console.log(h1.parentNode);
// h1.closest('.header').style.backgroundColor = 'red';
// console.log(h1.nextElementSibling.nextElementSibling);
// console.log(h1.previousElementSibling);
// console.log(...h1.parentElement.children);

// console.log(document.getElementsByTagName('button'));
// console.log(document.getElementsByClassName('btn'));

// const message = document.createElement('div')
// message.classList.add('cookie-message');
// message.textContent = "hey";
// message.innerHTML = "hey <button class='btn karan'>Hello</button>"

// document.querySelector('header').prepend(message)
// document.querySelector('header').append(message.cloneNode(true))
// document.querySelector('header').before(message)
// document.querySelector('header').after(message.cloneNode(true))
// document.querySelector('.karan').addEventListener('click',function(){
//   message.remove();
// })
// console.log(getComputedStyle(message).color);
// console.log(Number.parseFloat(getComputedStyle(message).height));
// message.style.color = 'red'
// message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 40 +'px'; 
// const logo = document.querySelector('.nav__logo');
// logo.alt = "karan"
// console.log(logo.src);
// console.log(logo.className);
// console.log(logo.getAttribute('class'),'==');
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// const t = document.querySelector('.twitter-link');
// console.log(t.href);
// t.setAttribute('href','www.google.com')
// console.log(t.href);

// console.log(logo.dataset.logo);

// document.addEventListener('DOMContentLoaded',function(){
//   console.log('Html Paresd');
// })
// window.addEventListener('load',function(e){
//   console.log('page fully loaded',e);
// })
// window.addEventListener('beforeunload',function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = 'message';
// })