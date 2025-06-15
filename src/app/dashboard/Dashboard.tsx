"use client";

import { Button } from "@/components/Button";
import Loading from "@/components/Loading";
import useAccount from "@/hooks/useAccount";
import { useRouter } from "next/navigation";
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
	const { account, onLogout, storageLoading } = useAccount();
	const router = useRouter();

	if (storageLoading)
		return (
			<div>
				<Loading />
			</div>
		);

	if (!account) {
		router.push("/auth");
		return <></>;
	}

	return (
		<div className={styles.dashboard}>
			<p className={styles.dashboard__text}>{`welcome ${account.name.title} ${account.name.first} ${account.name.last}`}</p>
			<Button onClick={onLogout}>logout</Button>
		</div>
	);
}
