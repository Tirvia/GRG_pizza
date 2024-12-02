$( document ).ready(function() {


    var cards=[
    {id:0,
     question:'././images/Блин с твор соус и икрой1.png',
     answer:'././images/Блин с твор соус и икрой.png'},
    
    {id:1,
     question:'././images/Драники верещака1.png',
     answer:'././images/Драники верещака.png'},
    
    {id:2,
     question:'././images/драники с беки сыр1.png',
     answer:'././images/драники с беки сыр.png'},
    
    {id:3,
     question:'././images/драники с дом колб1.png',
     answer:'././images/драники с дом колб.png'},
    
    {id:4,
     question:'././/images/драники с копч лососем1.png',
     answer:'././images/драники с копч лососем.png'},
    {id:5,
     question:'././images/драники с мачанкой1.png',
     answer:'././images/драники с мачанкой.png'},
    
    {id:6,
     question:'././images/драники со слоб сол лос1.png',
     answer:'././images/драники со слоб сол лос.png'},
    
    {id:7,
     question:'././images/драники со сметаной1.png',
     answer:'././images/драники со сметаной.png'},
    
    {id:8,
     question:'././images/запеченые блины1.png',
     answer:'././images/запеченые блины.png'},
    
     {id:9,
     question:'././images/налистники с вареньем1.png',
     answer:'././images/налистники с вареньем.png'},
    
    {id:10,
     question:'././images/налистники с мочанкой1.png',
     answer:'././images/налистники с мочанкой.png'},
    
    {id:11,
     question:'././images/рулька с кортоф и яйцом1.png',
     answer:'././images/рулька с кортоф и яйцом.png'},
    
    ];
    /*for (var i=0;i<cards.length;i++) {
    var randomcard = Math.floor(Math.random() * cards.id);
    console.log(randomcard);
    
    }*/
    
    
    var ran;
    ran= Math.round(Math.random()*12);
    /*var blindcard=cards[20].question;
        var el=document.getElementById('card');
        //el[0].classList.add('img-responsive');//+=' flashtext';
        el.src=blindcard;
    */
        $('.flashcard').hide();
        $('#checkanswer').hide();
     var displaycard=cards[ran].question;
        var el=document.getElementById('card');
        el.src=displaycard;
    
    
    $('#question').on('click',function(){
    
        ran= Math.round(Math.random()*12);
    
        //console.log(ran);
        
        var displaycard=cards[ran].question;
        var el=document.getElementById('card');
        el.src=displaycard;
    
        $('.flashcard').show();
        $('#checkanswer').show();
        });
    
        $('#question').on("mousedown",function(){
                $('#question').css("background-color","#b32e2e");
        });
        $('#question').on("mouseleave",function(){
                $('#question').css("background-color","red");
        });
        $('#question').on("mouseenter",function(){
                $('#question').css("background-color","#b32e2e");
            });
    
    
    $('#checkanswer').on('click',function(){
        
        var displayanswer=cards[ran].answer;
        var el1=document.getElementById('card');
        el1.src=displayanswer;
    
        $('.flashcard').show();
        
        });
    
        $('#checkanswer').on("mousedown",function(){
                $('#checkanswer').css("background-color","#b32e2e");
        });
        $('#checkanswer').on("mouseleave",function(){
                $('#checkanswer').css("background-color","red");
        });
        $('#checkanswer').on("mouseenter",function(){
                $('#checkanswer').css("background-color","#b32e2e");
            });
    
    
    })