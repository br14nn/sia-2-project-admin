export default function (props) {
	return (
		<header className="w-fit rounded-r-full bg-theme-red pt-3 pr-10 pb-2 pl-5 text-sm font-extrabold tracking-widest text-white tablet:text-2xl desktop:text-5xl">
			{props.title}
		</header>
	);
}
