import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import data from './data.json';
import TableRow from './TableRow';
import UserDetails from './UserDetails';

const Data= data;

class User extends Component {
    constructor(props){
      super(props);
      this.state ={data:Data};
  }
  render() {
    let User = this.state.data.map(user=>
       <TableRow key={user._id} user={user}/>
     )

    return (
      <div className="container">
      <Switch>
        <Route exact path="/" render={()=>(
          <table className="table table-default">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {User}
            </tbody>
          </table>
      )}/>
       <Route path="/:postID" render={(props)=> (
           <UserDetails {...this.state} {...props}/>
         )}/>
    </Switch>
      </div>
    );
  }

}

export default User;
