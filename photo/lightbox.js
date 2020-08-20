var num = document.getElementById('modal-content').getAttribute('num');
var captions=[{},
    {
        'title':'Wolves',
        'source':'Life is Strange 2 (2018)',
        'url':'https://live.staticflickr.com/65535/49978904703_15be04f6c8_o_d.png',
        'dimensions':'4663 x 7560'
    },
    {
        'title':'Formation',
        'source':'Star Wars Battlefront 2 (2017)',
        'url':'https://live.staticflickr.com/65535/49987159906_7ce1d87557_o_d.png',
        'dimensions':'4000 x 6000'
    },
    {
        'title':'Two Whales',
        'source':'Life is Strange (2015)',
        'url':'https://live.staticflickr.com/65535/50208723096_a1cb251c8a_o_d.png',
        'dimensions':'4000 x 6000'
    },
    {
        'title':'Frost',
        'source':'Red Dead Redemption 2 (2018)',
        'url':'https://live.staticflickr.com/65535/49978948468_eaacdba8b5_o_d.png',
        'dimensions':'3000 x 3000'
    },
    {
        'title':'HOTEL',
        'source':'Mirror\'s Edge Catalyst (2016)',
        'url':'https://live.staticflickr.com/65535/49979490611_b0ae95b624_o_d.png',
        'dimensions':'5000 x 5000'
    },
    {
        'title':'Goliath',
        'source':'Star Wars Battlefront 2 (2017)',
        'url':'https://live.staticflickr.com/65535/49978923748_db87881fa7_o_d.png',
        'dimensions':'4000 x 6000'
    },
    {
        'title':'Vigil',
        'source':'Shadow of the Tomb Raider',
        'url':'https://live.staticflickr.com/65535/50194370822_f3b7722cb4_o_d.png',
        'dimensions':'6480 x 6480'
    },
    {
        'title':'Figure',
        'source':'Life is Strange (2015)',
        'url':'https://live.staticflickr.com/65535/50208193863_7b082ca3a7_o_d.png',
        'dimensions':'7680 x 4320'
    },
    {
        'title':'Growth',
        'source':'A Plague Tale: Innocence (2019)',
        'url':'https://live.staticflickr.com/65535/50080882441_5ab727352b_o_d.png',
        'dimensions':'5399 x 5399'
    },
    {
        'title':'Max',
        'source':'Life is Strange (2015)',
        'url':'https://live.staticflickr.com/65535/50208194728_c4c8a8b995_o_d.png',
        'dimensions':'4000 x 6000'
    },
    {
        'title':'Thorofare',
        'source':'Firewatch (2016)',
        'url':'https://live.staticflickr.com/65535/50076499753_30b70835ea_o_d.png',
        'dimensions':'4000 x 6000'
    },
    {
        'title':'Second Sister',
        'source':'Star Wars Jedi: Fallen Order (2019)',
        'url':'https://live.staticflickr.com/65535/50178153991_09ff20d6dc_o_d.png',
        'dimensions':'3420 x 5130'
    },
    {
        'title':'WMD',
        'source':'Kingdom Come: Deliverance (2018)',
        'url':'https://live.staticflickr.com/65535/49978962168_6267a7a810_o_d.png',
        'dimensions':'4000 x 4000'
    },
    {
        'title':'R&R',
        'source':'Life is Strange 2 (2018)',
        'url':'https://live.staticflickr.com/65535/49979414851_7fff23fbfc_o_d.png',
        'dimensions':'6780 x 3780'
    },
    {
        'title':'Stream',
        'source':'Red Dead Redemption 2 (2018)',
        'url':'https://live.staticflickr.com/65535/50208951232_5e511dee2d_o_d.png',
        'dimensions':'2000 x 4000'
    },
    {
        'title':'Puerto Lobos',
        'source':'Life is Strange 2 (2018)',
        'url':'https://live.staticflickr.com/65535/49978892758_4c2a001d01_o_d.png',
        'dimensions':'7680 x 4320'
    }
];

var text ='';
for(var i=1;i<=num;i++){
    text+='<div class=\'mySlides\'>\r\n\t<img src=\''+i+'.jpg\'\/>\r\n\t<di'+
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
