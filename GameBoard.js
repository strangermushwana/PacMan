import {GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST} from './setup';

class GameBoard {
    constructor(DOMgrid) {
        this.dotCount = 0;
        this.grid = [];
        this.DOMgrid = DOMgrid;
    }

    showGameStatus(gameWin) {
        const div = document.createElement('div');
        div.classList.add('game-status');
        div.innerHTML = `${gameWin ? 'WIN!' : 'GAME'}`;
        this.DOMgrid = appendChild(div);
    }

    createGrid(level) {
        this.dotCount = 0;
        this.grid = []
        this.DOMgrid.innerHTML  = '';
        this.DOMgrid.style.cssText = `grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px)`;

        level.forEach((square) => {
            const div = document.createElement('div');
            div.classList.add('square', CLASS_LIST[square]);
            div.style.cssText  = `width: ${CELL_SIZE}px; height: ${CELL_SIZE}px;`;
            this.DOMgrid.appendChild(div);
            this.grid.push(div);

            if(CLASS_LIST[square] === OBJECT_TYPE.DOT) this.dotCount++;
        })
    }

    addObject(pos, classes) {
        this.grid[pos].classList.add(...classes)
    }

    removeObject(pos, classes) {
        this.grid[pos].classList.remove(...classes)
    }

    objectExists(pos, object) {
        return this.grid[pos].classList.contains(object);
    }

    rotateDiv(pos, deg) {
        this.grid[pos].style.transform = `rotate(${deg}deg)`;
    }

    static createGameBoard(DOMgrid, level) {
        const board = new this(DOMgrid);
        board.createGrid(level);
        return board;
    }
}

export  default GameBoard;