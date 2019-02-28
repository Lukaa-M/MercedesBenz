$(document).ready(function(){
    $(".toggle").click(function(){
        $(".toggle").toggleClass("active");
        $(".sidebar").toggleClass("active");
    });

    // $("#scrollDownButton").click(function(){
        
        
    // });

    $.ajax("json/wrap1.json",{

        method: "GET",
        dataType: "json",
        success: function(data){
            write= "";
            data.forEach(function(add){
                write +=`
                <div class="margin">
                    <div class="container">
                        <div class="carRow">
                            <div class="col-sm-6 ${add.class.firstClass} ${add.class.border}">
                                
                            </div>
                            <div class="col-sm-6 ${add.class.secondClass} ${add.class.border}">
                                
                            </div>
                        </div>
                    </div>
                </div>
                `;
            });
            document.querySelector(".wrap1").innerHTML = write;


        },
        error:function(error){
            console.log(error);
        }

    });


    $.ajax("json/list.json",{

        method: "GET",
        dataType: "json",
        success: function(data){
            write= "";
            data.forEach(function(add){
                write +=`  
                    <a href="#"><li>${add.name1}</li></a>
                `; 
                
                
            });
            document.querySelector(".supleft ul").innerHTML = write;

            write2 = "";
            data.forEach(function(pick){
                write2 +=`
                    <a href="#"><li>${pick.name2}</li></a>
                `;
            })
            document.querySelector(".supright ul").innerHTML = write2;

        },
        error:function(error){
            console.log(error);
        }

    });

});



 window.onload = function(){

    var video = document.createElement("VIDEO");
    var attr1 = document.createAttribute("src");
    attr1.value = "video/video.mp4";
    var attr2 = document.createAttribute("autoplay");
    attr2.value = "true";
    var attr3 = document.createAttribute("muted");
    attr3.value = "muted";
    var attr4 = document.createAttribute("loop");
    attr4.value = "true";
    video.setAttributeNode(attr1);
    video.setAttributeNode(attr2);
    video.setAttributeNode(attr3);
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






