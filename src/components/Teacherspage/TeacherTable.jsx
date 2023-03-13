import TeacherTableTR from "./TeacherTableTR";

export default function (props) {
	return (
		<table className="mx-auto w-full border-separate border-spacing-2">
			<thead className="bg-theme-blue text-lg tracking-widest text-white tablet:text-xl desktop:text-2xl">
				<tr>
					<th className="w-30% rounded-tl-lg">NAME</th>
					<th className="w-50%">ADVISORY</th>
					<th className="w-20% rounded-tr-lg">ACTION</th>
				</tr>
			</thead>
			<tbody className="bg-white text-center text-lg font-bold tablet:text-xl desktop:text-2xl">
				<TeacherTableTR
					teacherName="qwerty, ytrewq"
					teacherAdvisory="Grade 6: Rizal"
					id="T001"
					onClickEditProfile={props.onClickEditProfile}
				/>
			</tbody>
			<tfoot className="h-9 bg-theme-blue desktop:h-10">
				<tr>
					<td className="rounded-b-lg" colSpan={5}></td>
				</tr>
			</tfoot>
		</table>
	);
}
