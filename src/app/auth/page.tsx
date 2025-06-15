import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";
import Link from "next/link";
import Account from "./Account";

export default function Home() {
	return (
		<>
			<Header title="home" />
			<Account />
			<Footer />
		</>
	);
}
