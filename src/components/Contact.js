import React from 'react';
import './Contact.css';

const online = {
    IsOnline : true,
    name: 'online',
}

function Contact(props) {
    return (
        <div className='Contact'>
            
            <img className='avatar' 
                src={props.avatar} 
                alt={props.name} />
        <div>
            <p className='name'>{props.name}</p>
            
            <p className='status'>
                <span className={props.online ? 'status-online' : 'status-offline'}></span>
                <span className='status-text'>{props.online ? 'online' : 'offline'}</span>
            </p>
        </div>
        </div>
    )
}

export default Contact;