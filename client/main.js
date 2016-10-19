import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


if (Meteor.isClient) {
    Template.game.game = function(){

        var game = new Phaser.Game(1920, 1080, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

        var niveau = [

            [0,1,0,0,0,1,0,1,0,1,1,0],
            [0,1,0,0,0,1,0,1,0,1,1,0],
            [0,1,0,0,0,1,0,1,0,1,1,0],
            [0,1,0,0,0,1,0,1,0,1,1,0],
            [0,1,0,0,0,1,0,1,0,1,1,0],
            [0,1,0,0,0,1,0,1,0,1,1,0]
        ];

        function preload() {

        }
        function create(){

            for(var i=0;i<12;i++){
                console.log("ok");
                for(var j=0;j<6;j++){
                    if(niveau[i][j]==1){
                        console.log('Il y a une bulle dans la case '+i+' '+j);
                    }
                }
            }
        }



        
    }
}
