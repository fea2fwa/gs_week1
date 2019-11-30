
$("#my_value_par").on("click",function(){

    const r = Math.ceil(Math.random()*3);

    if(r==1){
        view = '<img src="img/gu.png">';
    }
    if(r==2){
        view = '<img src="img/choki.png">';
    }    
    if(r==3){
        view = '<img src="img/par.png">';
    }

    var par = 3

    if((par-r) == 0){
        resulttext = '<p>引き分け</p>'
    }
    if((par-r) == 1){
        resulttext = '<p>負け</p>'
    }
    if((par-r) == 2){
        resulttext = '<p>勝ち</p>'
    }

    $("#op_value").html(view);
    $("#result").html(resulttext);
});

$("#my_value_gu").on("click",function(){

    const r = Math.ceil(Math.random()*3);

    if(r==1){
        view = '<img src="img/gu.png">';
    }
    if(r==2){
        view = '<img src="img/choki.png">';
    }    
    if(r==3){
        view = '<img src="img/par.png">';
    }

    var gu = 1

    if((gu-r) == 0){
        resulttext = '<p>引き分け</p>'
    }
    if((gu-r) == -2){
        resulttext = '<p>負け</p>'
    }
    if((gu-r) == -1){
        resulttext = '<p>勝ち</p>'
    }

    $("#op_value").html(view);
    $("#result").html(resulttext);
});

$("#my_value_choki").on("click",function(){

    const r = Math.ceil(Math.random()*3);

    if(r==1){
        view = '<img src="img/gu.png">';
    }
    if(r==2){
        view = '<img src="img/choki.png">';
    }    
    if(r==3){
        view = '<img src="img/par.png">';
    }

    var choki = 2

    if((choki-r) == 0){
        resulttext = '<p>引き分け</p>'
    }
    if((choki-r) == 1){
        resulttext = '<p>負け</p>'
    }
    if((choki-r) == -1){
        resulttext = '<p>勝ち</p>'
    }

    $("#op_value").html(view);
    $("#result").html(resulttext);
});



$("#my_value_par_boss").on("click",function(){

    const r = Math.ceil(Math.random()*10);

    if(r==7){
        view = '<img src="img/gu.png">';
    }if(r<=3){
        view = '<img src="img/par.png">';
    }if((r>3 && r<=6) || r>=8){
        view = '<img src="img/choki.png">';
    }


    if(r==7){
        resultpic = '<img src="img/lose.png">'
    }
    if(r<=3){
        resultpic = '<img src="img/draw.png">'
    }
    if(r>3 && r<=6){
        resultpic = '<img src="img/win1.png">'
    }
    if(r>=8){
        resultpic = '<img src="img/win2.png">'
    }

    $("#op_value").fadeOut(0)
    $("#op_value").fadeIn(1000)
    $("#op_value").html(view);
    $("#result").fadeOut(0)
    $("#result").fadeIn(1500)
    $("#result").html(resultpic);
});

$("#my_value_gu_boss").on("click",function(){

    const r = Math.ceil(Math.random()*10);

    if(r==7){
        view = '<img src="img/choki.png">';
    }if(r<=3){
        view = '<img src="img/gu.png">';
    }if((r>3 && r<=6) || r>=8){
        view = '<img src="img/par.png">';
    }


    if(r==7){
        resultpic = '<img src="img/lose.png">'
    }
    if(r<=3){
        resultpic = '<img src="img/draw.png">'
    }
    if(r>3 && r<=6){
        resultpic = '<img src="img/win1.png">'
    }
    if(r>=8){
        resultpic = '<img src="img/win2.png">'
    }

    $("#op_value").fadeOut(0)
    $("#op_value").fadeIn(1000)
    $("#op_value").html(view);
    $("#result").fadeOut(0)
    $("#result").fadeIn(1500)
    $("#result").html(resultpic);
});


$("#my_value_choki_boss").on("click",function(){

    const r = Math.ceil(Math.random()*10);

    if(r==7){
        view = '<img src="img/par.png">';
    }if(r<=3){
        view = '<img src="img/choki.png">';
    }if((r>3 && r<=6) || r>=8){
        view = '<img src="img/gu.png">';
    }


    if(r==7){
        resultpic = '<img src="img/lose.png">'
    }
    if(r<=3){
        resultpic = '<img src="img/draw.png">'
    }
    if(r>3 && r<=6){
        resultpic = '<img src="img/win1.png">'
    }
    if(r>=8){
        resultpic = '<img src="img/win2.png">'
    }

    $("#op_value").fadeOut(0)
    $("#op_value").fadeIn(1000)
    $("#op_value").html(view);
    $("#result").fadeOut(0)
    $("#result").fadeIn(1500)
    $("#result").html(resultpic);
});