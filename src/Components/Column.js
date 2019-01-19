import React from 'react'
import Card from './Card'
export default ({column,
    columnIndex,
    onMoveRight,
    onMoveLeft,
    onAddCard}) =>(
    <div className='column'>
        <h1>{column.name}</h1>
    { column.cards.map((card,cardIndex)=>(
            <Card 
            key={cardIndex}
            card={card}
            cardIndex={cardIndex}
            Left={columnIndex===2}
            Right={columnIndex!==2}
            MoveRight={()=>onMoveRight(cardIndex)}
            MoveLeft={()=>onMoveLeft(cardIndex)}
            
            />
            
        ))
    }
    <button onClick={onAddCard}> add </button>
    </div >
)