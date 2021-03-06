import React, { Component } from 'react';
import '../App.css'
class RoomList extends Component {
  constructor(props){
    super(props);

this.state = {
    rooms: [],
    newRoomName: " "
  };

  this.roomsRef = this.props.firebase.database().ref('rooms');

}

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
       room.key = snapshot.key;
    this.setState({ rooms: this.state.rooms.concat( room ) });
    });
  }



handleSubmit(e){
  e.preventDefault();
  this.roomsRef.push({
  name: this.state.newRoomName});
   e.target.reset();

}
  handleChange(e) {
  this.setState({ newRoomName: e.target.value })

}




  render() {
        console.log(this.state.rooms.length);
        return (
            <div className='rooms'>
                <div className='room-list'>
                <form onSubmit= {(e) => this.handleSubmit(e)}
                onChange= {(e) => this.handleChange(e)}>
                  <label>

                    <input type="text" name={this.state.newRoomName} />
                 </label>
                 <input type="submit" value="New Room" className="btn btn-secondary"/>
               </form>
                    {
                        this.state.rooms.map((room, index) => {
                          return ( <div className="room-info" key={index} onClick={() => this.props.action(room)} >{room.name}</div>)
                        })
                    }
                </div>


            </div>
        );
    }
  }
export default RoomList;
