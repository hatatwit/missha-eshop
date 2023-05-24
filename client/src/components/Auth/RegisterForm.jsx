import FormInput from "./FormInput";

import "./Form.scss";

export default function RegisterForm({ handleChange, handleSubmit, userData }) {
  return (
    <div className="register-form">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={userData.email}
        />
        <FormInput
          label="Username"
          type="text"
          required
          onChange={handleChange}
          name="username"
          value={userData.username}
        />
         <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={userData.password}
        />
        <button>SIGN UP</button>
      </form>
    </div>
  );
}
