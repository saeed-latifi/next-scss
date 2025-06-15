import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";
import Dashboard from "./Dashboard";

export default function Home() {
	return (
		<>
			<Header title="home" />
			<Dashboard />
			<Footer />
		</>
	);
}
