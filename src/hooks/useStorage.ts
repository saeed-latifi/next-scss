import useSWRImmutable from "swr/immutable";
import { IAccount } from "./useAccount";
import { sleep } from "@/utils/sleep";

export interface IStorage {
	account: IAccount;
}

const storageName = ":appInfo:";

export default function useStorage() {
	const { data: storage, isLoading, isValidating, mutate } = useSWRImmutable<Partial<IStorage>>(storageName, fetcher);

	async function fetcher() {
		await sleep(500);
		const data = await getStorage();
		if (data) return data;
		else {
			// on init storage for first time
			setStorage({});
			return {};
		}
	}

	async function onStorage(newStorages?: Partial<IStorage>) {
		if (!newStorages) return;
		const storages: Partial<IStorage> = { ...storage, ...newStorages };
		mutate(storages, { revalidate: false });
		setStorage(storages);
	}

	return { storageLoading: isLoading || isValidating, storage, onStorage };
}

async function getStorage() {
	const raw = localStorage.getItem(storageName);
	if (raw) {
		const data = await JSON.parse(raw);
		return data as Partial<IStorage>;
	}
}

function setStorage(storage: Partial<IStorage>) {
	localStorage.setItem(storageName, JSON.stringify(storage));
}
