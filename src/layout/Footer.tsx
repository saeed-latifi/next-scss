import React from "react";
import styles from "./Footer.module.scss";

interface IFooterProps extends React.HTMLAttributes<HTMLElement> {
	variant?: "light" | "dark";
	companyName?: string;
	year?: number;
	links?: Array<{ text: string; href: string }>;
}

export function Footer({ variant = "light", companyName = "Company Name", year = new Date().getFullYear(), links = [], className = "", ...props }: IFooterProps) {
	const footerClass = `${styles.footer} ${styles[`footer--${variant}`]} ${className}`;

	return (
		<footer className={footerClass} {...props}>
			<div className={styles.footer__content}>
				<p className={styles.footer__copyright}>
					© {year} {companyName}. All rights reserved.
				</p>

				{links.length > 0 && (
					<nav className={styles.footer__nav}>
						<ul className={styles.footer__links}>
							{links.map((link, index) => (
								<li key={index} className={styles.footer__linkItem}>
									<a href={link.href} className={styles.footer__link}>
										{link.text}
									</a>
								</li>
							))}
						</ul>
					</nav>
				)}
			</div>
		</footer>
	);
}
