import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


if (Meteor.isClient) {
    Template.game.game = function(){

        var game = new Phaser.Game(1920, 1080, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

        var niveau = [

            [0,1,0,0,0,1,0,1,0,0,0,0],
            [0,0,1,0,0,0,0,1,0,1,0,0],
            [0,1,0,0,0,0,0,0,0,0,1,0],
            [0,1,1,0,0,1,0,0,0,0,1,0],
            [0,0,0,0,1,0,0,0,0,1,0,0],
            [1,0,0,0,0,1,0,1,0,0,1,0]
        ];

        function preload() {

        }
        function create(){

            var graphics = game.add.graphics(0,0);
            var diameter = 50;
            for(var i=0;i<6;i++){
                console.log("ok");
                for(var j=0;j<12;j++){
                    if(niveau[i][j]==1){
                        var randDiam = parseInt((diameter) * (Math.random(1.5,3)));
                        console.log(randDiam);
                        graphics.beginFill(0xFF00000, 0.4);
                        graphics.drawCircle(50*(j+1),50*(i+1),diameter);
                        graphics.endFill();
                        graphics.beginFill(0xFF00000, 1);
                        graphics.drawCircle(50*(j+1),50*(i+1),randDiam);
                        graphics.endFill();

                        //new Phaser.Circle(50*(j+1),50*(i+1),50)
                    }
                }
            }
        }



        
    }
}
