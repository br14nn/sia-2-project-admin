import { motion } from "framer-motion";
import { BsBoxArrowRight, BsPlusLg, BsTrashFill } from "react-icons/bs";
import NavItem from "./NavItem";
import NavLogoutButton from "./NavLogoutButton";
import SmallButton from "./SmallButton";

export default function (props) {
	return (
		<motion.ul
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="h-fit w-full bg-theme-blue py-5 desktop:h-full"
		>
			<li className="mx-auto flex w-fit flex-col items-center justify-center">
				<p className="break-words text-2xl font-bold text-white">{props.studentName}</p>
				<p className="text-xl text-gray-500">Admin</p>
			</li>
			<li className="mx-auto my-5 flex w-fit flex-row items-center justify-center gap-2">
				<p className="text-xl font-bold text-white">S.Y.</p>
				<select className="w-32 rounded-lg bg-white py-px text-center font-bold shadow-md shadow-stone-900/50 outline-none hover:cursor-pointer tablet:w-40">
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
				bgColorNotHover="#084784"
				bgColorHover="#4E7FAE"
				itemName="Announcements"
			/>
			<NavItem
				className="border-t border-b border-theme-dark-blue tablet:border-t-2 tablet:border-b-2"
				navigate="students"
				bgColorNotHover="#084784"
				bgColorHover="#4E7FAE"
				itemName="Students"
			/>
			<NavItem
				className="border-t border-b border-theme-dark-blue tablet:border-t-2 tablet:border-b-2"
				navigate="teachers"
				bgColorNotHover="#084784"
				bgColorHover="#4E7FAE"
				itemName="Teachers"
			/>
			<NavItem
				className="border-t border-b-2 border-theme-dark-blue tablet:border-t-2 tablet:border-b-4"
				navigate="curriculum"
				bgColorNotHover="#084784"
				bgColorHover="#4E7FAE"
				itemName="Curriculum"
			/>
			<NavLogoutButton
				className="mx-auto mt-5 flex w-36 flex-row items-center justify-center gap-2 rounded-lg bg-red-600 py-1 text-base font-bold text-white hover:bg-red-800 tablet:text-lg"
				buttonIcon={<BsBoxArrowRight />}
				buttonLabel="Logout"
			/>
		</motion.ul>
	);
}
