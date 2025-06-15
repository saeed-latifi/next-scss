import type { Metadata } from "next";
import "../styles/globals.scss";

export const metadata: Metadata = {
	title: "Decamond sample",
	description: "Decamond sample",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="fa">
			<body>{children}</body>
		</html>
	);
}
