// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 2500);
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* NAVBAR */}
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1 px-4">
          <a className="btn btn-ghost normal-case text-xl">EmpManage</a>
        </div>
        <div className="flex-none gap-2">
          <button className="btn btn-sm btn-ghost">Docs</button>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => showToast("Primary action clicked")}
          >
            Primary
          </button>
          <button className="btn btn-sm btn-outline" onClick={() => setShowModal(true)}>
            Open Modal
          </button>
        </div>
      </div>

      {/* HERO */}
      <header className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Employee Management — Tailwind + DaisyUI test</h1>
          <p className="text-sm text-gray-500 mb-6">This page exercises common UI components.</p>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title">Profile</h2>
                <p>Simple card demonstrating spacing, typography and buttons.</p>
                <div className="card-actions">
                  <button className="btn btn-primary btn-sm" onClick={() => showToast("Profile saved")}>
                    Save
                  </button>
                  <button className="btn btn-ghost btn-sm">Edit</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title">Stats</h2>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="https://placehold.co/80x80" alt="avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">32</div>
                    <div className="text-sm opacity-50">Active employees</div>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="badge">HR</span>
                  <span className="badge badge-ghost">Engineering</span>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title">Quick Form</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    showToast("Form submitted");
                  }}
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Jane Doe" className="input input-bordered" />
                  </div>

                  <div className="form-control mt-3">
                    <label className="label">
                      <span className="label-text">Role</span>
                    </label>
                    <select className="select select-bordered w-full">
                      <option>Engineer</option>
                      <option>Designer</option>
                      <option>HR</option>
                    </select>
                  </div>

                  <div className="card-actions justify-end mt-4">
                    <button type="submit" className="btn btn-sm btn-primary">
                      Create
                    </button>
                    <button type="button" className="btn btn-sm btn-outline" onClick={() => showToast("Cancelled")}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Footer-ish actions */}
          <div className="mt-8 flex gap-3">
            <button className="btn btn-accent" onClick={() => showToast("Accent!")}>Accent</button>
            <button className="btn btn-success" onClick={() => showToast("Success!")}>Success</button>
            <button className="btn btn-error" onClick={() => showToast("Error!")}>Error</button>
          </div>
        </div>
      </header>

      {/* MODAL */}
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Demo modal</h3>
            <p className="py-4">This is a sample DaisyUI modal. Use it to verify overlay, spacing and buttons.</p>
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => {
                  setShowModal(false);
                  showToast("Modal closed");
                }}
              >
                Close
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShowModal(false);
                  showToast("Modal confirmed");
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST (simple) */}
      {toastMsg && (
        <div className="fixed right-5 bottom-5 z-50">
          <div className="toast toast-end">
            <div className="alert alert-info shadow-lg">
              <div>
                <span>{toastMsg}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
