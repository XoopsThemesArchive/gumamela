//*****************************************
// Blending Image Slide Show Script- 
// © Dynamic Drive (www.dynamicdrive.com)
// For full source code, visit http://www.dynamicdrive.com/
//*****************************************

//specify interval between slide (in mili seconds)
var slidespeed=4000

//specify images
var slideimages=new Array("images/img08.jpg","images/img09.jpg","images/img010.jpg","images/img011.jpg","images/img012.jpg")

//specify corresponding links
var slidelinks=new Array("http://www.coopagrimar.com/online","http://www.coopagrimar.com/online","http://www.coopagrimar.com/online","http://www.coopagrimar.com/online","http://www.coopagrimar.com/online")

var newwindow=1 //open links in new window? 1=yes, 0=no

var imageholder=new Array()
var ie=document.all
for (i=0;i<slideimages.length;i++){
imageholder[i]=new Image()
imageholder[i].src=slideimages[i]
}

function gotoshow(){
if (newwindow)
window.open(slidelinks[whichlink])
else
window.location=slidelinks[whichlink]
}

