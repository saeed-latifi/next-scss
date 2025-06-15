import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";

interface IHeaderProps extends React.HTMLAttributes<HTMLElement> {
	title?: string;
	showBackButton?: boolean;
	variant?: "light" | "dark";
}

export function Header({ title = "Page Title", showBackButton = true, variant = "light", className = "", ...props }: IHeaderProps) {
	const router = useRouter();
	const headerClass = `${styles.header} ${styles[`header--${variant}`]} ${className}`;

	return (
		<header className={headerClass} {...props}>
			<div className={styles.header__content}>
				<div className={styles.header__left}>
					{showBackButton && (
						<button onClick={() => router.back()} className={styles.header__button} aria-label="Go back">
							← Back
						</button>
					)}
				</div>

				<h1 className={styles.header__title}>{title}</h1>

				<div className={styles.header__right}>
					<Link href="/" className={styles.header__button} aria-label="Go to home">
						Home
					</Link>
				</div>
			</div>
		</header>
	);
}
