export default function (props) {
	return (
		<div className={`flex w-fit flex-row items-center gap-2 ${props.divClassName}`}>
			<label className="text-2xl font-bold text-white" htmlFor={props.id}>
				{props.label}
			</label>
			<input
				className="w-56 rounded-md border-2 border-theme-blue px-2 py-1 shadow-md shadow-stone-900/50 focus:border-blue-700 focus:outline-none"
				id={props.id}
				type="text"
			/>
		</div>
	);
}
