export default function (props) {
	return (
		<select
			className="w-36 rounded-md text-center font-bold shadow-md shadow-stone-900/50 outline-none hover:cursor-pointer"
			id="filterBySection"
			onChange={props.onChange}
		>
			<option value="">SECTION</option>
		</select>
	);
}
