import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BsList } from "react-icons/bs";
import SchoolLogo from "../../assets/logo.webp";
import NavButton from "./NavButton";
import DesktopNavItems from "./DesktopNavItems";
import MobileNavItems from "./MobileNavItems";

export default function (props) {
	const [navItemsIsVisible, setNavItemsIsVisible] = useState(false);

	useEffect(() => {
		function handleWindowResize() {
			window.innerWidth >= 1366 && setNavItemsIsVisible(false);
		}

		window.addEventListener("resize", handleWindowResize);
	});

	function handleClick(e) {
		navItemsIsVisible ? setNavItemsIsVisible(false) : setNavItemsIsVisible(true);
	}

	return (
		<div className="h-fit w-full bg-theme-light-blue desktop:h-screen desktop:w-1/5">
			{/*Mag pakita lang itong header na element kapang ang screen < 1366px*/}
			<div className="flex h-10 flex-row items-center bg-theme-blue-darker tablet:h-16 desktop:hidden">
				<NavButton buttonIcon={<BsList />} navBtnOnClick={handleClick} />
				<div className="flex grow flex-row items-center justify-center gap-2">
					<img className="h-8 w-8 tablet:h-14 tablet:w-14" src={SchoolLogo} />
					<p className="text-center text-sm font-bold text-white tablet:text-2xl">
						Antonio Pichon Jr. Elementary School
					</p>
				</div>
			</div>

			{/*Mag display itong ul na element kapag desktop(width > 1366px)*/}
			<DesktopNavItems
				studentName={props.studentName}
				newSYOnClick={props.newSYOnClick}
				deleteSYOnClick={props.deleteSYOnClick}
			/>

			<AnimatePresence>
				{/*Mag display lang itong ul kapag mobile(width < 1366px) */}
				{navItemsIsVisible && (
					<MobileNavItems
						studentName={props.studentName}
						newSYOnClick={props.newSYOnClick}
						deleteSYOnClick={props.deleteSYOnClick}
					/>
				)}
			</AnimatePresence>
		</div>
	);
}
