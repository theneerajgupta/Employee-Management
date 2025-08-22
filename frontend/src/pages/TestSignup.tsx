import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  employeeType?: "employee" | "admin";
  employeeId: string;
  password: string;
}

const TestLoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    employeeType: undefined,
    employeeId: "",
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
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title justify-center">Test Signup</h2>
          <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 gap-4">
            <div className="form-control mb-2">
              <label className="floating-label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="John"
                className="input input-bordered validator w-full"
                value={formData.firstName}
                name="firstName"
                onChange={handleInputChange}
                required
              />
            </div>


            <div className="form-control mb-2">
              <label className="floating-label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="input input-bordered validator w-full"
                value={formData.lastName}
                name="lastName"
                onChange={handleInputChange}
                required
              />
            </div>


            <div className="form-control mb-2">
              <label className="floating-label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="mail@example.com"
                className="input input-bordered validator w-full"
                value={formData.email}
                name="email"
                onChange={handleInputChange}
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                required
              />
            </div>


            <div className="form-control mb-2">
              <label className="floating-label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="+91 8542586256"
                className="input input-bordered validator w-full"
                value={formData.phoneNumber}
                name="phoneNumber"
                onChange={handleInputChange}
                pattern="^\+?[0-9]{10,15}$"
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

            <div className="form-control mb-2">
              <label className="floating-label">
                <span className="label-text">Employee ID</span>
              </label>
              <input
                type="text"
                placeholder="587455"
                className="input input-bordered validator w-full"
                value={formData.employeeId}
                name="employeeId"
                onChange={handleInputChange}
              />
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
