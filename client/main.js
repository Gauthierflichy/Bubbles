import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


if (Meteor.isClient) {
    Template.game.game = function(){

        var game = new Phaser.Game(900, 650, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

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
        var randDiam = parseInt((diameter) * (Math.random(1.5,3)));
        var sprite;
        var graphics;

        function preload() {

        }
        function create(){


            game.stage.backgroundColor = "#4488AA";
            var graphics = game.add.graphics(0,0);
            var diameter = 50;

            var colors = ['000080', '009926', '880000', 'dd1144', 'E9DC51'];
 
            for(var i=0;i<6;i++){
                for(var j=0;j<12;j++){
                    if(niveau[i][j]==1){
                        var randDiam = parseInt((diameter) * (Math.random(1.5,3)));
                        var circleColor = '0x'+ colors[parseInt(Math.random()*5)];
                        console.log(circleColor);

                        graphics.beginFill(circleColor, 0.4);
                        graphics.drawCircle(50*(j+1),50*(i+1),diameter);
                        graphics.endFill();
                        graphics.beginFill(circleColor, 1);

                        graphics.drawCircle(50*(j+1),50*(i+1),randDiam);
                        graphics.endFill();



                        bulle[id_bulle] = game.add.sprite();

                        bulle[id_bulle].addChild(graphics);

                        bulle[id_bulle].events.onInputOver.add(listener, this);
                        console.log(bulle[id_bulle]);










                        id_bulle++;



                        //new Phaser.Circle(50*(j+1),50*(i+1),50)

                    }
                }
            }
        }
        function listener () {

            counter++;
            console.log("coucou");
            text.text = "You clicked " + counter + " times!";

        }


        
    }
}
