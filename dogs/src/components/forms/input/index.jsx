import styles from "./input.module.css";

export function Input({ label, type, name, value, onChange, error, onBlur }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
