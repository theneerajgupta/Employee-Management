import React, { useState } from "react";
import "../index.css";
interface FormData {
  userId: string;
  email: string;
  password: string;
}

const TestLoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    userId: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card">
        <div className="card-body items-center text-center">
          <form
            onSubmit={handleSubmit}
            className="p-6 gap-4 glass-card w-[400px]"
          >
            <div className="text-center mb-4">
              <h2 className="card-title justify-center bold text-2xl">
                Test Login
              </h2>
            </div>
            <div className="gap-4">
              <div className="form-control mb-2">
                <label className="floating-label">
                  <span className="label-text">User ID or Email</span>
                </label>
                <input
                  type="text"
                  placeholder="UserId or email"
                  className="input input-bordered validator w-full"
                  value={formData.userId || formData.email}
                  name="userId"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-control mb-2 w-full">
                <label className="floating-label">
                  <span className="label-text">Employee Type</span>
                </label>
                <select
                  className="input input-bordered menu dropdown-content bg-base-100 rounded-box z-1 p-2 w-full"
                  value={formData.employeeType || ""}
                  name="employeeType"
                  onChange={handleInputChange}
                >
                  <option disabled value="">
                    Choose Employee
                  </option>
                  <option value="employee">Employee</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="form-control mb-4">
                <label className="floating-label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="********"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  minLength="8"
                  className="input input-bordered validator w-full"
                  value={formData.password}
                  name="password"
                  onChange={handleInputChange}
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
              </div>
            </div>

            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-outline btn-info">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestLoginForm;
