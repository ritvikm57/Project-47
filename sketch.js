var END = 0;
var PLAY = 1;
var LOAD = 2;
var PRELOAD = 3;
var gameState = 3;
var RestartImg, StartImg, menuImg, YellowBoxImg, BackButtonImg,NoSoundImg, SoundImg, homeImg;
var IdelImg, M1Img, MazeTitleImg, gameOverImg;
var playerImg, walk1Img, walk2Img, walkAnime;
var templeIdelImg, TempleMummyImg, TempleSwordImg,TempleImg;
var  MazeTitle, player, BG;
var gameOver, Start, menu, YellowBox, Restart, BackButton, NoSound, Sound, home;
var BgSound
var Mazelines = []
var A = 0
var MenuStatus = 0;
var soundStatus = 1;




function preload() {
    IdelImg = loadImage("Images/Idel.png")

    M1Img = loadImage("Images/Maze1.png")
    MazeTitleImg = loadImage("Images/MazeTitle.png")
    
    gameOverImg = loadImage("Images/gameOver.png")
    
    RestartImg = loadImage("Images/Restart.png")
    StartImg = loadImage("Images/start.png")
    menuImg = loadImage("Images/Menu.png")
    YellowBoxImg = loadImage("Images/YellowBox.png")
    BackButtonImg = loadImage("Images/BackButton.png")
    NoSoundImg = loadImage("Images/NoSound.png")
    SoundImg = loadImage("Images/Sound.png")
    homeImg=loadImage("Images/Home.png")

    playerImg = loadImage("Images/Player.png")

    TempleMummyImg = loadImage("Images/TempleMummy.png")
    TempleSwordImg = loadImage("Images/TempleSword.png")
    templeIdelImg = loadImage("Images/templeIdel.png")
    TempleImg = loadImage("Images/TempleNone.png")
    
    BgSound = loadSound("Images/bgSound.wav")

    walk1Img = loadImage("Images/Walk1.png")
    walk2Img = loadImage("Images/Walk2.png")
    
    walkAnime = loadAnimation(walk1Img,walk2Img)
}

