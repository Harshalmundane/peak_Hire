"use client";
import { useEffect, useState } from "react";
import { featuredBatch as b } from "@/data/site";

const pad = (n) => String(n).padStart(2, "0");
export default function FeaturedBatch({ onReserve }) {
  const [left, setLeft] = useState(null);
  useEffect(() => {
    const end = Date.now() + ((b.daysAhead * 24 + b.hoursAhead) * 60 + b.minsAhead) * 60000;
    const tick = () => setLeft(Math.max(0, Math.floor((end - Date.now()) / 1000)));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const t = left === null ? [0, 0, 0, 0] : [Math.floor(left / 86400), Math.floor((left % 86400) / 3600), Math.floor((left % 3600) / 60), left % 60];
  const labels = ["Days", "Hours", "Mins", "Secs"];
  return (
    <div className="ph-batch">
      <div className="ph-batch-head">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="ph-tag-green">LIVE INSTRUCTOR-LED BATCH</span>
          <small style={{ fontSize: ".65rem", color: "#cbd5e1" }}>Seats: Only {b.seats} Left</small>
        </div>
        <h2 className="h5 fw-bold mb-2">{b.title}</h2>
        <p className="mb-0" style={{ fontSize: ".75rem", color: "#cbd5e1" }}>{b.desc}</p>
      </div>
      <div className="p-3">
        <div className="ph-count mb-3" role="timer">
          {t.map((v, i) => (
            <div key={labels[i]} className={i === 3 ? "last" : ""}><b>{pad(v)}</b><small>{labels[i]}</small></div>
          ))}
        </div>
        <ul className="list-unstyled small text-secondary mb-3">
          {b.perks.map((p) => <li key={p} className="mb-1"><i className="bi bi-check-circle-fill text-success me-2" />{p}</li>)}
        </ul>
        <div className="d-flex gap-2">
          <button className="btn btn-ph flex-grow-1 py-2 small" onClick={onReserve}>Reserve Your Seat Now</button>
          <a href="#courses" className="btn btn-ph-soft small py-2">Syllabus</a>
        </div>
      </div>
    </div>
  );
}
