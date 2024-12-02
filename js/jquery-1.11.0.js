$( document ).ready(function() {


    var cards=[
    {id:0,
     question:'././images/4сезона1.png',
     answer:'././images/4сезона.png'},
    
    {id:1,
     question:'././images/5сыров1.png',
     answer:'././images/5сыров.png'},
    
    {id:2,
     question:'././images/баварская1.png',
     answer:'././images/баварская.png'},
    
    {id:3,
     question:'././images/Барбекю1.png',
     answer:'././images/Барбекю.png'},
    
    {id:4,
     question:'././/images/вегетарианская1.png',
     answer:'././images/вегетарианская.png'},
    {id:5,
     question:'././images/ветчина и грибы1.png',
     answer:'././images/ветчина и грибы.png'},
    
    {id:6,
     question:'././images/Гавайская1.png',
     answer:'././images/Гавайская.png'},
    
    {id:7,
     question:'././images/грибная1.png',
     answer:'././images/грибная.png'},
    
    {id:8,
     question:'././images/дьябло1.png',
     answer:'././images/дьябло.png'},
    
     {id:9,
     question:'././images/маргарита1.png',
     answer:'././images/маргарита.png'},
    
    {id:10,
     question:'././images/мясная1.png',
     answer:'././images/мясная.png'},
    
    {id:11,
     question:'././images/немецкая1.png',
     answer:'././images/немецкая.png'},
    
    {id:12,
     question:'././images/охотничья1.png',
     answer:'././images/охотничья.png'},
    
    {id:13,
     question:'././images/пепперони1.png',
     answer:'././images/пепперони.png'},
    
    {id:14,
     question:'././images/ростбиф и цукини1.png',
     answer:'././images/ростбиф и цукини.png'},

    {id:15,
        question:'././images/спайси1.png',
        answer:'././images/спайси.png'},
    {id:16,
        question:'././images/том ям1.png',
        answer:'././images/том ям.png'},
    {id:17,
        question:'././images/форель и авокадо1.png',
        answer:'././images/форель и авокадо.png'},
    {id:18,
        question:'././images/цезарь1.png',
        answer:'././images/цезарь.png'},
    {id:19,
        question:'././images/цыпленок с бататом1.png',
        answer:'././images/цыпленок с бататом.png'},
    {id:20,
        question:'././images/чизбургер1.png',
        answer:'././images/чизбургер.png'},
    {id:21,
        question:'././images/шеф-пицца1.png',
        answer:'././images/шеф-пицца.png'},
    ];
    /*for (var i=0;i<cards.length;i++) {
    var randomcard = Math.floor(Math.random() * cards.id);
    console.log(randomcard);
    
    }*/
    
    
    var ran;
    ran= Math.round(Math.random()*20);
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
    
        ran= Math.round(Math.random()*20);
    
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