import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";
import Home from "./Home";

export default function HomePage() {
	return (
		<>
			<Header title="home" />
			<Home />
			<Footer />
		</>
	);
}
