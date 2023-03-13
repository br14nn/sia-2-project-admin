export default function (props) {
	return (
		<tr className="bg-theme-gray text-center text-2xl font-bold text-black" id={props.id}>
			<td>{props.subjectName}</td>
			<td>{props.subjectTeacher}</td>
			<td>{props.timeSchedule}</td>
			<td>{props.daySchedule}</td>
		</tr>
	);
}
