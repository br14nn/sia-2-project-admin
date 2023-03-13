import SelectOptionStatus from "./SelectOptionStatus";

export default function (props) {
	return (
		<select
			className="rounded-lg bg-theme-blue p-2 text-center font-bold text-white shadow-md shadow-stone-900/50 outline-none hover:cursor-pointer"
			id={props.id}
		>
			<SelectOptionStatus value="not enrolled" label="Not Enrolled" />
			<SelectOptionStatus value="enrolled" label="Enrolled" />
		</select>
	);
}
