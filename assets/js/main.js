$( () => {
  var numeroSlide=1;
  var formatear=false;
  var cantImg=$("#slide ul li").length;
  console.log(cantImg);
  // $("#slide ul li").css({width:(cantImg*50)+"%"});


  $("#indicator li").click(function(){
    var role=$(this).attr("role-slide");
    console.log("role",role);

    // $("#slide ul li").css({display:"none"});
    $("#slide ul li").hide();
    $("#slide ul li:nth-child("+ role +")").fadeIn();
    $("#indicator li").css({opacity:".5"});
    // $("#indicator li:nth-child("+ role +")").css({opacity:"1"});
    $(this).css({opacity:"1"});
    console.log(this);
    formatear=true;
    numeroSlide=role;
  });

  function avanzar(){
    if(numeroSlide>=cantImg){
      numeroSlide=1;
    }else{
      numeroSlide++;
    }
    // $("#slide ul li").css({display:"none"});
    $("#slide ul li").hide();
    $("#slide ul li:nth-child("+ numeroSlide +")").fadeIn();
    $("#indicator li").css({opacity:".5"});
    $("#indicator li:nth-child("+ numeroSlide +")").css({opacity:"1"});
    formatear=true;
    console.log("numeroSlide",numeroSlide)
  }

  $("#right").click(function(){
    avanzar();
    formatear=true;
  });

  $("#left").click(function(){
    if(numeroSlide<=1){
      numeroSlide=cantImg;
    }else{
      numeroSlide--;
    }
    $("#slide ul li").css({display:"none"});
    $("#slide ul li:nth-child("+ numeroSlide +")").fadeIn();
    $("#indicator li").css({opacity:".5"});
    $("#indicator li:nth-child("+ numeroSlide +")").css({opacity:"1"});

    console.log("numeroSlide",numeroSlide)
    formatear=true;
  });

  setInterval(function(){
    if(formatear){
      formatear=false
    }else{
      avanzar();
    }

  },4200);//el metodo hide()y fadeIn() tienen 400ms por defecto...en total demora 5 segundos

});



