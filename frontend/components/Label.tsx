import styles from "../styles";

export default function Label({ text }: { text: string }) {
  return <p style={styles.label}>{text}</p>;
}
