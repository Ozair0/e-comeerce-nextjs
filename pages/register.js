export default function register() {
  return (
    <div className="register_p shadow-lg bg-white rounded">
      <h3>Register</h3>
      <div className="c_inputs">
        <input type="text" className="c_input" placeholder="Name" />
        <input type="text" className="c_input" placeholder="Last Name" />
        <input type="email" className="c_input" placeholder="Email" />
        <input type="email" className="c_input" placeholder="Confirm Email" />
      </div>
      <div className="c_inputs">
        <input type="password" className="c_input" placeholder="Password" />
        <input
          type="password"
          className="c_input"
          placeholder="Confirm Password"
        />
        {/* <input type="date" className="c_input" placeholder="Date Of Birth" /> */}
      </div>
      <button className="c_btn_r">Register</button>
    </div>
  );
}
