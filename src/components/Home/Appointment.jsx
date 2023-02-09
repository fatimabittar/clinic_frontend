import React from "react";

export const Appointment = () => {
  return (
    <div className="appointment">
      <div className="appointment-title">
        <h1 className="bigger-text">
          MAKE AN <span className="yellow">APPOINTMENT</span>
        </h1>
        <h1 className="bigger-text">
          Consult With Our <br />
          Doctor
        </h1>
      </div>
      <div className="appointment-body">
        <div className="form">
          <form method="POST">
            <div className="flex">
              <div className="form-shape">
                <label htmlFor="name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="form-input"
                />
              </div>
              <div className="form-shape">
                <label htmlFor="name" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="form-input"
                />
              </div>
            </div>
            <div className="flex">
              <div className="form-shape">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="form-input"
                />
              </div>
              <div className="form-shape">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-input"
                />
              </div>
            </div>
            <div className="flex">
              <div className="form-shape">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="form-input"
                />
              </div>
              <div className="form-shape">
                <label htmlFor="time" className="form-label">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="form-input"
                />
              </div>
            </div>
            <div className="flex">
              <div className="form-shape">
                <label className="form-label form-label-2">
                  Address Details
                </label>
                <input
                  type="text"
                  name="area"
                  id="area"
                  placeholder="Enter area"
                  className="form-input"
                />
              </div>
              <div className="form-shape">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter city"
                  className="form-input"
                />
              </div>
            </div>
            <div className="flex">
              <div className="form-shape">
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter state"
                  className="form-input"
                />
              </div>
              <div className="form-shape">
                <input
                  type="text"
                  name="post-code"
                  id="post-code"
                  placeholder="Post Code"
                  className="form-input"
                />
              </div>
            </div>
            <div className="appointment-button">
              <button className="another-button">Book Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
