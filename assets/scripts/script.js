new Swiper('.projects_sw', {
  spaceBetween: 24,
  slidesPerView: 'auto',
  slideToClickedSlide: false,
  navigation: {
    nextEl: '.projects_sw .swiper-button-next',
    prevEl: '.projects_sw .swiper-button-prev',
  },
});
new Swiper('.first_sw', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.first_sw .swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.first_sw .swiper-button-next',
    prevEl: '.first_sw .swiper-button-prev',
  },
});


new Swiper('.img_in_swiper', {
  nested: true,
  grabCursor: true,
  pagination: {
    el: '.img_in_swiper .swiper-pagination',
    clickable: true
  }
})



// class ItcTabs {

//   constructor(target, customTabClass, config) {
//     const defaultConfig = {};
//     this._config = Object.assign(defaultConfig, config);
//     this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
//     this._elButtons = this._elTabs.querySelectorAll(customTabClass);
//     this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
//     this._eventShow = new Event('tab.itc.change');
//     this._init();
//     this._events();
//   }

//   _init() {
//     this._elTabs.setAttribute('role', 'tablist');
//     this._elButtons.forEach((el, index) => {
//       el.dataset.index = index;
//       el.setAttribute('role', 'tab');
//       this._elPanes[index].setAttribute('role', 'tabpanel');
//     });
//   }

//   show(elLinkTarget) {
//     const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
//     const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
//     const elPaneShow = this._elTabs.querySelector('.tabs__pane_active');

//     if (elLinkTarget === elLinkActive) {
//       return;
//     }

//     elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
//     elPaneShow ? elPaneShow.classList.remove('tabs__pane_active') : null;
//     elLinkTarget.classList.add('tabs__btn_active');
//     elPaneTarget.classList.add('tabs__pane_active');
//     this._elTabs.dispatchEvent(this._eventShow);
//     elLinkTarget.focus();

//   }

//   showByIndex(index) {
//     const elLinkTarget = this._elButtons[index];
//     elLinkTarget ? this.show(elLinkTarget): null;
//   };

//   _events() {
//     this._elTabs.addEventListener('click', (e) => {
//       const target = e.target.closest('.tabs__btn');
//       if (target) {
//         e.preventDefault();
//         this.show(target);
//       }
//     });

//   }
// }


// new ItcTabs('.tabs', '.tabs__btn-js-1');
// new ItcTabs('.gabs', '.tabs__btn-js-2');

// new ItcTabs('.rabs', '.tabs__btn');



function generateTabs(tabClass, tabBtnClass, tabPaneClass) {
  let customTabs = document.querySelector(tabClass);
  let customTabsBtns = customTabs.querySelectorAll(tabBtnClass);
  let customTabsPanes = customTabs.querySelectorAll(tabPaneClass);

  customTabsBtns.forEach((tabBtn, btnIndex) => {
    tabBtn.setAttribute('data-btn-counter', btnIndex);

    tabBtn.addEventListener('click', function () {
      let btnCounter = this.getAttribute('data-btn-counter');

      customTabsBtns.forEach(item => {
        item.classList.remove('tabs__btn_active');
      })

      this.classList.add('tabs__btn_active');

      customTabsPanes.forEach((tabPane, paneIndex) => {
        tabPane.setAttribute('data-pane-counter', paneIndex);
        tabPane.classList.remove('tabs__pane_active');
        if (btnCounter == paneIndex) {
          tabPane.classList.add('tabs__pane_active');
        }
      })
    })
  })
}

generateTabs('.tabs', '.tabs__btn-js-1', '.tabs__pane-js-1');
generateTabs('.gabs', '.tabs__btn-js-2', '.tabs__pane-js-2');
generateTabs('.rabs', '.tabs__btn-js-3', '.tabs__pane-js-3');

generateTabs('.mabs', '.tabs__btn-js-4', '.tabs__pane-js-4');
generateTabs('.labs', '.tabs__btn-js-5', '.tabs__pane-js-5');



console.log('tabs__btn-js-3', document.querySelectorAll('.tabs__btn-js-3'));
console.log('tabs__btn-js-4', document.querySelectorAll('.tabs__btn-js-4'));

//Вызов модалки
function showZapis(el) {
      //Открываем модалку
      $('body').addClass('showZapis');
}
$(document).ready(function(){
  $('.header_burger').click(function(event){
    $('.header_burger, .header_bx_list').toggleClass('active')
  })
})

window.onscroll=function(){myFunction()};
var header=document.getElementById('myHeader');
var bx_list_item=document.querySelectorAll('.bx_list_item>a , .header_phone_link, .header_wh_logo');
var sticky=header.offsetTop;
function myFunction(){
  let bx_logo=document.querySelector('.header_bx_logo');
    if(window.pageYOffset>sticky){
      bx_list_item.forEach((el)=> {
        bx_logo.classList.add('active')
            el.classList.add('active');
        })
        header.classList.add("sticky");
    }else {
      bx_list_item.forEach((el)=> {
        el.classList.remove('active');
        bx_logo.classList.remove('active')
      })
        header.classList.remove("sticky");
    }
}

let dn=document.querySelector('.dn');