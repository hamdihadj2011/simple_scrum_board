import React from 'react'
export default ({
    card,
    Left,
    Right,
    MoveLeft,
    MoveRight
    }) =>(
    <div className='card'>
    {Left && <button onClick={MoveLeft}>{'<'}</button>}
        <span>{card.task}</span>
    {Right && <button onClick={MoveRight}>{'>'}</button>}
    </div>
)