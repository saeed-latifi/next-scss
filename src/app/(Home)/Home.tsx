"use client";

import { Button } from "@/components/Button";
import Loading from "@/components/Loading";
import useAccount from "@/hooks/useAccount";
import Link from "next/link";

export default function Home() {
	const { account, storageLoading } = useAccount();

	if (storageLoading)
		return (
			<div>
				<Loading />
			</div>
		);

	if (!account)
		return (
			<Link href="/auth">
				<Button>Go to login</Button>
			</Link>
		);

	return (
		<Link href="/dashboard">
			<Button>Go to Dashboard</Button>
		</Link>
	);
}
