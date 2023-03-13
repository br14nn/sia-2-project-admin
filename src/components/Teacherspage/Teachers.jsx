import { useState } from "react";
import HeaderStyle1 from "../Headers/HeaderStyle1";
import EditProfileModal from "../TeacherEditProfileModal/EditProfileModal";
import TeacherSearchInput from "./TeacherSearchInput";
import TeacherTable from "./TeacherTable";

export default function () {
	const [showEditProfileModal, setShowEditProfileModal] = useState(false);

	function handleClick(e) {
		if (e.target.name === "editProfileBtn") {
			setShowEditProfileModal(true);
		} else if (e.target.id === "modalBg") {
			setShowEditProfileModal(false);
		}
	}

	return (
		<div className="flex h-full w-full flex-col bg-theme-light-blue">
			<HeaderStyle1 title="TEACHERS" />
			<section className="mx-auto flex w-1500px flex-col gap-2 py-5 px-10 desktop:w-95%">
				<TeacherSearchInput divClassName="ml-auto" label="Search:" id="searchTchrName" />
				<hr className="border-4 border-theme-yellow" />
				<section className="h-650px w-full overflow-y-auto">
					<TeacherTable onClickEditProfile={handleClick} />
				</section>
				{showEditProfileModal && <EditProfileModal onClickModalBg={handleClick} />}
			</section>
		</div>
	);
}
