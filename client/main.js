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

        function preload() {

        }
        function create(){


            var graphics = game.add.graphics(0,0);

            for(var i=0;i<6;i++){
                for(var j=0;j<12;j++){
                    if(niveau[i][j]==1){
                        graphics.beginFill(0xFF00000, 1);
                        graphics.drawCircle(50*(j+1),50*(i+1),50);
                        graphics.events.onInputDown.add(listener, this);

                    }
                }
            }
        }
        function listener () {

            counter++;
            text.text = "You clicked " + counter + " times!";

        }


        
    }
}
