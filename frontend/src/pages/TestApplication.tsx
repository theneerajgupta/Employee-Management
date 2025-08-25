// type TestApplicationProps = {
//     firstName?: string;
//     middleName?: string;
//     lastName?: string;
//     dateOfBirth?: Date;
//     countryCode?: string;
//     phoneNumber?: string;
//     emailId?: string;
//     employeeType?: "employee" | "admin";
//     paymentPreference?: "cash" | "card" | "upi";
//     applicationType?:
//         | "personal profile setup"
//         | "travel approval request"
//         | "workplace harrassment complaint"
//         | "leave request & salary advance"
//         | "equipment purchase"
//         | "expense reimbursement";
// };

// Test Application
//
// Name - First Middle Last
// Date of Birth
// Phone Number - Country Code & Number
// Email ID
// Address
// Application Type (Dropdown)
//     Personal Profile Setup
//     Travel Approval Request
//     Workplace Harassment Complaint
//     Leave Request & Salary Advancement
//     Equipment Purchase
//     Expense Reimbursement
// Subject
// Description
// Payment Preference
//     Cash
//     Card
//     UPI
// Communication Preference
//     Email
//     SMS
//     Phone Call
//     WhatsApp
// Documetn Upload
// Submit & Review, Cancel -> Buttons

export const TestApplication = () => {
    return (
        <div className="bg-base-200 w-full p-8 grid gap-4 min-w-[1000px] max-w-[80%]">
            <div>
                <h1>Test Application</h1>
                <p>
                    Fill this application with accurate personal and request
                    details. Fields marked * are required.
                </p>
            </div>

            <form action="">
                <fieldset className="form-control bg-base-200 border-base-300 rounded-box border p-4 pb-6 gap-2">
                    <legend className="fieldset-legend text-base">
                        Employee Details
                    </legend>

                    <div className="grid grid-cols-3 gap-2">
                        <label className="input w-full validator">
                            <span className="label">First Name</span>
                            <input type="text" placeholder="John" />
                        </label>
                        <label className="input w-full validator">
                            <span className="label">Middle Name</span>
                            <input type="text" placeholder="Fitzgerald" />
                        </label>
                        <label className="input w-full validator">
                            <span className="label">Last Name</span>
                            <input type="text" placeholder="Kennedy" />
                        </label>
                        <label className="input w-full validator">
                            <span className="label">Email</span>
                            <input
                                type="email"
                                placeholder="mail@site.com"
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                title="Please enter a valid email address (e.g. user@example.com)"
                            />
                        </label>
                        <label className="input w-full validator">
                            <span className="label">Phone</span>
                            <input
                                type="tel"
                                className="tabular-nums"
                                required
                                placeholder="Must be 10 digits"
                                pattern="[0-9]*"
                                minlength="10"
                                maxlength="10"
                                title="Must be 10 digits"
                            />
                        </label>
                    </div>
                </fieldset>

                <fieldset className="form-control bg-base-200 border-base-300 rounded-box border p-4 pb-6 gap-2">
                    <legend className="fieldset-legend text-base">
                        Address
                    </legend>

                    <div className="grid grid-cols-3 gap-2">
                        <input
                            type="text"
                            placeholder="Addrss Line 1"
                            className="input w-full validator"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Addrss Line 2"
                            className="input w-full"
                        />
                        <input
                            type="text"
                            placeholder="Addrss Line 3"
                            className="input w-full"
                        />
                        <input
                            type="text"
                            placeholder="Pin Code"
                            className="input w-full"
                            pattern="[0-9]*"
                            minlength="5"
                            maxlength="6"
                            required
                        />
                        <select
                            defaultValue="Select State"
                            className="select w-full"
                        >
                            <option disabled={true}>Maharashtra</option>
                            <option>Gujrat</option>
                            <option>Punjab</option>
                            <option>Tamil Nadu</option>
                            <option>Uttar Pradesh</option>
                            <option>Goa</option>
                            <option>Rajasthan</option>
                        </select>
                        <select
                            defaultValue="Select Country"
                            className="select w-full"
                        >
                            <option disabled={true}>India</option>
                            <option>Japan</option>
                            <option>United States of America</option>
                            <option>Canada</option>
                            <option>Denmark</option>
                            <option>Brazil</option>
                        </select>
                    </div>
                </fieldset>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}
