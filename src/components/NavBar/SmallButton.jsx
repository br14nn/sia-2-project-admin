export default function (props) {
	return (
		<button
			className={`rounded-lg p-1 text-center text-xl text-white shadow-md shadow-stone-900/50 ${props.bgColor}`}
			id={props.id}
			onClick={props.onClick}
		>
			{props.iconLabel}
		</button>
	);
}
