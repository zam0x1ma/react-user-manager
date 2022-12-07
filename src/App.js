import Button from './components/Button';
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';
import useForm from './hooks/useForm';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [form, handleChange, reset] = useForm({
    firstname: "",
    lastname: "",
    email: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setUsers([
      ...users,
      form,
    ]);
    reset();
  };
  
  return (
    <div style={{ marginTop: "15%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input
                label="First Name"
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
                placeholder="First Name"
              />
              <Input
                label="Last Name"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                placeholder="Last Name"
              />
              <Input
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <Button>Save</Button>
            </form>
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
