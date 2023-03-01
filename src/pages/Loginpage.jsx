import LoginForm from "../components/Loginpage/LoginForm";
import Announcements from "../components/Loginpage/Announcements";

export default function () {
	return (
		<main className="flex h-fit flex-col-reverse tablet:flex-row">
			<div className="flex h-800px items-center justify-center bg-cover bg-center bg-no-repeat tablet:h-screen tablet:w-3/5 tablet:bg-[url('/assets/landingpageimage.webp')] desktop:w-70%">
				<Announcements />
			</div>
			<div className="flex h-800px w-full items-center overflow-y-auto bg-white tablet:h-screen tablet:w-2/5 desktop:w-30%">
				<LoginForm title="Admin Login" inputLabel1="Username" inputLabel2="Password" />
			</div>
		</main>
	);
}
