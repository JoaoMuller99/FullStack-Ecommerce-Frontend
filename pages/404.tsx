export default function PaginaNaoEncontrada() {
  return (
    <div style={{ width: "100%", height: "70vh", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
      <h3 style={{ fontSize: "2rem" }}>404</h3>
      <span style={{ width: "1px", height: "40px", backgroundColor: "black" }}></span>
      <h4 style={{ fontSize: "1.3rem", fontWeight: "400" }}>Página não encontrada!</h4>
    </div>
  );
}
