import React, { Component } from 'react';

class UserDetails extends Component {
  constructor(props){
    super(props);
    this.userData = this.props.data.filter(user => user._id == this.props.match.params.postID)
    console.log(this.userData);
  }

  render() {
    const user = this.userData[0];
    console.log(user);
    return (
      <div className="row">
        <div className="col-sm-offset-3 col-sm-6">
          <div className="panel panel-success ">
            <div className="panel-heading ">
               <p className="text-center">{user.name}</p>
            </div>
            <div className="panel-body">
              <div className="text-center">
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.description}</p>
              </div>
            </div>
           </div>

         </div>
        </div>
    );
  }

}

export default UserDetails;
