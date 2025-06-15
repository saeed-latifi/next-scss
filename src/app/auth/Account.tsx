"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Loading from "@/components/Loading";
import useAccount from "@/hooks/useAccount";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Account.module.scss";

export default function Account() {
	const { account, onLogin, actionLoading, storageLoading } = useAccount();
	const router = useRouter();
	const [number, setNumber] = useState("");

	if (storageLoading)
		return (
			<div>
				<Loading />
			</div>
		);

	if (account) router.push("/dashboard");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onLogin(number);
			}}
			className={styles.container}
		>
			<Button isLoading={actionLoading}>login</Button>
			<Input value={number} onChange={(e) => setNumber(e.target.value)} placeholder="09** *** ****" />
		</form>
	);
}
