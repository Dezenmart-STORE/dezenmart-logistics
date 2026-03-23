import styles from "../styles";

interface SocialLoginProps {
  label?: string;
}

export default function SocialLogin({ label = "in" }: SocialLoginProps) {
  const providers = [
    { icon: "f", color: "#1877f2" },
    { icon: "G", color: "#ea4335" },
    { icon: "🍎", color: "#fff" },
  ];

  return (
    <>
      <div style={styles.dividerRow}>
        <div style={styles.dividerLine} />
        <span style={styles.dividerText}>Or sign {label} with</span>
        <div style={styles.dividerLine} />
      </div>
      <div style={styles.socialRow}>
        {providers.map((p, i) => (
          <button key={i} style={styles.socialBtn} className="social-btn">
            <span style={{ color: p.color, fontSize: 15, fontWeight: 700 }}>
              {p.icon}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
