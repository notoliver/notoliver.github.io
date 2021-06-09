var num = document.getElementById('modal-content').getAttribute('num');
var captions=[{},
    {
        'title':'Waves',
        'source':'Life is Strange (2015)',
        'url':'https://live.staticflickr.com/65535/50208725541_eeec2537a2_o_d.png',
        'dimensions':'6000 x 4000'
    },
    {
        'title':'Two Whales',
        'source':'Life is Strange (2015)',
        'url':'https://live.staticflickr.com/65535/50208723096_a1cb251c8a_o_d.png',
        'dimensions':'4000 x 6000'
    },
    {
        'title':'Amber',
        'source':'Life is Strange: Before the Storm (2017)',
        'url':'https://live.staticflickr.com/65535/50581033398_d8d62c80f0_o_d.png',
        'dimensions':'4000 x 6000'
    },
    {
        'title':'Light',
        'source':'Life is Strange: Before the Storm (2017)',
        'url':'https://live.staticflickr.com/65535/50581759231_dc5f7dc943_o_d.png',
        'dimensions':'4000 x 6000'
    },
    {
        'title':'Movement',
        'source':'Life is Strange (2015)',
        'url':'https://live.staticflickr.com/65535/50208194153_f631335650_o_d.png',
        'dimensions':'7680 x 4320'
    },
    {
        'title':'R&R',
        'source':'Life is Strange 2 (2018)',
        'url':'https://live.staticflickr.com/65535/49979414851_7fff23fbfc_o_d.png',
        'dimensions':'6720 x 3780'
    },
    {
        'title':'Overlook',
        'source':'Tell Me Why (2020)',
        'url':'https://live.staticflickr.com/65535/50651196122_e299dd7cc5_o_d.png',
        'dimensions':'7680 x 4320'
    },
    {
        'title':'Lakeside',
        'source':'Tell Me Why (2020)',
        'url':'https://live.staticflickr.com/65535/50651202327_d483081a60_o_d.png',
        'dimensions':'7680 x 4320'
    },
    {
        'title':'Personnel',
        'source':'Tell Me Why (2020)',
        'url':'https://live.staticflickr.com/65535/50648494548_7484ca3fbe_o_d.png',
        'dimensions':'7680 x 4320'
    },
    {
        'title':'Parked',
        'source':'Tell Me Why (2020)',
        'url':'https://live.staticflickr.com/65535/50650362393_22cd196722_o_d.png',
        'dimensions':'7680 x 4320'
    },
    {
        'title':'Rocks',
        'source':'Life is Strange 2 (2018)',
        'url':'https://live.staticflickr.com/65535/49979414001_484d02f4b6_o_d.png',
        'dimensions':'7680 x 4320'
    },
    {
        'title':'Puerto Lobos',
        'source':'Life is Strange 2 (2018)',
        'url':'https://live.staticflickr.com/65535/49978892758_4c2a001d01_o_d.png',
        'dimensions':'7680 x 4320'
    },
    {
        'title':'Path',
        'source':'Life is Strange 2 (2018)',
        'url':'https://live.staticflickr.com/65535/49978895108_ca493d38dd_o_d.png',
        'dimensions':'11520 x 4216'
    }
    
];

var text ='';
for(var i=1;i<=num;i++){
    text+='<div class=\'mySlides\'>\r\n\t<img src=\''+i+'.jpg\' \/>\r\n\t<di'+
    'v class=\'overlay\'>\r\n\t\t<div class=\'nav left\' onclick=\'plusSlid'+
    'es(-1)\'><a class=\'prev\' >&#10094;<\/a><\/di'+
    'v>\r\n\t\t<div class=\'nav right\' onclick=\'plusSlides(1)\'><a clas'+
    's=\'next\' >&#10095;<\/a><\/div>\r\n\t<\/div>\r\n'+
    '<div class=\'caption\'>\r\n'+captions[i].title+' &nbsp| &nbsp'+captions[i].source+' &nbsp| &nbsp<a href=\''+captions[i].url+'\'>'+captions[i].dimensions+'<\/a>'+'<\/div>'
    +'<\/div>';
}
document.getElementById('modal-content').innerHTML = text;

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
var slideIndex = 1;
showSlides(slideIndex);
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
