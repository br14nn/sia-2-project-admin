import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import NewSYModal from "../components/NewSchoolYearModal/NewSYModal";
import DeleteSYModal from "../components/DeleteSchoolYearModal/DeleteSYModal";

export default function () {
	const [newSYModalIsVisible, SetNewSYModalIsVisible] = useState(false);
	const [deleteSYModalIsVisible, SetDeleteSYModalIsVisible] = useState(false);

	function handleClick(e) {
		const target = e.target;
		const currentTarget = e.currentTarget;

		//console.log(currentTarget.id);
		//console.log(target.id);

		currentTarget.id === "newSYBtn" && SetNewSYModalIsVisible(true);
		if (target.id === "newSYModalBg" || target.id === "cancelBtn" || target.id === "createBtn") {
			SetNewSYModalIsVisible(false);
		}

		currentTarget.id === "deleteSYBtn" && SetDeleteSYModalIsVisible(true);
		if (target.id === "deleteSYModalBg" || target.id === "cancelBtn" || target.id === "deleteBtn") {
			SetDeleteSYModalIsVisible(false);
		}
	}

	return (
		<div className="flex flex-col bg-theme-light-blue desktop:h-screen desktop:flex-row">
			{newSYModalIsVisible && (
				<NewSYModal
					newSYModalBgOnClick={handleClick}
					createBtnOnClick={handleClick}
					cancelBtnOnClick={handleClick}
				/>
			)}
			{deleteSYModalIsVisible && (
				<DeleteSYModal
					deleteSYModalBgOnClick={handleClick}
					cancelBtnOnClick={handleClick}
					deleteBtnOnClick={handleClick}
				/>
			)}
			<NavBar
				studentName="Admin 01"
				onClick={handleClick}
				newSYOnClick={handleClick}
				deleteSYOnClick={handleClick}
			/>
			<div className="h-screen w-full overflow-x-auto overflow-y-auto bg-theme-light-blue desktop:h-full desktop:w-4/5">
				<Outlet />
			</div>
		</div>
	);
}
