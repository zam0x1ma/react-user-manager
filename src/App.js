import Button from './components/Button';
import Card from './components/Card';
import Container from './components/Container';
import Input from './components/Input';
import useForm from './hooks/useForm';

function App() {
  const [form, handleChange] = useForm({
    firstname: "",
    lastname: "",
    email: ""
  });
  
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form>
            <Input
              label="First Name"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
            />
            <Input
              label="Last Name"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
            />
            <Input
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <Button>Save</Button>
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default App;
