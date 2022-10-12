// Custom Scripts
const swiper = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,

    // autoplay: {
    //     delay: 4000,
    // },

    // If we need pagination
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.hero-btn-next',
      prevEl: '.hero-btn-prev',
    },


    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
    },
    // when window width is >= 480px
    480: {
    },
  }
});

const swiperReview = new Swiper('.review__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
});

const swiperClients = new Swiper('.clients__swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    700: {
        slidesPerView: 3,
        spaceBetween: 30
    },

    992: {
        slidesPerView: 2,
        spaceBetween: 30
    },

    1400: {
        slidesPerView: 3,
        spaceBetween: 30
    },
  }
});

const swiperLicense = new Swiper('.license__swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
    
        700: {
            slidesPerView: 4,
            spaceBetween: 30
        },
    
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    
        1400: {
            slidesPerView: 4,
            spaceBetween: 30
        },

    }


});


const swiperDocReview = new Swiper('.doc-review__swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
});


const swiperLizing = new Swiper('.lizing__swiper', {
    slidesPerView: 1,
    spaceBetween: 70,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
});


// Product Swiper

const swiper1 = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 4,
          spaceBetween: 20
        },

        720: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    }
});

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    thumbs: {
        swiper: swiper1,
    },

    breakpoints: {

    }

});


// TABS

const swiperTabs = new Swiper(".tabs__swiper", {
    // slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
    
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
        },
        
        730: {
            slidesPerView: 3,
        },

        1000: {
            slidesPerView: 3,
        },
        
        1200: {
            slidesPerView: 5,
        },
    }
});
// Аккордеон
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach(child => child.classList.remove('accordion__item-active'))   
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
accordion() 
// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  menu.addEventListener("click", (event) => {
    if(event.target){
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)




// TABS 

function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector)
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }
    function showTabContent(i = 0) {
       content[i].style.display = display
       tab[i].classList.add(activeClass)
    }
    hideTabContent()
    showTabContent()
    header.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains(tabSelector.replace(/\./, '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if ( target == item || target.parentNode == item ) {
                    hideTabContent()
                    showTabContent(i)
                }
            });
        }
    })
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active')
const getTemplate = (data = [], placeholder, selectedId) => {
    let text = placeholder ?? 'placeholder не указан'

    const items = data.map(item => {
        let cls = ''
        if (item.id === selectedId) {
            text = item.value
            cls = 'selected'
        }
        return `
            <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
        `
    })
    return `
        <input type="hidden" class="hidden__input">
        <div class="select__backdrop" data-type="backdrop"></div>
        <div class="select__input" data-type="input">
            <span data-type="value">${text}</span>
            <img src="./img/down-arrow.png" alt="arrow" data-type="arrow" class="select__arrow">
        </div>
        <div class="select__dropdown">
            <ul class="select__list">
                ${items.join('')}
            </ul>
        </div>
    `
}
class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.options = options
        this.selectedId = options.selectedId

        this.render()
        this.setup()
    }

    render() {
        const { placeholder, data } = this.options
        this.$el.classList.add('select')
        this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
    }
    setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.$el.addEventListener('click', this.clickHandler)
        this.$arrow = this.$el.querySelector('[data-type="arrow"]')
        this.$value = this.$el.querySelector('[data-type="value"]')
    }

    clickHandler(event) {
        const { type } = event.target.dataset
        if (type === 'input') {
            this.toggle()
        } else if (type === 'item') {
            const id = event.target.dataset.id
            this.select(id)
        }  else if (type === 'backdrop') {
            this.close()
        }
    }

    get isOpen() {
        return this.$el.classList.contains('open')
    }

    get current() {
        return this.options.data.find(item => item.id === this.selectedId)
    }

    select(id) {
        this.selectedId = id
        this.$value.textContent = this.current.value

        this.$el.querySelectorAll(`[data-type="item"]`).forEach( el => el.classList.remove('selected'))
        this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')

        this.options.onSelect ? this.options.onSelect(this.current) : null
        this.close()
    }

    toggle() {
        this.isOpen ? this.close() : this.open()
    }

    open() {
        this.$el.classList.add('open')
        this.$arrow.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
        this.$arrow.classList.remove('open')
    }

    destroy() {
        this.$el.removeEventListener('click', this.clickHandler)
        this.$el.innerHTML = ''
    }
}


// Инициализация плагина
const select = new Select('#select', {
    placeholder: 'Выберите элемент',
    selectedId: '1',
    data: [
        {id: '1', value: 'RU'},
        {id: '2', value: 'EN'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})

const selectTwo = new Select('#selectTwo', {
    placeholder: 'Выберите элемент',
    selectedId: '1',
    data: [
        {id: '1', value: 'RU'},
        {id: '2', value: 'EN'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})

const selectSort = new Select('#selectSort', {
    placeholder: 'Выберите элемент',
    selectedId: '1',
    data: [
        {id: '1', value: 'по алфавиту (а-я, a-z)'},
        {id: '2', value: 'по алфавиту (а-я, a-z)'},
        {id: '3', value: 'по алфавиту (а-я, a-z)'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})

const selectMark = new Select('#selectMark', {
    placeholder: 'Выберите элемент',
    selectedId: '1',
    data: [
        {id: '1', value: 'все'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})

const selectCountry = new Select('#selectCountry', {
    placeholder: 'Выберите элемент',
    selectedId: '1',
    data: [
        {id: '1', value: 'германия'},
        {id: '2', value: 'корея'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})