function setup(){
    createCanvas(1200,800)

    BG = createSprite(600,370,1200,800)
    BG.addImage(TempleImg)

    MazeTitle = createSprite(600,200)
    MazeTitle.addImage(MazeTitleImg)
    MazeTitle.scale = 2.5;

    player = createSprite(100,200,20,20)
    player.addImage(playerImg)
    player.scale = 0.1;


    gameOver = createSprite(600,100);
    gameOver.addImage(gameOverImg);

    

    Start = createSprite(600,600);
    Start.addImage(StartImg)

    YellowBox = createSprite(150,200)
    YellowBox.addImage(YellowBoxImg)
    YellowBox.scale = 0.75;

    menu = createSprite(70,70);
    menu.addImage(menuImg)
    menu.scale = 0.35;
    
    BackButton = createSprite(150,400)
    BackButton.addImage(BackButtonImg)
    BackButton.scale = 0.35;
    
    Sound = createSprite(220,75)
    Sound.addImage(SoundImg)
    Sound.scale = 0.50;

    NoSound = createSprite(90,82)
    NoSound.addImage(NoSoundImg)
    NoSound.scale = 0.35;

    restart = createSprite(226,204);
    restart.addImage(RestartImg);
    restart.scale= 0.35;

    home = createSprite(87,202)
    home.addImage(homeImg)
    home.scale=0.35

    Mazeline1 = createSprite (600,90,960,20)
    Mazeline2 = createSprite (600,710,960,20)
    Mazeline3 = createSprite (1070,320,20,460)
    Mazeline4 = createSprite (130,450,20,500)
    Mazeline5 = createSprite (130,127,20,95)
    Mazeline6 = createSprite (1070,647,20,125)

    Mazeline7 = createSprite (190,649,20,55)
    Mazeline8 = createSprite (195,567,20,55)
    Mazeline9 = createSprite (192,421,20,97)
    Mazeline10 = createSprite (190,254,20,100)

    Mazeline11 = createSprite (256,147,20,60)
    Mazeline12 = createSprite (260,234,20,57)
    Mazeline13 = createSprite (258,358,20,60)
    Mazeline14 = createSprite (254,484,20,60)
    Mazeline15 = createSprite (256,650,20,60)

    Mazeline16 = createSprite (320,130,20,100)
    Mazeline17 = createSprite (320,359,20,142)
    Mazeline18 = createSprite (320,526,20,55)
    Mazeline19 = createSprite (320,684,20,40)

    Mazeline20 = createSprite (380,150,20,54)
    Mazeline21 = createSprite (380,318,22,64)
    Mazeline22 = createSprite (380,442,20,58)
    Mazeline23 = createSprite (380,608,20,58)

    Mazeline24 = createSprite (443,484,20,56)
    Mazeline25 = createSprite (443,630,20,95)
    Mazeline26 = createSprite (443,192,20,55)
    Mazeline27 = createSprite (443,275,20,56)
    Mazeline28 = createSprite (443,380,20,97)

    Mazeline29 = createSprite (507,684,20,40)
    Mazeline30 = createSprite (505,275,20,56)
    Mazeline31 = createSprite (507,358,20,56)
    Mazeline32 = createSprite (507,587,23,103)

    Mazeline33 = createSprite (569,336,22,182)
    Mazeline34 = createSprite (568,540,20,90)
    Mazeline63 = createSprite (568,115,20,40)

    Mazeline35 = createSprite (630,275,20,140)
    Mazeline36 = createSprite (630,485,20,135)
    Mazeline37 = createSprite (630,610,20,56)

    Mazeline38 = createSprite (693,400,20,50)
    Mazeline39 = createSprite (695,684,20,40)
    Mazeline40 = createSprite (693,315,22,56)
    Mazeline41 = createSprite (693,170,20,100)
    Mazeline42 = createSprite (693,505,20,95)

    Mazeline43 = createSprite (756,336,20,98)
    Mazeline44 = createSprite (756,127,20,93)
    Mazeline45 = createSprite (756,525,20,220)

    Mazeline46 = createSprite (819,255,20,95)
    Mazeline47 = createSprite (819,378,20,95)
    Mazeline48 = createSprite (819,525,20,140)
    Mazeline49 = createSprite (819,650,25,57)

    Mazeline50 = createSprite (880,192,20,56)
    Mazeline51 = createSprite (880,275,22,58)
    Mazeline52 = createSprite (880,420,22,95)
    Mazeline53 = createSprite (880,588,20,98)

    Mazeline54 = createSprite (943,337,20,96)
    Mazeline55 = createSprite (943,440,20,60)
    Mazeline56 = createSprite (943,525,20,60)
    Mazeline57 = createSprite (943,608,21,60)

    Mazeline58 = createSprite (1007,565,21,140)
    Mazeline59 = createSprite (1005,360,20,58)
    Mazeline60 = createSprite (1005,135,20,80)
    Mazeline61 = createSprite (1005,275,23,56)


    Mazeline64 = createSprite (220,126,90,20)
    Mazeline65 = createSprite (445,126,150,20)
    Mazeline66 = createSprite (610,125,80,20)
    Mazeline67 = createSprite (880,126,160,20)

    Mazeline68 = createSprite (192,167,143,20)
    Mazeline69 = createSprite (475,167,210,20)
    Mazeline70 = createSprite (650,167,70,20)
    Mazeline71 = createSprite (790,167,88,20)
    Mazeline72 = createSprite (914,167,88,20)

    Mazeline73 = createSprite (293,210,86,20)
    Mazeline74 = createSprite (410,210,85,20)
    Mazeline75 = createSprite (565,210,150,20)
    Mazeline76 = createSprite (735,210,70,20)
    Mazeline77 = createSprite (950,210,143,20)

    Mazeline78 = createSprite (351,255,203,20)
    Mazeline79 = createSprite (535,255,80,20)
    Mazeline80 = createSprite (750,255,140,20)
    Mazeline81 = createSprite (943,255,147,20)

    Mazeline82 = createSprite (256,295,148,20)
    Mazeline83 = createSprite (411,295,83,20)
    Mazeline84 = createSprite (786,295,208,20)
    Mazeline85 = createSprite (1035,295,83,20)

    Mazeline86 = createSprite (978,340,73,20)
    Mazeline87 = createSprite (165,340,80,20)
    Mazeline88 = createSprite (470,340,74,20)
    Mazeline89 = createSprite (662,340,84,20)
    Mazeline90 = createSprite (860,340,63,19)

    Mazeline91 = createSprite (225,380,86,20)
    Mazeline92 = createSprite (382,380,142,20)
    Mazeline93 = createSprite (638,380,130,20)
    Mazeline94 = createSprite (785,380,78,20)
    Mazeline95 = createSprite (911,380,84,20)

    Mazeline96 = createSprite (284,420,90,20)
    Mazeline97 = createSprite (475,420,210,20)
    Mazeline98 = createSprite (756,420,146,20)
    Mazeline99 = createSprite (1010,420,130,20)

    Mazeline100 = createSprite (280,461,195,20)
    Mazeline101 = createSprite (476,460,86,20)
    Mazeline102 = createSprite (595,460,80,20)
    Mazeline103 = createSprite (880,460,142,20)
    Mazeline104 = createSprite (1030,460,80,20)

    Mazeline105 = createSprite (165,505,80,20)
    Mazeline106 = createSprite (287,505,85,20)
    Mazeline107 = createSprite (411,505,84,20)
    Mazeline108 = createSprite (525,505,90,20)
    Mazeline109 = createSprite (725,505,80,20)
    Mazeline110 = createSprite (900,505,73,20)

    Mazeline111 = createSprite (228,545,86,20)
    Mazeline112 = createSprite (440,545,155,20)
    Mazeline113 = createSprite (975,545,60,20)

    Mazeline114 = createSprite (910,588,60,20)
    Mazeline115 = createSprite (1040,588,80,20)
    Mazeline116 = createSprite (165,588,80,20)
    Mazeline117 = createSprite (348,588,210,20)
    Mazeline118 = createSprite (663,588,86,20)

    Mazeline119 = createSprite (292,630,80,20)
    Mazeline120 = createSprite (631,630,270,20)
    Mazeline121 = createSprite (848,630,83,20)
    Mazeline122 = createSprite (975,630,85,20)

    Mazeline123 = createSprite (170,670,60,20)
    Mazeline124 = createSprite (320,670,140,20)
    Mazeline125 = createSprite (475,670,84,20)
    Mazeline126 = createSprite (630,670,150,20)
    Mazeline127 = createSprite (785,670,92,20)
    Mazeline128 = createSprite (945,670,150,20)


    gameOver.visible = false;
    player.visible = false;
    YellowBox.visible = false;
    BackButton.visible = false;
    NoSound.visible = false;
    Sound.visible = false;
    home.visible = false;
    restart.visible = false;
}

