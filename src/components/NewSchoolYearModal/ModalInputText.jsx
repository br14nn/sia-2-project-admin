export default function (props) {
	return (
		<input
			className="w-28 rounded-md border-2 border-theme-blue text-center outline-none"
			id={props.id}
			type="text"
			pattern="\d*"
			maxLength={props.maxLength}
		/>
	);
}
