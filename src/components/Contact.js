import React from 'react';
import './Contact.css';

class Contact extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        online: props.online,
      };
    }
    render() {
      return(
        <div className='Contact'>
            <img className='avatar'
                 src={this.props.avatar}>
            </img>
            <figure>
                <div className='name'>
                    {this.props.name}
                </div>
                <div className='status'
                    onClick={event =>{
                    const newStatus= !this.state.online;
                    this.setState({ online: newStatus} );
                    console.log(this.state.online)}}>
                {this.state.online ? <i className='status-online'></i> : <i className='status-offline'></i>}
                {this.state.online ? 'Online' : 'Offline'}
                </div>
            </figure>
        </div>
      );
    } 
}  

export default Contact;