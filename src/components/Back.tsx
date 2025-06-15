"use client";

import IconBack from "@/icons/IconBack";
import { useRouter } from "next/navigation";

export function Back() {
	const router = useRouter();
	return (
		<button onClick={() => router.back()} className="clicker" aria-label="Go to home">
			<IconBack width="2rem" hanging="2rem" className="primary" />
		</button>
	);
}
