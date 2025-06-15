import React from "react";
import styles from "./Footer.module.scss";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__content}>
				<p>© {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
}