function draw(){
    background("Black");
    if(mousePressedOver(menu) && MenuStatus===0){
        menu.visible = false;
        YellowBox.visible = true;
        BackButton.visible = true
        NoSound.visible = true;
        Sound.visible = true;
        home.visible = true;
        restart.visible = true;

        MenuStatus=1
    }
    if(mousePressedOver(BackButton) && MenuStatus === 1){
        menu.visible = true;
        YellowBox.visible = false;
        BackButton.visible = false;
        NoSound.visible = false;
        Sound.visible = false;
        home.visible = false;
        restart.visible = false;

        MenuStatus=0
    }

    if(mousePressedOver(NoSound) && MenuStatus === 1){
        soundStatus===0
    }
    if(mousePressedOver(Sound) && MenuStatus === 1){
        soundStatus===1
    }
    if(mousePressedOver(restart) && MenuStatus === 1){
        gameState=PLAY
    }
    if(mousePressedOver(home) && MenuStatus === 1){
        gameState=PRELOAD
        restartCommand();
    }

    if(soundStatus===1){
        
    }
    if(soundStatus===0){
        BgSound.play(false)
    }
    if(mousePressedOver(Start)&& A===0 && gameState===PRELOAD){
        gameState = LOAD
    }
    if(gameState === LOAD){
        Story();
    }
    if(gameState === PRELOAD){

    }
    if(gameState===PLAY){
        background("white");
        player.visible=true
        BG.visible=false;
        MazeTitle.visible=false;
        Start.visible = false;
    }
    if(mousePressedOver(menu)){

    }

    drawSprites();
}

function Story(){
    Start.visible = false;
    MazeTitle.visible = false;
 
    if(keyWentDown(RIGHT_ARROW)&& A<3){
        A=A+1
    }
    if(keyWentDown(LEFT_ARROW)&& A<3 && A>0){
        A=A-1
    }

    if(A<3){
        textSize(10)
        fill("White")
        text("Press the SpaceBar Button to Skip the Story and Press the right arrow for the next slide",400,780)
    }

    if(A===1){
        BG.addImage(templeIdelImg)
        textSize(30)
        fill("White")
        text("Finally! After so long, I have found the Temple of the Great Egyptian Pharaoh.",100,760)
    }
    if(A===2){
        BG.addImage(TempleMummyImg)
        textSize(30)
        fill("White")
        text("Now I need to find the Pharaoh's Tomb where the Diamond Sword lies", 150,760)

    }
    if(A===3){
        BG.addImage(TempleSwordImg)
        textSize(30)
        fill("White")
        text("The Diamond Sword is believed to be enchanted by the great Wizard of Batan",100,760)
        textSize(10)
        text("Click SpaceBar to Play",550,780)
    }
    if(keyWentDown("Space")){
        gameState = PLAY
        A=4
        BG.visible = false
    }
}

function restartCommand(){
    A = 0
    
    background("black")
    
    BG.visible=true
    BG.addImage(TempleImg)
    
    player.visible=false;

    Start.visible=true;
    MazeTitle.visible=true;
}