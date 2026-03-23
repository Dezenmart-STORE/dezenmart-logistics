import styles from "../styles";

export default function Logo() {
  return (
    <div style={styles.logo}>
      <div style={styles.logoIcon}>
        <span style={{ color: "#ff2d2d", fontSize: 18, fontWeight: 800 }}>
          D
        </span>
      </div>
      <span style={styles.logoText}>DEZENMART</span>
    </div>
  );
}
