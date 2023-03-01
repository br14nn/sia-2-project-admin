export default function (props) {
	return (
		<button className={`shadow-md shadow-stone-900/50 ${props.className}`}>
			{props.buttonIcon}
			<span>{props.buttonLabel}</span>
		</button>
	);
}
