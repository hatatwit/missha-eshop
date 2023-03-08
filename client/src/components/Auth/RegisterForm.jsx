export default function RegisterForm({ handleChange, handleSubmit, userData }) {
  return (
    <div className="register-form">
      Register Form
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          placeholder="email"
          value={userData.email}
          type="email"
        />
        <input
          onChange={handleChange}
          name="username"
          placeholder="username"
          value={userData.username}
          type="text"
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
