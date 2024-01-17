class MainMenu extends Phaser.Scene {
    constructor(){
        super('mainmenuScene')
        console.log('MainMenu: constructor');
    }

    init(){
        console.log('main menu: init');
        this.HP = 100
        this.EXP = 0
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`)
    }
    create(){
        console.log('main menu: create');

        let playerStats = {
            HP: this.HP,
            EXP: this.EXP
        }
                                    // passing this into init
        this.scene.start('playScene', playerStats)
    }
}