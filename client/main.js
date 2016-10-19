import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


if (Meteor.isClient) {
    Template.game.game = function(){


        var game = new Phaser.Game("100%", "100%", Phaser.CANVAS, '', { preload: preload, create: create });

        var niveau = [

            [0,1,0,0,0,1,0,1,0,0,0,0],
            [0,0,1,0,0,0,0,1,0,1,0,0],
            [0,1,0,0,0,0,0,0,0,0,1,0],
            [0,1,1,0,0,1,0,0,0,0,1,0],
            [0,0,0,0,1,0,0,0,0,1,0,0],
            [1,0,0,0,0,1,0,1,0,0,1,0]
        ];
        var counter =0;
        var text;
        var bulle=[];
        var id_bulle=0;

        var circleColor;
        var timer;
        var sprite;
        var diameter = 50;
        var randDiam = parseInt((25) * (Math.random(1.5,3)));
        var info_bulle = [];
        var colors = ['000080', '009926', '880000', 'dd1144', 'E9DC51'];

        function preload() {

        }

        function create(){

            text = game.add.text(250, 16, '', { fill: '#ffffff' });
            game.stage.backgroundColor = "#4488AA";


            for(var i=0;i<6;i++){
                for(var j=0;j<12;j++){
                    if(niveau[i][j]==1){
                        timer =Math.floor(Math.random() * 11000 + 1000);  //temps aléatoire de chque bulle


                        randDiam = parseInt((diameter/2) * (Math.random(1.5,3)));  // valeur aléatoire du cercle de départ

                        circleColor = '0x'+ colors[parseInt(Math.random()*5)];  //couleur aléatoire

                        var graphics = game.add.graphics(0,0);   //on ajoute la première bulle

                        graphics.beginFill(circleColor, 0.4);
                        graphics.drawCircle(50*(j+1),50*(i+1),diameter);
                        graphics.endFill();

                        var graphics2= game.add.graphics(0,0);   //on ajoute la deuxième bulle
                        graphics2.beginFill(circleColor, 1);
                        graphics2.drawCircle(50*(j+1),50*(i+1),randDiam);
                        graphics2.endFill();

                        var sprite = game.add.sprite();
                        sprite.addChild(graphics2);


                        bulle[id_bulle] = game.add.sprite();

                        bulle[id_bulle].addChild(graphics);
                        bulle[id_bulle].addChild(sprite);

                        bulle[id_bulle].diametre=randDiam;
                        bulle[id_bulle].positionx=50*(j+1);
                        bulle[id_bulle].positiony=50*(i+1);

                        bulle[id_bulle].events.onInputDown.add(listener, {id: id_bulle});

                        boucle(id_bulle);
                        bulle[id_bulle].inputEnabled = true;


                        id_bulle++;



                        //new Phaser.Circle(50*(j+1),50*(i+1),50)

                    }
                }
            }
        }
        function listener () {
            counter++;

            id=this.id;
            bulle[id] .destroy();


            text.text = "Votre score : " + counter;

        }
        var boucle_max=0;
        var graphics2;
        function boucle (id_bulle) {

            id=id_bulle;
            if(bulle[id].positionx!=='undefined'){ //si il y a encore une sous bulle
                x=bulle[id].positionx;
                y=bulle[id].positiony;
                diametre=bulle[id].diametre;
                if (diametre < 50) {
                    circleColor = bulle[id].children[0].graphicsData[0].fillColor;


                    graphics2= game.add.graphics(0,0);   //on ajoute une bulle plus grosse
                    graphics2.beginFill(circleColor, 1);
                    graphics2.drawCircle(x,y,diametre);
                    graphics2.endFill();

                    bulle[id].children[1].addChild(graphics2);



                    bulle[id].diametre=diametre+0.1;
                    setTimeout(function () {
                        // Do Something Here
                        // Then recall the parent function to
                        // create a recursive loop.
                        boucle(id);
                    }, 250);
                }else{
                    bulle[id].destroy();
                    counter--;
                    text.text = "Votre score : " + counter;
                }

            }else{
                bulle[id].destroy();
                graphics2[id].destroy();
            }


        }




    }
}
