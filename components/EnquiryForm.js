"use client";
import { useState } from "react";
// Mock form: nothing is sent. Connect to your email/CRM/API in onSubmit later.
export default function EnquiryForm({ course }) {
  const [done, setDone] = useState(false);
  if (done)
    return (
      <div className="text-center py-3">
        <i className="bi bi-check-circle-fill text-success display-5" />
        <p className="fw-bold mt-2 mb-1">Thank you! Your enquiry is received.</p>
        <p className="text-secondary small mb-3">Our team will contact you shortly. (Demo only: no data was sent.)</p>
        <button className="btn btn-ph" onClick={() => setDone(false)}>Send another enquiry</button>
      </div>
    );
  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <div className="row g-3">
        <div className="col-md-6"><label className="form-label small fw-semibold" htmlFor="en">Name</label><input id="en" required className="form-control" placeholder="Your full name" /></div>
        <div className="col-md-6"><label className="form-label small fw-semibold" htmlFor="ee">Email</label><input id="ee" type="email" required className="form-control" placeholder="you@example.com" /></div>
        <div className="col-12"><label className="form-label small fw-semibold" htmlFor="ep">Phone</label><input id="ep" type="tel" required className="form-control" placeholder="+91 00000 00000" /></div>
        <div className="col-12"><label className="form-label small fw-semibold" htmlFor="eq">Enquiry</label><textarea id="eq" rows={4} required className="form-control" defaultValue={`I would like to know more about ${course}.`} /></div>
        <div className="col-12"><button className="btn btn-ph w-100 py-2">Send Enquiry</button></div>
      </div>
    </form>
  );
}
