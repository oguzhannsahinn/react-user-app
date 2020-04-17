import React, {Component} from 'react'
import User from './User'

class Users extends Component{

    render() {

        const {users, deleteUser} = this.props;

        return(
            <table className="table table-light">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {

                        users.map(user => {
                            const {id, name, email} = user;
                            
                            return <User
                                deleteUser = {deleteUser}
                                key = {id}
                                id = {id}
                                name = {name}
                                email = {email}
                            />
                        })
                    }
                </tbody>

            </table>
        )
    }

}

export default Users