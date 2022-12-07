import Card from './components/Card';
import Container from './components/Container';
import UserForm from './components/UserForm';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  
  const submit = (user) => {
    setUsers([
      ...users,
      user,
    ]);
  };
  
  return (
    <div style={{ marginTop: "15%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          {users.map(x =>
            <li key={x.email}>
              {`${x.firstname} ${x.lastname}: ${x.email}`}
            </li>)}
        </Card>
      </Container>
    </div>
  );
}

export default App;
