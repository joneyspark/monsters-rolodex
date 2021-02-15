import React from 'react'
import './card-list-styles.css'
import { Card } from './Card.component'

export  const CardList = props => {
    
    console.log(props.monster)
    
  
    
    return (
        <div className="card-list">

            {
                props.monster
                ? 
                props.monster.map(monster => (
                    <Card key={monster.id} monster={monster} />
                ))
                :
                <h1>Loading...</h1>
            }
        </div>
    )
}
