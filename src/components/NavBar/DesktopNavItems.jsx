import { BsBoxArrowRight, BsPlusLg, BsTrashFill } from "react-icons/bs";
import NavItem from "./NavItem";
import SmallButton from "./SmallButton";
import NavLogoutButton from "./NavLogoutButton";
import SchoolLogo from "../../assets/logo.webp";

export default function (props) {
	return (
		<ul className="hidden h-fit w-full overflow-y-auto bg-theme-blue-darker py-10 desktop:block desktop:h-full">
			<li className="mx-auto flex w-11/12 flex-row items-center justify-center gap-2">
				<img className="h-28 w-28" src={SchoolLogo} />
				<div>
					<p className="break-words text-xl font-bold text-white tablet:text-2xl">
						{props.studentName}
					</p>
					<p className="text-xl text-gray-500">Admin</p>
				</div>
			</li>
			<li className="mx-auto my-5 flex w-fit flex-row items-center justify-center gap-2">
				<p className="text-xl font-bold text-white">S.Y.</p>
				<select className="w-40 rounded-lg bg-white py-px text-center font-bold shadow-md shadow-stone-900/50 outline-none hover:cursor-pointer">
					<option value="2023-2024">2022-2023</option>
					<option value="2023-2024">2023-2024</option>
					<option value="2023-2024">2024-2025</option>
				</select>
				<SmallButton
					id="newSYBtn"
					onClick={props.newSYOnClick}
					bgColor="bg-green-600 hover:bg-green-800"
					iconLabel={<BsPlusLg />}
				/>
				<SmallButton
					id="deleteSYBtn"
					onClick={props.deleteSYOnClick}
					bgColor="bg-red-600 hover:bg-red-800"
					iconLabel={<BsTrashFill />}
				/>
			</li>
			<NavItem
				className="border-t-2 border-b border-theme-dark-blue tablet:border-t-4 tablet:border-b-2"
				navigate="announcements"
				bgColorNotHover="rgb(6 60 113)"
				bgColorHover="#4E7FAE"
				itemName="Announcements"
			/>
			<NavItem
				className="border-t border-b border-theme-dark-blue tablet:border-t-2 tablet:border-b-2"
				navigate="students"
				bgColorNotHover="rgb(6 60 113)"
				bgColorHover="#4E7FAE"
				itemName="Students"
			/>
			<NavItem
				className="border-t border-b border-theme-dark-blue tablet:border-t-2 tablet:border-b-2"
				navigate="teachers"
				bgColorNotHover="rgb(6 60 113)"
				bgColorHover="#4E7FAE"
				itemName="Teachers"
			/>
			<NavItem
				className="border-t border-b border-theme-dark-blue tablet:border-t-2 tablet:border-b-4"
				navigate="curriculum"
				bgColorNotHover="rgb(6 60 113)"
				bgColorHover="#4E7FAE"
				itemName="Curriculum"
			/>
			<NavLogoutButton
				className="mx-auto mt-96 flex w-36 flex-row items-center justify-center gap-2 rounded-lg bg-red-600 py-1 text-xl font-bold text-white hover:bg-red-800"
				buttonIcon={<BsBoxArrowRight />}
				buttonLabel="Logout"
			/>
		</ul>
	);
}
