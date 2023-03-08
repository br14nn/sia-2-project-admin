export default function (props) {
	return (
		<select
			className="w-36 rounded-md text-center font-bold shadow-md shadow-stone-900/50 outline-none hover:cursor-pointer"
			id="filterByStatus"
			onChange={props.onChange}
		>
			<option value="">STATUS</option>
			<option value="Enrolled">Enrolled</option>
			<option value="Not Enrolled">Not Enrolled</option>
		</select>
	);
}
