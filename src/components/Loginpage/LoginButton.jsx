export default function (props) {
	return (
		<button className="bg-theme-blue hover:bg-blue-700 text-white text-xl font-bold py-2 rounded-lg w-44 mt-8 mx-auto shadow-md shadow-stone-900/50">
			{props.buttonLabel}
		</button>
	);
}
