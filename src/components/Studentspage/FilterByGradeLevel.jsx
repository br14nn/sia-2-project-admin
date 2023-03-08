export default function (props) {
	return (
		<select
			className="w-36 rounded-md text-center font-bold shadow-md shadow-stone-900/50 outline-none hover:cursor-pointer"
			id="filterByGrLvl"
			onChange={props.onChange}
		>
			<option value="">GRADE LEVEL</option>
			<option value="Grade 1">GRADE 1</option>
			<option value="Grade 2">GRADE 2</option>
			<option value="Grade 3">GRADE 3</option>
			<option value="Grade 4">GRADE 4</option>
			<option value="Grade 5">GRADE 5</option>
			<option value="Grade 6">GRADE 6</option>
		</select>
	);
}
