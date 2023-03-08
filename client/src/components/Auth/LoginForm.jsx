export default function LoginForm({ handleChange, handleSubmit, userData }) {
  return (
    <div className="login-form">
      Login Form
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="identifier"
          placeholder="identifier"
          value={userData.identifier}
          type="email"
        />
        <input
          onChange={handleChange}
          name="password"
          placeholder="Password"
          value={userData.password}
          type="password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
