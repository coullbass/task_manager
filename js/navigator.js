let leftButton = document.querySelector('.left')
let rightButton = document.querySelector('.right')
let upButton = document.querySelector('.up')
let downButton = document.querySelector('.down')
let stopButton = document.querySelector('.stop')
let catchButton = document.querySelector('.catch')

class CSSNavigator{
    constructor(offset, delay, selector){
        this.offset = offset;
        this.delay = delay;
        this.selector = selector;
        this.movingObject = document.querySelector(this.selector);
        this.timer = {}
        this.posX = +this.movingObject.style.left;
        this.posY = +this.movingObject.style.top;
        console.log(+this.movingObject.style.margin)
        
    };
    
    
    moveRight (){
        clearTimeout(this.timer);
        let move = () => {
            this.movingObject.style.left = this.posX + 'px';
            this.posX+=this.offset;
            if (this.posX>= 400) return true
            this.timer = setTimeout(() => move(), this.delay)
        }
        move()
        
    }

    moveLeft(){
        
        clearTimeout(this.timer);
        let move = () => {
            this.movingObject.style.left = this.posX + 'px';
            this.posX-=this.offset;
            if (this.posX <= 0) return true
            this.timer = setTimeout(() => move(), this.delay)
        }
        move()
    }

    moveUp(){
        
        clearTimeout(this.timer);
        let move = () => {
            this.movingObject.style.top = this.posY + 'px';
            this.posY-=this.offset;
            if (this.posY <= 0) return true
            this.timer = setTimeout(() => move(), this.delay)
        }
        move()
    }

    moveDuwn(){
        
        clearTimeout(this.timer);
        let move = () => {
            this.movingObject.style.top = this.posY + 'px';
            this.posY+=this.offset;
            if (this.posY >= 400) return true
            this.timer = setTimeout(() => move(), this.delay)
        }
        move()
    }

    stop(){
        clearTimeout(this.timer);
    }
}

// let selectorObj = null;
// function cachObject(){
//     selectorObj = 
// }

// catchButton.addEventListener()
let sq = new CSSNavigator(20, 100, '.square')


leftButton.addEventListener('click', () => sq.moveLeft())
rightButton.addEventListener('click', () => sq.moveRight())
upButton.addEventListener('click', () => sq.moveUp())
downButton.addEventListener('click', () => sq.moveDuwn())
stopButton.addEventListener('click', () => sq.stop())


let doc = document.getElementsByClassName(".*")
console.log(doc)