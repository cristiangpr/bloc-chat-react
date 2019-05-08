import React, { Component } from 'react';


class User extends Component {


    componentDidMount(){

  this.props.firebase.auth().onAuthStateChanged( user => {
    console.log(user); if ( user=== null){
      user = {displayName: "Guest"}
    }
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

  return this.props.user.displayName;
}


render(){
return (
<div>


     <input type="button" value="Sign-in" className="btn btn-success" onClick = {(e) => this.handleSignIn(e)} />
  <span>   <input type="button" value="Sign-out" className="btn btn-danger" onClick ={(e) => this.handleSignOut(e)}/></span>

<p>{this.displayUser()}
</p>
</div>

);
}
}
export default User;
