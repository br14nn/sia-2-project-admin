export default function (props) {
	return (
		<input
			className={`rounded-lg border-2 border-theme-blue p-2 shadow-md shadow-stone-900/50 outline-none ${props.className}`}
			id={props.id}
			type={props.type}
			value={props.value}
			autoComplete="off"
		/>
	);
}
