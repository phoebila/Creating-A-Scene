class Play extends Phaser.Scene {
    constructor(){
        super('playScene')
        console.log('Play: constructor');
    }

    init(stats){
        console.log('play: init');
        // moving data packets from main menu -> play
        this.HP = stats.HP
        this.EXP = stats.EXP
    }

    create(){
        console.log('Play: create');
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`)

        this.scene.add('statsoverlayScene', StatsOverlay, false)
        this.scene.launch('statsoverlayScene')

        this.tomato = this.add.sprite(240, 240, 'tomato').setOrigin(0).setScale(2)


    }

    update (){
        // console.log('play: update');
        this.tomato.angle++
    }

}