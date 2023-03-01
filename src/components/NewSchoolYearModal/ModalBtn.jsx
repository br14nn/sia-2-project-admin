export default function (props) {
	return (
		<button
			className={`rounded-lg py-1 px-6 font-bold text-white shadow-md shadow-stone-900/50 ${props.bgColor}`}
			id={props.id}
			onClick={props.onClick}
		>
			{props.btnLabel}
		</button>
	);
}
