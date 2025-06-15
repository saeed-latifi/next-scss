import styles from "./Input.module.scss";

interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
	isLoading?: boolean;
}

export function Input({ isLoading = false, className = "", disabled, ...props }: IInputProps) {
	const isDisabled = disabled || isLoading;

	return <input type="text" className={`clicker ${styles.input} ${className}`} disabled={isDisabled} aria-busy={isLoading} {...props} />;
}
