export default class DrawSpell {

    constructor(canvas,spelltype=1) {


        this.canvas = canvas;


        this.context = this.canvas.getContext("2d");
        this.pos = [0, 0];
        this.start_pos=10;
        this.size = [420, 266];
        this.speed = 1;
        this.frames = [0, 0,1, 2, 3, 4];
        this._index = 0;
        this.dir = 'horizontal';
        this.once = true;

        this.spellSprite = new Image();
        this.spellSprite.src = "images/waterBallsprite.png";
        if (spelltype==2) this.spellSprite.src = "images/fireBallsprite.png";
        if (spelltype==3) this.spellSprite.src = "images/slimeBallsprite.png";
        if (spelltype==4) this.spellSprite.src = "images/lightningBallsprite.png";
        if (spelltype==5) this.spellSprite.src = "images/plazmaBallsprite.png";

        if (spelltype==6) {
            this.spellSprite.src = "images/monsterspell.png";
            this.start_pos = 400;
            this._index = 5;
            this.speed = -1;
        }


        this.render = this.render.bind(this);
        this.update = this.update.bind(this);
        this.context.scale(-1,1);


        let run = setInterval(() => {this.update(1);
            this.render(this.context);
            if (Math.abs(this._index)>5)
            {
                clearInterval(run);

            }},100 )

    }

    update(dt) {
        this._index += this.speed * dt;
    }


    render(ctx) {
        let frame;
       this.canvas.width = this.canvas.width;

            let max = this.frames.length;
            let idx = Math.abs(Math.floor(this._index));
            frame = this.frames[idx % max];

            if (this.once && idx >= max) {
                this.done = true;
                return;
            }

        let x = this.pos[0];
        let y = this.pos[1];

        if (this.dir == 'vertical') {
            y += frame * this.size[1];
        }
        else {
            x += frame * this.size[0];
        }

        ctx.drawImage(this.spellSprite,
            x, y,
            this.size[0], this.size[1],
            this.start_pos+this._index*100-100, 200,
            this.size[0]/2, this.size[1]/2);

    }



}











