$(document).ready(function(){
    $(".toggle").click(function(){
        $(".toggle").toggleClass("active");
        $(".sidebar").toggleClass("active");
    });

    $("#scrollDownButton").click(function(){
        $("html,body").animate({ "scrollTop" : $(".wrap1").offset().top-100 }, 1500);
        
    });
    
    

    $.ajax("json/wrap1.json",{

        method: "GET",
        dataType: "json",
        success: function(data){
            $(".rightView p:nth-child(1)").click(function(){
                $(this).data.sort(function(p1,p2){
                    if(p1.class.firstClass.price > p2.class.secondClass.price){
                        
                        return -1;
                    }else {
                        return 1;
                    }

                });

            });
            write= "";
            data.forEach(function(add){
                write +=`
                <div class="margin">
                    <div class="container">
                        <div class="carRow">
                            <div class="col-sm-6 ${add.class.firstClass.name} ${add.class.border}">
                                <p class="upperText">${add.class.firstClass.text}</p>
                                <p class="lowerText">${add.class.firstClass.price}</p>
                            </div>
                            <div class="col-sm-6 ${add.class.secondClass.name} ${add.class.border}">
                                <p class="upperText">${add.class.secondClass.text}</p>
                                <p class="lowerText">${add.class.secondClass.price}</p>
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

function sorted(){
        $(".rightView p:first-child").click(function(){
            $(this).data.sort(function(p1,p2){
                if(p1.class.firstClass.price > p2.class.secondClass.price){
                    return 1;
                }else{
                    return -1;
                }

            })
        });
        $(".rightView p:last-child").click(function(){
            $(this).data.sort(function(p1,p2){
                if(p1.class.firstClass.price > p2.class.secondClass.price){
                    return -1;
                }else{
                    return 1;
                }

            })
        }); 
}
