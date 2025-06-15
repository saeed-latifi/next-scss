import { usePathname } from "next/navigation";
import { useEffect } from "react";
import useSWRImmutable from "swr/immutable";

export function useActionLoading() {
	const pathname = usePathname();
	const { data: actionLoading, mutate: loadingMutate } = useSWRImmutable(":loading:", () => false);

	function onActionLoading(value: boolean) {
		loadingMutate(value, { revalidate: false });
	}

	useEffect(() => {
		return () => {
			onActionLoading(false);
		};
	}, [pathname]);

	return { actionLoading, onActionLoading };
}
