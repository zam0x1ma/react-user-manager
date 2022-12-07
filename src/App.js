import useForm from './hooks/useForm';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container';

function App() {
  const [form, handleChange] = useForm({ firstname: "", lastname: "" });
  
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
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default App;
