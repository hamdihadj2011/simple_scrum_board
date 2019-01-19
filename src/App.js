import React, { Component } from 'react';
import Column from './Components/Column'
import data from './data'
import './App.css';

const direction_left=-1;
const direction_right=1;

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      columns:data
    }
  }
handleadd = columnIndex =>{
  
  const task=window.prompt('New Task')
  const card={task}
  if(!task) return
  this.setState(prevstate=>{
    const {columns}= prevstate
    columns[columnIndex].cards.push(card)
    return {columns}
    })
}

  handleMove=(columnIndex,cardIndex,direction)=>{
    this.setState(state=>{
      const {columns} =state
      const [card] =columns[columnIndex].cards.splice(cardIndex,1);
      columns[columnIndex +direction].cards.push(card)
      return {columns}
    })

  }

  render() {
    console.log(this.state.columns)
    return (
      <div className="App">
      {this.state.columns.map((column,columnIndex)=>(
        <Column 
        key={columnIndex}
        column={column} 
        columnIndex={columnIndex}
        onMoveRight={cardIndex=>this.handleMove(columnIndex,cardIndex,direction_right)}
        onMoveLeft={cardIndex=>this.handleMove(columnIndex,cardIndex,direction_left)}
        onAddCard={()=>this.handleadd(columnIndex)}
        
        />
      ))}
      </div>
    );
  }
}

export default App;
