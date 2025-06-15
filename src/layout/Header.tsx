import Link from "next/link";
import styles from "./Header.module.scss";
import IconHome from "@/icons/IconHome";
import IconAccount from "@/icons/IconAccount";
import { Back } from "@/components/Back";

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
					<Back />

					<Link href="/" className="clicker" aria-label="Go to home">
						<IconHome width="2rem" hanging="2rem" className="primary" />
					</Link>
				</div>
			</div>
		</header>
	);
}
