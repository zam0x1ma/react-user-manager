import Button from './Button';
import Input from './Input';
import useForm from '../hooks/useForm';

const UserForm = ({ submit }) => {
  const [form, handleChange, reset] = useForm({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(form);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default UserForm;
