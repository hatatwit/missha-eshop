import FormInput from "./FormInput";

import "./Form.scss";

export default function LoginForm({ handleChange, handleSubmit, userData }) {
  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="identifier"
          value={userData.identifier}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={userData.password}
        />
        <button>LOG IN</button>
      </form>
    </div>
  );
}
