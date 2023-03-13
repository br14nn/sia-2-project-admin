export default function (props) {
	return (
		<header
			className={`w-full bg-theme-dirty-white pt-1 text-center text-xl font-bold tracking-widest text-black ${props.className}`}
		>
			{props.label}
		</header>
	);
}
