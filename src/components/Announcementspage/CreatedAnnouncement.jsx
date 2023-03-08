export default function (props) {
	function handleClick(e) {
		console.log(props.id);
	}

	return (
		<div id={props.id}>
			<button
				className="ml-auto block rounded-lg bg-red-600 px-5 py-1 font-bold text-white hover:bg-red-800"
				id={`${props.id}`}
				onClick={handleClick}
			>
				REMOVE ANNOUNCEMENT
			</button>
			<p className="my-5 text-justify text-2xl text-white">{props.details}</p>
		</div>
	);
}
