import React, { Component } from 'react';
import "../App.css"

class MessageList extends Component {
  constructor(props){
    super(props);

  this.messagesRef = this.props.firebase.database().ref('messages');


this.state = {
    messages: [],
    newMessage: " "
  };
}
  componentDidMount() {
         this.messagesRef.on('child_added', snapshot => {
             const message = snapshot.val();

             message.key = snapshot.key;
             this.setState({ messages: this.state.messages.concat( message ) })
           });
}

handleSubmit(e){
  e.preventDefault();
  console.log(this.props.user.displayName);
  var newMessage = {
    username: this.props.user.displayName,
    content: this.state.newMessage,
    roomId: this.props.value,
    timeStamp: this.props.firebase.database.ServerValue.TIMESTAMP,
  }
  console.log(newMessage);
  this.messagesRef.push(newMessage);
  e.target.reset();
}
  handleChange(e) {
  this.setState({ newMessage: e.target.value })
}


render() {

      return (
          <div className='messages'>
              <div className='message-list'>
                  {this.state.messages.filter((item) => item.roomId === this.props.value)
                    .map((message, index) => {
                        console.log(message);

                        return ( <div className="message-text light bg-light" key={index}><p>{this.props.user.displayName}: <br/>{message.content}</p></div>)
                      })
                  }
              </div>
                  <form onSubmit= {(e) => this.handleSubmit(e)}
                  onChange= {(e) => this.handleChange(e)}>
                    <label>
                      Message:
                      <input type="text" content={this.state.newMessage} />
                   </label>
                  <span> <input type="submit" value="Submit" className="btn btn-success"/> </span>
                 </form>

          </div>
      );
  }
}
export default MessageList;
