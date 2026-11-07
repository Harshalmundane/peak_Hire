"use client";
import { useState, useEffect } from "react";
import Modal from "./Modal";

// Mock lead form: nothing is sent anywhere.
export default function LeadModal({ lead, onClose }) {
  const [done, setDone] = useState(false);
  useEffect(() => { if (lead) setDone(false); }, [lead]);
  const submit = (e) => { e.preventDefault(); setDone(true); };
  return (
    <Modal show={!!lead} title={lead?.title} onClose={onClose}>
      {done ? (
        <div className="text-center py-3">
          <i className="bi bi-check-circle-fill text-success display-5" />
          <p className="fw-bold mt-2 mb-1">Request received</p>
          <p className="text-secondary small">A counselor will contact you shortly. (Demo only: no data was sent.)</p>
          <button className="btn btn-ph" onClick={onClose}>Close</button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <p className="text-secondary small">{lead?.subtitle}</p>
          <div className="mb-3"><label className="form-label small fw-semibold" htmlFor="ln">Full name</label><input id="ln" required className="form-control" /></div>
          <div className="mb-3"><label className="form-label small fw-semibold" htmlFor="lp">Phone number</label><input id="lp" required type="tel" className="form-control" /></div>
          <div className="mb-3"><label className="form-label small fw-semibold" htmlFor="le">Email</label><input id="le" required type="email" className="form-control" /></div>
          <button className="btn btn-ph w-100">Submit request</button>
        </form>
      )}
    </Modal>
  );
}
