export default function QuoteForm() {
  return (
    <div 
      className="quote-card" 
      id="quote" 
      style={{ padding: "30px", overflow: "hidden", display: "block", background: "#fff", borderRadius: "10px", textAlign: "center" }}
    >
      <h3 style={{ color: "var(--teal)", marginBottom: "20px", fontSize: "1.5rem" }}>Florida Concrete Coating</h3>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "15px", fontSize: "1rem", color: "#333", alignItems: "center" }}>
        <p style={{ display: "flex", alignItems: "center", gap: "10px", margin: 0 }}>
          <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 20, height: 20, fill: "none", stroke: "var(--teal)", strokeWidth: 2 }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          1200 Payne Stewart Dr, Davenport 33896
        </p>
        
        <p style={{ display: "flex", alignItems: "center", gap: "10px", margin: 0 }}>
          <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 20, height: 20, fill: "var(--teal)" }}>
            <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.9Z" />
          </svg>
          <a href="tel:13214970330" style={{ color: "var(--teal)", textDecoration: "none", fontWeight: "bold" }}>(321) 497-0330</a>
        </p>

        <p style={{ display: "flex", alignItems: "center", gap: "10px", margin: 0 }}>
          <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 20, height: 20, fill: "none", stroke: "var(--teal)", strokeWidth: 2 }}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          <a href="mailto:sales@flconcretecoating.com" style={{ color: "var(--teal)", textDecoration: "none", fontWeight: "bold" }}>sales@flconcretecoating.com</a>
        </p>
      </div>
    </div>
  );
}
