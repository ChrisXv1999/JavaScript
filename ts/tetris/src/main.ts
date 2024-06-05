import { Game } from "./core/Game";
import GameConfig from "./core/GameConfig";
import { Square } from "./core/Square";
import { SquareGroup } from "./core/SquareGroup";
import { LShape,SShape, SquareShape, createTeris } from "./core/Teris"
import { TerisRule } from "./core/TerisRule";
import { MoveDirction } from "./core/types";
import { GamePageViewer } from "./core/viewer/GamePageViewer";
import SquareConfig from "./core/viewer/SquareConfig";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from 'jquery'



const gameViewer = new GamePageViewer($('#panel'),$('#next'),$('#score'));
const game = new Game(gameViewer);
gameViewer.init(game);
$("#down").on('click',()=>{
})
$("#rotate").on('click',()=>{
    game.start()
})