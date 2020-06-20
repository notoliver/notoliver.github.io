var level = document.getElementById("header").getAttribute("level");
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

console.log(path);

var text ="<div class=\"page\" style=\"wid"+
"th:30%;justify-content: flex-end;\">\r\n\t\t\t<div clas"+
"s=\"page link\"><a href=\""+path+"sheetslessons\" class=\"icon\">sheets\/les"+
"sons<\/a><\/div>\r\n\t\t\t<div class=\"spacer\"><\/div>\r\n\t\t\t<div cla"+
"ss=\"page link\"><a href=\""+path+"galleries\" class=\"icon\">galleri"+
"es<\/a><\/div>\r\n\t\t\t<div class=\"spacer\"><\/div>\r\n\t\t<\/d"+
"iv>\r\n\t\t<div class=\"page\" ><a href=\""+path+"\"><img src=\'"+path+"assets\/oliverqiu2.png\' a"+
"lt=\'lp4\' height=\'120\' \/><\/a><\/div>\r\n\t\t<div class=\"page\" style=\"width:30%;\">\r\n\t\t\t<d"+
"iv class=\"spacer\"><\/div>\r\n\t\t\t<div class=\"page link\"><a href=\""+path+"music\" class=\"icon\">mu"+
"sic<\/a><\/div>\r\n\t\t\t<div class=\"spacer\"><\/div>\r\n\t\t\t<div class=\"page link\"><a href=\""+path+"art\" cl"+
"ass=\"icon\">art<\/a><\/div>\r\n\t\t\t<div class=\"spacer\"><\/div>\r\n\t\t\t<div class=\"page link\"><a href=\""+path+"about\" class=\"icon\">about<\/a><\/div>\r\n\t\t<\/div>";

document.getElementById("header").innerHTML = text;