
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