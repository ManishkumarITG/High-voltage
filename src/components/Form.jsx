import React from "react";

const BasicForm = () => {
  return (
    <section className="form-section">
      <div className="form-container">
        <h2>BASIC INFORMATION</h2>

        <form className="form-grid">
          {/* Row 1 */}
          <div className="form-group">
            <label>First Name*</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Last Name*</label>
            <input type="text" />
          </div>

          {/* Row 2 */}
          <div className="form-group full-width">
            <label>Email Address*</label>
            <input type="email" />
          </div>

          {/* Row 3 */}
          <div className="form-group">
            <label>Phone Number*</label>
            <input type="tel" />
          </div>

          <div className="form-group">
            <label>DOB</label>
            <input type="date" />
          </div>

          {/* Gender */}
          <div className="form-group full-width">
            <label>Gender*</label>
            <div className="radio-group">
              <label><input type="radio" name="gender" /> Male</label>
              <label><input type="radio" name="gender" /> Female</label>
              <label><input type="radio" name="gender" /> Other</label>
            </div>
          </div>

          {/* Hobbies */}
          <div className="form-group full-width">
            <label>Hobbies</label>
            <div className="checkbox-group">
              <label><input type="checkbox" /> Playing Cricket</label>
              <label><input type="checkbox" /> Watching TV</label>
              <label><input type="checkbox" /> Reading Books</label>
              <label><input type="checkbox" /> Riding Bike</label>
              <label><input type="checkbox" /> Other</label>
            </div>
          </div>

          {/* Message */}
          <div className="form-group full-width">
            <label>Message*</label>
            <textarea placeholder="Enter your message here..."></textarea>
          </div>

          {/* Terms */}
          <div className="form-group full-width">
            <div className="checkbox-vertical">
              <label><input type="checkbox" /> Subscribe to Newsletter</label>
              <label><input type="checkbox" /> Agree to Terms & Conditions</label>
              <label><input type="checkbox" /> Receive Promotional Offers</label>
            </div>
          </div>

          {/* Submit */}
          <div className="form-group full-width">
            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BasicForm;