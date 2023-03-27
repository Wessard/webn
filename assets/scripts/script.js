new Swiper('.projects_sw', {
  spaceBetween: 24,
  slidesPerView: 'auto',
  slideToClickedSlide: false,
  // If we need pagination
  // pagination: {
  //   el: '.projects_sw .swiper-pagination',
  //   clickable:true
  // },
  // Navigation arrows
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



class ItcTabs {

  constructor(target, customTabClass, config) {
    const defaultConfig = {};
    this._config = Object.assign(defaultConfig, config);
    this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
    this._elButtons = this._elTabs.querySelectorAll(customTabClass);
    this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
    this._eventShow = new Event('tab.itc.change');
    this._init();
    this._events();
  }

  _init() {
    this._elTabs.setAttribute('role', 'tablist');
    this._elButtons.forEach((el, index) => {
      el.dataset.index = index;
      el.setAttribute('role', 'tab');
      this._elPanes[index].setAttribute('role', 'tabpanel');
    });
  }

  show(elLinkTarget) {
    const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
    const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
    const elPaneShow = this._elTabs.querySelector('.tabs__pane_active');

    if (elLinkTarget === elLinkActive) {
      return;
    }

    elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
    elPaneShow ? elPaneShow.classList.remove('tabs__pane_active') : null;
    elLinkTarget.classList.add('tabs__btn_active');
    elPaneTarget.classList.add('tabs__pane_active');
    this._elTabs.dispatchEvent(this._eventShow);
    elLinkTarget.focus();

  }

  showByIndex(index) {
    const elLinkTarget = this._elButtons[index];
    elLinkTarget ? this.show(elLinkTarget) : null;
  };

  _events() {
    this._elTabs.addEventListener('click', (e) => {
      const target = e.target.closest('.tabs__btn');
      if (target) {
        e.preventDefault();
        this.show(target);
      }
    });

  }
}


new ItcTabs('.tabs', '.tabs__btn-js-1');
new ItcTabs('.gabs', '.tabs__btn-js-2');

new ItcTabs('.rabs', '.tabs__btn');
