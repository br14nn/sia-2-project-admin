export default function (props) {
	return (
		<div className="bg-theme-blue py-2">
			<p className="text-center text-lg font-bold tracking-widest text-white tablet:text-xl desktop:text-2xl">
				{props.title}
			</p>
		</div>
	);
}
