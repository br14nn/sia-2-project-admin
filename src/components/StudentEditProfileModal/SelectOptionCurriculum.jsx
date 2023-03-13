export default function (props) {
	return (
		<option className="bg-white text-black" value={props.value}>
			{props.label}
		</option>
	);
}
