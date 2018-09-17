import React, { Component } from 'react';


class User extends Component {


    componentDidMount(){

  this.props.firebase.auth().onAuthStateChanged( user => {
  this.props.setUser(user);
});
    }
    handleSignIn(e){
      e.preventDefault();
      const provider = new this.props.firebase.auth.GoogleAuthProvider();
      this.props.firebase.auth().signInWithPopup( provider );

}
   handleSignOut(e){
     this.props.firebase.auth().signOut();
   }

displayUser(){
  if
    (this.props.user === null){

  return "Guest";
}
else {
  return <p>{this.props.user.displayName}</p>;
}
}

render(){
return (
<div>


     <input type="button" value="Sign-in" onClick = {(e) => this.handleSignIn(e)} />
     <input type="button" value="Sign-out" onClick ={(e) => this.handleSignOut(e)}/>

<div>{this.displayUser()}
</div>
</div>

);
}
}
export default User;
