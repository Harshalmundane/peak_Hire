import { plans } from "@/data/site";
export default function PricingSection({ onSelect }) {
  const btn = { light: "btn-ph-soft", primary: "btn-ph", dark: "btn-ph-dark" };
  return (
    <section id="pricing" className="ph-section">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 560 }}>
          <div className="ph-eyebrow mb-1">Transparent Investment</div>
          <h2 className="ph-h2">Flexible Learning Tier Options</h2>
          <p className="text-secondary small">Choose the model that matches your current schedule, experience level, and career trajectory.</p>
        </div>
        <div className="row g-4 justify-content-center">
          {plans.map((p) => (
            <div key={p.key} className="col-12 col-md-6 col-lg-4">
              <div className={`ph-card ph-plan ${p.variant === "primary" ? "primary" : ""}`}>
                {p.popular && <span className="ph-popular">Most Popular Choice</span>}
                <div className={`ph-eyebrow ${p.popular ? "text-info" : ""}`} style={p.popular ? {} : { color: "#6b7280" }}>{p.eyebrow}</div>
                <h3 className="h5 fw-bold mt-1">{p.name}</h3>
                <div><span className="display-6 fw-bold">{p.price}</span> <small className={p.popular ? "text-white-50" : "text-secondary"}>{p.note}</small></div>
                <ul>
                  {p.features.map((f) => (
                    <li key={f.t} className={f.on ? "" : "off"}>
                      <i className={`bi ${f.on ? "bi-check-lg text-success" : "bi-x-lg"}`} />{f.t}
                    </li>
                  ))}
                </ul>
                <button className={`btn ${btn[p.variant]} w-100 py-2`} onClick={() => onSelect(p)}>{p.cta}{p.popular ? " →" : ""}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
