var menushop = {
    toggleBtnMenu: document.querySelector('.header_bottom-toggle'),
    toggleBtnShop: document.querySelector('.login-shop'),
    dropdownMenu: document.querySelector('.group-search-mobile'),
    priceShop: document.querySelector('.price-shop'),
    closeshop: document.querySelector('.shop-close'),
    init: function() {
        this.toggleMenu();
        this.toggleShop();
    },
    toggleMenu: function() {
        let that = this;
        this.toggleBtnMenu.addEventListener('click', function() {
            that.dropdownMenu.classList.toggle('active');
        })
    },
    toggleShop: function() {
        let that = this;
        this.toggleBtnShop.addEventListener('click', function() {
                that.priceShop.classList.toggle('active');
            }),
            this.closeshop.addEventListener('click', function() {
                that.priceShop.classList.remove('active')
            })
    }
}
menushop.init();



$(function() {
    // Owl Carousel
    var owl = $("#slide-carousel");
    owl.owlCarousel({
        items: 3,
        margin: 0,
        loop: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false
            },
            600: {
                items: 1,
                nav: false,
                dots: false
            },
            991: {
                items: 1,
                nav: false,
                loop: true,
                dots: false
            }
        }
    });
});

$(function() {
    // Owl Carousel
    var owl = $("#book-carousel");
    owl.owlCarousel({
        items: 5,
        margin: 30,
        loop: true,
        nav: true,
        navText: [
            '<img src="assets/ima/ima-icon-backbtnl.png " alt=" ">',
            '<img src="assets/ima/ima-icon-backbtnr.png " alt=" ">'
        ],
        navContainer: '.main-content .custom-nav',
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            768: {
                items: 4
            },
            1024: {
                items: 5
            }
        }
    });
});
$(function() {
    // Owl Carousel
    var owl = $("#book1-carousel");
    owl.owlCarousel({
        items: 5,
        margin: 30,
        loop: true,
        nav: true,
        navText: [
            '<img src="assets/ima/ima-icon-backbtnl.png " alt=" ">',
            '<img src="assets/ima/ima-icon-backbtnr.png " alt=" ">'
        ],
        navContainer: '.main-content .custom-navs',
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            768: {
                items: 4
            },
            1024: {
                items: 5
            }
        }
    });
});

var tabContent = {
    init: function() {
        this.activeTab('.main-menu', '.menu-tab', '.main-panel');

    },
    activeTab: function(idContainer, tabItem, tabContent) {
        console.log('activeTab', idContainer);
        let tabs = [...document.querySelectorAll(tabItem)],
            panels = [...document.querySelectorAll(tabContent)]
        document.querySelector(idContainer).addEventListener('click', e => {
            let compareTab = tabs.filter(tab => tab === e.target.parentElement) 
            if (e.target.parentElement === compareTab[0]) { 
                let i = tabs.indexOf(e.target.parentElement) 
                tabs.map(tab => tab.classList.remove('active'))
                tabs[i].classList.add('active')
                panels.map(panel => panel.classList.remove('active'))
                panels[i].classList.add('active')
            }
        })
    }
}
tabContent.init()