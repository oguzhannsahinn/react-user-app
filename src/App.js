import React, {Component} from 'react';
import AddUser from './components/AddUser'
import Users from './components/Users'

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      users :[
        {
          id: "1",
          name: "Büşra Özmen",
          email: "busrorororo@gmail.com"
        },
        {
          id: "2",
          name: "Oğuz Han Şahin",
          email: "oguzhansahin@gmail.com"
        },
        {
          id: "3",
          name: "vişne",
          email: "visne@gmail.com"
        }
      ]
    }

    this.deleteUser = this.deleteUser.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
  }
  
  deleteUser(id) {

    let updatedUsers = this.state.users;

    updatedUsers = updatedUsers.filter(user => user.id !== id)
    this.setState({
      users : updatedUsers
    })
  }

  addNewUser(newUser) {
    let updatedUsers = this.state.users;

    updatedUsers.push(newUser);

    this.setState({
      users : updatedUsers
    })
  }

  render() {
    return (
      <div className="App">
        <h2>User App</h2>
        <hr />
        <AddUser addNewUser= {this.addNewUser} />
        <hr />
        <Users deleteUser = {this.deleteUser}   users = {this.state.users} />
      </div>
    );
  }

}

export default App;