import { useRouter } from "next/navigation";
import useStorage from "./useStorage";
import { useActionLoading } from "./useActionLoading";
import { sleep } from "@/utils/sleep";

export interface IAccount {
	gender: string;
	name: {
		title: string;
		first: string;
		last: string;
	};
	location: IAccountLocation;
	email: string;
	login: ILoginInfo;
	dob: {
		date: string; // ISO date string
		age: number;
	};
	registered: {
		date: string; // ISO date string
		age: number;
	};
	phone: string;
	cell: string;
	id: {
		name: string;
		value: string;
	};
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
	nat: string;
}

interface ILoginInfo {
	uuid: string;
	username: string;
	password: string;
	salt: string;
	md5: string;
	sha1: string;
	sha256: string;
}

interface IAccountLocation {
	street: {
		number: number;
		name: string;
	};
	city: string;
	state: string;
	country: string;
	postcode: number;
	coordinates: {
		latitude: string;
		longitude: string;
	};
	timezone: {
		offset: string;
		description: string;
	};
}

const preFetched = {
	results: [
		{
			gender: "female",
			name: { title: "Mrs", first: "Vivan", last: "Hicks" },
			location: {
				street: { number: 4287, name: "Cherry St" },
				city: "Glendale",
				state: "Connecticut",
				country: "United States",
				postcode: 36640,
				coordinates: { latitude: "11.4325", longitude: "79.8689" },
				timezone: { offset: "-4:00", description: "Atlantic Time (Canada), Caracas, La Paz" },
			},
			email: "vivan.hicks@example.com",
			login: {
				uuid: "f6646152-47df-4dc8-a7cd-e51363fbaa64",
				username: "smallswan428",
				password: "secret1",
				salt: "C271XIzE",
				md5: "750ecfc45a3ee1838f3ad65974cfbc16",
				sha1: "c55c783517521b471897743faf077b003307197e",
				sha256: "74739dca46fa508cb552acd51cbc532b576c5f3989b790ba7240e811f1df34e4",
			},
			dob: { date: "1951-03-17T17:06:09.990Z", age: 74 },
			registered: { date: "2006-10-18T15:17:12.069Z", age: 18 },
			phone: "(396) 764-3124",
			cell: "(262) 677-4590",
			id: { name: "SSN", value: "747-60-3237" },
			picture: {
				large: "https://randomuser.me/api/portraits/women/40.jpg",
				medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
				thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg",
			},
			nat: "US",
		},
	],
	info: { seed: "f1078f144ab8de22", results: 1, page: 1, version: "1.4" },
};

export default function useAccount() {
	const { storage, storageLoading, onStorage } = useStorage();
	const { actionLoading, onActionLoading } = useActionLoading();
	const router = useRouter();

	async function onLogin(phone: string) {
		const canFetch = !storageLoading && !storage?.account;
		if (!canFetch || actionLoading) return;

		const isValid = isValidPhoneNumber(phone);
		if (!isValid) return alert("not valid number");

		try {
			onActionLoading(true);
			const account = await fetchAccount();

			if (account) {
				await onStorage({ account });
				router.push("/dashboard");
			} else throw new Error("bad call");
		} catch (error) {
			console.log(error);
			alert("bad request please try again");
		} finally {
			onActionLoading(false);
		}
	}

	async function onLogout() {
		await onStorage({ account: undefined });
		router.push("/");
	}

	return { account: storage?.account, onLogin, onLogout, storageLoading, actionLoading };
}

async function fetchAccount() {
	try {
		// TODO api endpoint has CORS issue
		// const response = await fetch("https://randomuser.me/api/?results=1&nat=us");
		// if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
		// const data: { results: IAccount[] } = await response.json();
		await sleep(1000);
		return preFetched.results[0];
	} catch (error) {
		console.error("Error fetching user:", error);
	}
}

function isValidPhoneNumber(number: string) {
	const regex = /^09\d{9}$/;
	return regex.test(number);
}
