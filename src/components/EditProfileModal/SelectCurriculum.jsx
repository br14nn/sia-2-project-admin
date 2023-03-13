import SelectOptionCurriculum from "./SelectOptionCurriculum";

export default function (props) {
	return (
		<select
			className={`rounded-lg bg-theme-blue p-2 text-center font-bold text-white shadow-md shadow-stone-900/50 outline-none hover:cursor-pointer ${props.className}`}
			id={props.id}
		>
			<SelectOptionCurriculum value="" label="Select Curriculum" />
		</select>
	);
}
