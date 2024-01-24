// Code Practice: Making a Scene
// Name: Phoebe Royer
// Date: 1/17/23
// I'm here

"use strict"

let config = {
    type: Phaser.AUTO,
    render: {
        // fixes pixel art blur
        pixelArt: true
    },
    scene: [MainMenu, Play]
}

let game = new Phaser.Game(config)