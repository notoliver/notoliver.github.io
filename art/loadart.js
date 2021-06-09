var works = [
    {
        url: 'cutlass.gif',
        maxWidth: '500',
        caption: 'Sterling By Musicman Cutlass CT-50'
    },
    {
        url: 'compact.gif',
        maxWidth: '500',
        caption: 'Compact Muzak'
    },
    {
        url: 'yamahafg710s.gif',
        maxWidth: '500',
        caption: 'Yamaha FG710S'
    },
    {
        url: 'deluxedc.gif',
        maxWidth: '622',
        caption: 'D\'Angelico Deluxe DC'
    },
    {
        url: 'jbass.gif',
        maxWidth: '500',
        caption: 'Squier Vintage Modified Jazz Bass'
    },
    {
        url: 'tele.gif',
        maxWidth: '500',
        caption: 'Squier Classic Vibe Telecaster'
    }
]

var innertext = '';
/*
<figure>
    <img src="cutlass.gif" style="width:100%;max-width:500px;"/>
    <figcaption>Sterling By Musicman Cutlass CT-50</figcaption>	
</figure>
*/
for(var i=0;i<works.length;i++){
    innertext += '<figure>\r\n    <img data-src=\"'+works[i].url+'\" class=\'lazyload\' style=\"width:100%;max-width:'+works[i].maxWidth+'px;\"\/>\r\n    <figcaption>'+works[i].caption+'<\/figcaption>\t\r\n<\/figure>'
}

document.getElementById('works').innerHTML = innertext;