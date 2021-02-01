export default function login() {
  return (
    <div className="login_p shadow-lg bg-white rounded">
      <h3>Log In</h3>
      <div className="c_inputs">
        <input type="email" className="c_input" placeholder="Email" />
        <input type="password" className="c_input" placeholder="Password" />
      </div>
      <button className="c_btn_r">Login</button>
    </div>
  );
}
