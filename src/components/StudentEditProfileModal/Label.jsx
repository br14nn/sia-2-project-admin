export default function (props) {
	return (
		<label className="text-xl" htmlFor={props.htmlFor}>
			{props.label}
		</label>
	);
}
