class Form {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h3');
      
      this.title = createElement('h2');
      this.title1 = createElement('h3');
      this.title2 = createElement('h3');
      this.title3 = createElement('h3');
      this.title4 = createElement('h3');
      this.title5 = createElement('h3');
     
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.title1.hide();
      this.title2.hide();
      this.title3.hide();
      this.title4.hide();
      this.title5.hide();

    }
    
    display(){
    
      this.title.html("Seize The Space");
      this.title.position(displayWidth/2-120 ,0);
      this.title1.html("There is one warrior who started training before you but all other warriors teased him because he was short heighted.... ");
      this.title1.position(displayWidth/2 - 270 ,80 );
      this.title2.html("Then after lossing control he vanished somewhere we were not able to him... ");
      this.title2.position(displayWidth/2 -270, 120);
      this.title3.html("Then one day his mesasge came . Save your planet from coming hot asteroids....");
      this.title3.position(displayWidth/2 - 270, 160);
      this.title4.html("These asteroids can slice our planets in half");
      this.title4.position(displayWidth/2 -270, 200);
      this.title5.html("Go stop him with your spaceship ");
      this.title5.position(displayWidth/2-270, 240 );
     
      
      var name= input.value()

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
   /*   player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);*/
      this.greeting.html("Greetings, Warrior " + ame)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
