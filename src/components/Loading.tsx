"use client";

import styles from "./Loading.module.scss";

export default function Loading({ height = "3rem", width = "3rem" }: { height?: string; width?: string }) {
	return (
		<div className={styles["lds-ripple"]} style={{ width, height }}>
			<div></div>
			<div></div>
		</div>
	);
}
