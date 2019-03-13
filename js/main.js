 window.onload = function(){

    var video = document.createElement("VIDEO");
    var attr1 = document.createAttribute("src");
    attr1.value = "video/MercedesBenzDrive.mp4";
    var attr2 = document.createAttribute("autoplay");
    attr2.value = "true";
    var attr4 = document.createAttribute("loop");
    attr4.value = "true";
    video.setAttributeNode(attr1);
    video.setAttributeNode(attr2);
    video.setAttributeNode(attr4);
    document.querySelector(".wrap2 .videoWrap").appendChild(video);



    var opacity = document.createElement("DIV");
    var opacityAttr = document.createAttribute("class");
    opacityAttr.value = "opacity";
    opacity.setAttributeNode(opacityAttr);
    document.querySelector(".wrap2").appendChild(opacity);



    var h2 = document.createElement("H2");
    var h2Attribute = document.createAttribute("class");
    h2Attribute.value = "vText";
    h2.setAttributeNode(h2Attribute);
    var text = document.createTextNode("See our best videos");
    h2.appendChild(text);
    document.querySelector(".wrap2").appendChild(h2);
    

 }






