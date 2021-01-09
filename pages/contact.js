export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="main_c">
        <div className="acc_em">
          <label>
            Name
            <input
              placeholder="Full Name"
              type="text"
              className="form-control"
            />
          </label>
          <label>
            Email
            <input placeholder="Email" type="email" className="form-control" />
          </label>
        </div>
        <label className="masg">
          Massage:
          <textarea
            placeholder="Ask us anything you want😊!"
            className="form-control"
            rows="5"
          />
        </label>
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}
