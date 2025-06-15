import styles from "./Button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "tertiary";
	size?: "small" | "medium" | "large";
	isLoading?: boolean;
}

export function Button({ variant = "primary", size = "medium", isLoading = false, className = "", children, disabled, ...props }: IButtonProps) {
	const variantClass = styles[`button--${variant}`];
	const sizeClass = styles[`button--${size}`];
	const loadingClass = isLoading ? styles["button--loading"] : "";
	const isDisabled = disabled || isLoading;

	return (
		<button className={`clicker ${styles.button} ${variantClass} ${sizeClass} ${loadingClass} ${className}`} disabled={isDisabled} aria-busy={isLoading} {...props}>
			{isLoading ? "Loading..." : children}
		</button>
	);
}
