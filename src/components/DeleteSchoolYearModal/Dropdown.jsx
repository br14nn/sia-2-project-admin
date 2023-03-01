import DropdownOptions from "./DropdownOptions";

export default function () {
	return (
		<select
			className="rounded-lg bg-theme-blue px-10 font-bold text-white outline-none hover:cursor-pointer"
			id="schoolYearDropdown"
		>
			<DropdownOptions value="2022-2023" />
		</select>
	);
}
