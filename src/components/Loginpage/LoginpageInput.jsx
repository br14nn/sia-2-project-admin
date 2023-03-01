export default function (props) {
	return (
		<input
			className={`rounded ${props.className}`}
			id={props.id}
			onClick={props.onClick}
			type={props.type}
			autoComplete="off"
			value={props.value}
		/>
	);
}
