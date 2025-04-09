import { useGhostCounter } from "../hooks/useGhostCounter";

const GlobalGhostCounter = () => {
  const count = useGhostCounter();

  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        background: "rgba(0, 0, 0, 0.7)",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "8px",
        fontFamily: "monospace",
        zIndex: 1000,
      }}
    >
    Total Ghosts Caught: {count ?? "Loading..."}
    </div>
  );
};

export default GlobalGhostCounter;
