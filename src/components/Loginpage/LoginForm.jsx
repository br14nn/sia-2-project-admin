import LoginPageInput from "./LoginpageInput";
import LoginButton from "./LoginButton";

export default function (props) {
	return (
		<form className="h-full w-full">
			<img className="mx-auto mt-10 w-48" src="/assets/logo.webp" alt="React Image" />
			<p className="mt-5 text-center text-2xl">Antonio Pichon Jr. Elementary School</p>
			<div className="mx-auto my-8 w-fit text-5xl font-bold">{props.title}</div>
			<div className="mx-auto flex w-full flex-col">
				<label htmlFor="username" className="mx-auto mt-5 w-11/12">
					<span className="block">{props.inputLabel1}</span>
					<LoginPageInput
						className="h-12 w-full border-2 border-theme-blue pl-3 shadow-md shadow-stone-900/50 focus:border-blue-700 focus:outline-none"
						id="username"
						type="text"
					/>
				</label>
				<label htmlFor="password" className="mx-auto mt-5 w-11/12">
					<span className="block">{props.inputLabel2}</span>
					<LoginPageInput
						className=" h-12 w-full border-2 border-theme-blue pl-3 shadow-md shadow-stone-900/50 focus:border-blue-700 focus:outline-none"
						id="password"
						type="password"
					/>
				</label>
				<LoginButton buttonLabel="Login" />
			</div>
		</form>
	);
}
