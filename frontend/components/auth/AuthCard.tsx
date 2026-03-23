import { ReactNode } from "react";
import Logo from "../Logo";
import IllustrationPanel from "../IllustrationPanel";
import { Screen } from "../Types";
import styles from "../../styles";

interface AuthCardProps {
  screen: Screen;
  children: ReactNode;
}

export default function AuthCard({ screen, children }: AuthCardProps) {
  return (
    <div style={styles.card} className="fade-in">
      {/* Left Panel — form content */}
      <div style={styles.left}>
        <Logo />
        {children}
      </div>

      {/* Right Panel — illustration */}
      <div style={styles.right}>
        <IllustrationPanel screen={screen} />
      </div>
    </div>
  );
}
