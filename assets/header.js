var level = document.getElementById("header").getAttribute("level");
var active = document.getElementById("header").getAttribute("active");
var path =""

if(level==0){
    //no change
}
if(level==1){
    path="../"
}
if(level==2){
    path="../../"
}

//class=\"active\"
//console.log(path);

var text ="<a href=\""+path+"\"><img src=\""+path+"assets\/oliverqiu2.png\" height=100px\/><\/a>\r\n\t\t\r\n\t\t<div class=\"topnav\" id=\"myTopnav\">\r\n\t\t\t<a href=\""+path+"music\">Music<\/a>\r\n\t\t\t<a href=\""+path+"sheetslessons\">Sheets\/Lessons<\/a>\r\n\t\t\t<a href=\""+path+"galleries\">Galleries<\/a>\r\n\t\t\t<a href=\""+path+"art\">Art<\/a>\r\n\t\t\t<a href=\""+path+"about\">About<\/a>\r\n\t\t\t<img src=\""+path+"assets\/menuicon.png\" class=\"menu\" onclick=\"openNavModal()\" style=\"height:30px;\"\/>\r\n\t\t<\/div>\r\n\r\n\t\t<div id=\"myNavModal\" class=\"navmodal\">\r\n\t\t\t<span class=\"close cursor\" onclick=\"closeNavModal()\">&times;<\/span>\r\n\t\t\t<div class=\"navmodal-content\">\r\n\t\t\t\t<a href=\""+path+"music\">Music<\/a>\r\n\t\t\t\t<br>\r\n\t\t\t\t<a href=\""+path+"sheetslessons\">Sheets\/Lessons<\/a>\r\n\t\t\t\t<br>\r\n\t\t\t\t<a href=\""+path+"galleries\">Galleries<\/a>\r\n\t\t\t\t<br>\r\n\t\t\t\t<a href=\""+path+"art\">Art<\/a>\r\n\t\t\t\t<br>\r\n\t\t\t\t<a href=\""+path+"about\">About<\/a>\r\n\t\t\t\t<br>\r\n\t\t\t<\/div>\r\n\t\t<\/div>";

function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

var text2=text;

if(active!=="home"){
    var results = getIndicesOf(active, text,true);
    var firstoccurance=results[0]+active.length+1;
    var secondoccurance=results[1]+active.length+1;
    text2 = text.slice(0, firstoccurance) + " class=\"active\" " + text.slice(firstoccurance,secondoccurance)+ " class=\"active\" " +text.slice(secondoccurance);
}

document.getElementById("header").innerHTML = text2;

function openNavModal() {
    document.getElementById("myNavModal").style.display = "block";
}
function closeNavModal() {
    document.getElementById("myNavModal").style.display = "none";
}