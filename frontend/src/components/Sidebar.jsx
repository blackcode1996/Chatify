import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Sidebar = () => {
    const channel=['first channel','second channel', 'third channel']
  return (
    <>
        <h2>Availale Channels</h2>
        <ListGroup>
            {channel.map((room,index)=>(
                <ListGroup.Item key={index}>
                    {room}
                </ListGroup.Item>
            ))}
        </ListGroup>
        <h2>Members</h2>
        
    </>
  )
}

export default Sidebar