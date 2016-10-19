import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

if (Meteor.isClient) {
    Template.game.game = function(){
        var niveau = [

            [0,1,0,0,0,1,0,1,0,1,1,0],
            [0,1,0,0,0,1,0,1,0,1,1,0],
            [0,1,0,0,0,1,0,1,0,1,1,0],
            [0,1,0,0,0,1,0,1,0,1,1,0],
            [0,1,0,0,0,1,0,1,0,1,1,0],
            [0,1,0,0,0,1,0,1,0,1,1,0]
        ]
        
    }
}
