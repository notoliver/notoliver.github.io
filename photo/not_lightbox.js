var captions=[{},
    {
        image: '1.jpg',
        title:'Waves',
        source:'Life is Strange (2015)',
        url:'https://live.staticflickr.com/65535/50208725541_eeec2537a2_o_d.png',
        dimensions:'6000 x 4000'
    },
    {
        image: '2.jpg',
        title:'Two Whales',
        source:'Life is Strange (2015)',
        url:'https://live.staticflickr.com/65535/50208723096_a1cb251c8a_o_d.png',
        dimensions:'4000 x 6000'
    },
    {
        image: '3.jpg',
        title:'Amber',
        source:'Life is Strange: Before the Storm (2017)',
        url:'https://live.staticflickr.com/65535/50581033398_d8d62c80f0_o_d.png',
        dimensions:'4000 x 6000'
    },
    {
        image: '4.jpg',
        title:'Light',
        source:'Life is Strange: Before the Storm (2017)',
        url:'https://live.staticflickr.com/65535/50581759231_dc5f7dc943_o_d.png',
        dimensions:'4000 x 6000'
    },
    {
        image: '5.jpg',
        title:'Movement',
        source:'Life is Strange (2015)',
        url:'https://live.staticflickr.com/65535/50208194153_f631335650_o_d.png',
        dimensions:'7680 x 4320'
    },
    {
        image: '6.jpg',
        title:'R&R',
        source:'Life is Strange 2 (2018)',
        url:'https://live.staticflickr.com/65535/49979414851_7fff23fbfc_o_d.png',
        dimensions:'6720 x 3780'
    },
    {
        image: '7.jpg',
        title:'Overlook',
        source:'Tell Me Why (2020)',
        url:'https://live.staticflickr.com/65535/50651196122_e299dd7cc5_o_d.png',
        dimensions:'7680 x 4320'
    },
    {
        image: '8.jpg',
        title:'Lakeside',
        source:'Tell Me Why (2020)',
        url:'https://live.staticflickr.com/65535/50651202327_d483081a60_o_d.png',
        dimensions:'7680 x 4320'
    },
    {
        image: '9.jpg',
        title:'Personnel',
        source:'Tell Me Why (2020)',
        url:'https://live.staticflickr.com/65535/50648494548_7484ca3fbe_o_d.png',
        dimensions:'7680 x 4320'
    },
    {
        image: '10.jpg',
        title:'Parked',
        source:'Tell Me Why (2020)',
        url:'https://live.staticflickr.com/65535/50650362393_22cd196722_o_d.png',
        dimensions:'7680 x 4320'
    },
    {
        image: '11.jpg',
        title:'Rocks',
        source:'Life is Strange 2 (2018)',
        url:'https://live.staticflickr.com/65535/49979414001_484d02f4b6_o_d.png',
        dimensions:'7680 x 4320'
    },
    {
        image: '12.jpg',
        title:'Puerto Lobos',
        source:'Life is Strange 2 (2018)',
        url:'https://live.staticflickr.com/65535/49978892758_4c2a001d01_o_d.png',
        dimensions:'7680 x 4320'
    },
    {
        image: '13.jpg',
        title:'Path',
        source:'Life is Strange 2 (2018)',
        url:'https://live.staticflickr.com/65535/49978895108_ca493d38dd_o_d.png',
        dimensions:'11520 x 4216'
    }
];

/* #region lightbox output */
var text ='<span class=\'close cursor\' onclick=\'closeModal()\'>&times;<\/span><div id=\'modal-content\' class=\'modal-content\'>';

for(var i=1;i<captions.length;i++){
    text+='<div class=\'mySlides\'>'
    text+='<img src=\''+captions[i].image+'\' \/>'
    text+='<div class=\'overlay\'>'
        text+='<div class=\'nav left\' onclick=\'plusSlides(-1)\'>'
            text+='<a class=\'prev\' >&#10094;<\/a><\/div>'
        text+='<div class=\'nav right\' onclick=\'plusSlides(1)\'>'
            text+='<a class=\'next\' >&#10095;<\/a><\/div>'
    text+='<\/div><div class=\'caption\'>'+captions[i].title+' &nbsp| &nbsp'+captions[i].source+' &nbsp| &nbsp<a href=\''+captions[i].url+'\'>'+captions[i].dimensions+'<\/a>'+'<\/div>'
    text+='<\/div>';   
}

text+='<\/div>'
document.getElementById('myModal').innerHTML = text;
/* #endregion */

/* #region functions */
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
}
/* #endregion */

/* #region open close */
$('body').on('click', function(event) {
    closeModal();
});

$('div.wrapper, div.mySlides').on('click', function(event) {
    event.stopPropagation();
});

document.addEventListener('keydown', function(event) {
    const key = event.key; // Or const {key} = event; in ES6+
    if (key === 'Escape') {
        closeModal();
    }
    if (key === 'ArrowLeft') {
        plusSlides(-1);
    }
    if (key === 'ArrowRight') {
        plusSlides(1);
    }
});
/* #endregion */