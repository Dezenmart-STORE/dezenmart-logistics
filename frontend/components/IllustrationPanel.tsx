import { Screen } from "./Types";
import styles from "../styles";

const illustrations: Record<Screen, string> = {
  login: "🔐",
  signup: "📱",
  forgot: "🔏",
  verify: "✅",
  "set-password": "🔑",
};

const bgColors: Record<Screen, string> = {
  login: "linear-gradient(135deg, #f0f4ff 0%, #e8ecff 100%)",
  signup: "linear-gradient(135deg, #fff4f0 0%, #ffe8e8 100%)",
  forgot: "linear-gradient(135deg, #f0f8ff 0%, #e0eeff 100%)",
  verify: "linear-gradient(135deg, #f0fff4 0%, #e0f5e8 100%)",
  "set-password": "linear-gradient(135deg, #f8f0ff 0%, #ede0ff 100%)",
};

const captions: Record<Screen, string> = {
  login: "Secure access to your account",
  signup: "Create your account in seconds",
  forgot: "We'll help you get back in",
  verify: "Confirm your identity",
  "set-password": "Choose a strong new password",
};

const allScreens: Screen[] = [
  "login",
  "signup",
  "forgot",
  "verify",
  "set-password",
];

export default function IllustrationPanel({ screen }: { screen: Screen }) {
  return (
    <div style={{ ...styles.illustration, background: bgColors[screen] }}>
      <div style={styles.illustEmoji}>{illustrations[screen]}</div>
      <div style={styles.illustDots}>
        {allScreens.map((s) => (
          <div
            key={s}
            style={{ ...styles.dot, ...(s === screen ? styles.dotActive : {}) }}
          />
        ))}
      </div>
      <p style={styles.illustCaption}>{captions[screen]}</p>
    </div>
  );
}
