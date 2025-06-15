import Link from "next/link";
import styles from "./Header.module.scss";
import IconHome from "@/icons/IconHome";
import IconBack from "@/icons/IconBack";
import IconAccount from "@/icons/IconAccount";

interface IHeaderProps extends React.HTMLAttributes<HTMLElement> {
	title?: string;
	variant?: "light" | "dark";
}

export function Header({ title = "Page Title", className = "", ...props }: IHeaderProps) {
	const headerClass = `${styles.header}  ${className}`;

	return (
		<header className={headerClass} {...props}>
			<div className={styles.header__content}>
				<Link href="/auth" className="clicker" aria-label="Go to home">
					<IconAccount width="2rem" hanging="2rem" className="primary" />
				</Link>

				<h1 className={styles.header__title}>{title}</h1>

				<div className={styles.header__nav}>
					<Link href="/" className="clicker" aria-label="Go to home">
						<IconBack width="2rem" hanging="2rem" className="primary" />
					</Link>

					<Link href="/" className="clicker" aria-label="Go to home">
						<IconHome width="2rem" hanging="2rem" className="primary" />
					</Link>
				</div>
			</div>
		</header>
	);
}
