import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      turn:"X",
      gameEnded:false,
      winner:undefined,
      board:Array(9).fill(''),
      count:0,
      time:1
    }
  }

  
  clicked(e){
    if(this.state.gameEnded!=true){
    if(this.state.board[e.dataset.square]==''){
    this.state.board[e.dataset.square]=this.state.turn;
    console.log(this.state.board);
    if(e.id=="4"){
      var obj = document.getElementById("text");
      obj.innerText = this.state.turn;
      
    }
    else{
      e.innerText=this.state.turn;
    }
    
    e.style.backgroundColor = "#ff0000";
    this.setState({turn:this.state.turn=='X'?'O':'X',
  board:this.state.board,
  count:this.state.count+1
  })
}


var result= this.checkwinner();
if(result=='X'){
this.setState({
  gameEnded :  true,
  winner:'X',
}
);
console.log('this.state.gameEnded');
}

else if(result=='O'){
  this.setState({
    gameEnded :  true,
    winner:'O',
  }
  );
  console.log('this.state.gameEnded');
}

if(result!='O'|'X'){
  setTimeout(() => {
    if (this.state.turn=='O'){
      var moves=[[0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6], [0,1,2],[3,4,5],[6,7,8]];
      var board=this.state.board;
      for (let i=0;i<moves.length;i++){
        if(board[moves[i][0]]==="X"&&board[moves[i][1]]==='X'&&board[moves[i][2]]===''){
        
      //     do{var random= Math.floor(Math.random()*2);}
      // while(board[moves[i][random]]!='');
      this.clicked(document.querySelectorAll('.square')[moves[i][2]]);
    //   console.log("I am here1")
      return
        }
        else if(board[moves[i][0]]==="X"&&board[moves[i][2]]=='X'&&board[moves[i][1]]===''){
          this.clicked(document.querySelectorAll('.square')[moves[i][1]]);
          return
        }
        else if( board[moves[i][1]]==="X"&&board[moves[i][2]]==='X' &&board[moves[i][0]]===''){
          this.clicked(document.querySelectorAll('.square')[moves[i][0]]);
          return
        }
      }
      if(this.state.count<9){
        do{var random= Math.floor(Math.random()*9);}
        while(this.state.board[random]!=='');
        this.clicked(document.querySelectorAll('.square')[random]);
        console.log("I am here2") 
      }     
    }
  }, 750);
    }
    }
  }

  checkwinner(){
    var moves=[[0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6], [0,1,2],[3,4,5],[6,7,8]];
    var board=this.state.board;
    for (let i=0;i<moves.length;i++){
      if(board[moves[i][0]]===board[moves[i][1]]&&board[moves[i][1]]===board[moves[i][2]]){
        if(board[moves[i][0]]){
          document.getElementById(moves[i][0]).style.color="green";
          document.getElementById(moves[i][1]).style.color="green";
          document.getElementById(moves[i][2]).style.color="green";
        } 
        return board[moves[i][0]];
      }
    }

  }


  refreshPage(){ 
    window.location.reload(); 
}

componentDidMount() {
//this.setState({ time: 0 })

setInterval(() => this.setState({ time:this.state.time+1 }), 1000);
}
  
  render(){
  return (
    
 <div id ="game">
   <div id ="head">
     Tic tac toe
   </div>
   <div id = "board" onClick={(e)=>this.clicked(e.target)}>
     <div className ="square" data-square="0" id="0"></div>
     <div className ="square" data-square="1" id="1"></div>
     <div className ="square" data-square="2" id="2"></div>
     <div className ="square" data-square="3" id="3"></div>
     <div className ="square" data-square="4" id="4">
     <button type="button" className="button" onClick={ this.refreshPage }>Refresh> </button> 
     <div className="time">{this.state.time}</div>
     <p id="text"></p>
     </div>
     <div className ="square" data-square="5" id="5"></div>
     <div className ="square" data-square="6" id="6"></div>
     <div className ="square" data-square="7" id="7"></div>
     <div className ="square" data-square="8" id="8"></div>
   </div>
 </div>
  );
  }
}

export default App;
