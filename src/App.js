import React, {useState}from 'react';
import { UsersList } from './components/users-list/users-list';
import { AddUser } from './components/users/add-user';


function App() {
  const [users, setUsers] = useState([])
  const onAddUser = user => {
    setUsers((prevData) => {
      return [user, ...prevData]
    })
    console.log('user', user)
  }
  return (
    <div>
      <AddUser onAddUser={onAddUser}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
