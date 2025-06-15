"use client";

import { Button } from "@/components/Button";
import Loading from "@/components/Loading";
import useAccount from "@/hooks/useAccount";
import { useRouter } from "next/navigation";

export default function Dashboard() {
	const { account, onLogout, storageLoading } = useAccount();
	const router = useRouter();

	if (storageLoading)
		return (
			<div>
				<Loading />
			</div>
		);

	if (!account) router.push("/auth");

	return (
		<div>
			<Button onClick={onLogout}>logout</Button>
		</div>
	);
}
