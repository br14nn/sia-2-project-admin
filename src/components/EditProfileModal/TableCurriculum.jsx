import TableTRCurriculum from "./TableTRCurriculum";
import { useState } from "react";

export default function () {
	const [testData, setTestData] = useState([
		{
			id: "1",
			subjectName: "Hekasi",
			subjectTeacher: "qwerty1",
			timeSchedule: "7:45 AM - 8:45 AM",
			daySchedule: "M-W-F",
		},
		{
			id: "2",
			subjectName: "Computer",
			subjectTeacher: "qwerty2",
			timeSchedule: "9:00 AM - 10:00 AM",
			daySchedule: "M-F",
		},
	]);

	return (
		<table className="mx-auto mt-4 w-full table-auto border-separate border-spacing-2">
			<thead className="bg-theme-blue text-center text-2xl font-bold tracking-widest text-white">
				<tr>
					<td className="rounded-tl-lg">SUBJECT</td>
					<td>TEACHER</td>
					<td className="rounded-tr-lg" colSpan={2}>
						SCHEDULE
					</td>
				</tr>
			</thead>
			<tbody>
				{testData.map((item) => {
					return (
						<TableTRCurriculum
							key={item.id}
							subjectName={item.subjectName}
							subjectTeacher={item.subjectTeacher}
							timeSchedule={item.timeSchedule}
							daySchedule={item.daySchedule}
						/>
					);
				})}
			</tbody>
			<tfoot>
				<tr>
					<td
						className="h-8 rounded-b-lg bg-theme-blue shadow-md shadow-stone-900/50"
						colSpan={4}
					></td>
				</tr>
			</tfoot>
		</table>
	);
}
