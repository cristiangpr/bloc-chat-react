import React, { Component } from 'react';


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
  this.messagesRef.push({
  username: " ",
  content: this.state.newMessage,
  roomId: " ",
  timeStamp: this.props.firebase.database.ServerValue.TIMESTAMP,
  });
  e.target.reset();

}
  handleChange(e) {
  this.setState({ newMessage: e.target.value })
}


render() {

      return (
          <div className='messages'>
              <div className='message-list'>
                  {
                      this.state.messages.map((message, index) => {
                        console.log(message)
                        return ( <div className="message-text" key={index}>{message.content}</div>)
                      })
                  }
              </div>
                  <form onSubmit= {(e) => this.handleSubmit(e)}
                  onChange= {(e) => this.handleChange(e)}>
                    <label>
                      Message:
                      <input type="text" content={this.state.newMessage} />
                   </label>
                   <input type="submit" value="Submit" />
                 </form>

          </div>
      );
  }
}
export default MessageList;
