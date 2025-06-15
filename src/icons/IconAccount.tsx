interface IIconProps extends React.SVGProps<SVGSVGElement> {
	color?: string;
}

export default function IconAccount(props: IIconProps) {
	return (
		<svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
			<path d="M256 6C118 6 6 118 6 256s112 250 250 250 250-112 250-250S394 6 256 6zm0 75c41.5 0 75 33.5 75 75s-33.5 75-75 75-75-33.5-75-75 33.5-75 75-75zm0 355c-62.5 0-117.75-32-150-80.5.75-49.75 100-77 150-77 49.75 0 149.25 27.25 150 77C373.75 404 318.5 436 256 436z" />
		</svg>
	);
}
