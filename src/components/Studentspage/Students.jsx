import { useState } from "react";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import HeaderStyle1 from "../Headers/HeaderStyle1";
import FilterByGradeLevel from "./FilterByGradeLevel";
import FilterBySection from "./FilterBySection";
import FilterByStatus from "./FilterByStatus";
import StudentSearchInput from "./StudentSearchInput";
import StudentsTable from "./StudentsTable";

export default function () {
	const [showEditProfileModal, setShowEditProfileModal] = useState(false);
	const [testContent, setTestContent] = useState("Unkown");

	function handleChange(e) {
		console.log(e.target.value);
		console.log(e.target.id);
	}

	function handleClick(e) {
		setTestContent(e.target.id);
		if (!showEditProfileModal) setShowEditProfileModal(true);
		if (e.target.id === "modalBg") setShowEditProfileModal(false);
	}

	return (
		<div className="flex h-full w-full flex-col bg-theme-light-blue">
			<HeaderStyle1 title="STUDENTS" />
			<section className="mx-auto flex w-1500px flex-col gap-2 py-5 px-10 desktop:w-95%">
				<StudentSearchInput divClassName="ml-auto" id="searchStdName" label="Search:" />
				<div className="ml-auto flex w-fit flex-row items-center gap-2">
					<span className="text-2xl font-bold text-white">Filter by:</span>
					<FilterByGradeLevel onChange={handleChange} />
					<FilterBySection onChange={handleChange} />
					<FilterByStatus onChange={handleChange} />
				</div>
				<hr className="border-4 border-theme-yellow" />
				<section className="h-650px w-full overflow-y-auto">
					<StudentsTable onClickEditProfile={handleClick} />
				</section>
				{showEditProfileModal && (
					<EditProfileModal onClickModalBg={handleClick} content={testContent} />
				)}
			</section>
		</div>
	);
}
