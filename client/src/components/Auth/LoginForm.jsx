import FormInput from "./FormInput";

import "./Form.scss";

export default function LoginForm({ handleChange, handleSubmit, userData }) {
  return (
    <div className="login-form">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
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
