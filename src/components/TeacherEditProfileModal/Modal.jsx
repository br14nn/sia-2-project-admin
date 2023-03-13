import InputBox from "./InputBox";
import SectionHeader from "./SectionHeader";
import Label from "./Label";

export default function (props) {
	return (
		<div className="h-full w-full overflow-auto rounded-lg bg-stone-600" id="modal">
			<header className="w-full px-4 text-2xl font-bold text-white">Edit Profile</header>

			<section className="flex w-1080px flex-col bg-white p-5 tablet:w-full">
				<SectionHeader label="TEACHER ACCOUNT" />
				<section className="mb-8 mt-4 flex flex-row gap-4">
					<div className="flex basis-50% flex-col">
						<Label htmlFor="emailInput" label="Email" />
						<InputBox id="emailInput" type="email" />
					</div>
					<div className="flex basis-50% flex-col">
						<Label htmlFor="passwordInput" label="Set Password" />
						<InputBox id="passwordInput" type="password" />
					</div>
				</section>

				<SectionHeader label="TEACHER INFORMATION" />
				<section className="mt-4 mb-8 flex flex-col gap-4">
					<div className="flex flex-row gap-4">
						<div className="flex basis-2/6 flex-col">
							<Label htmlFor="lastNameInput" label="Last Name" />
							<InputBox id="lastNameInput" type="text" />
						</div>
						<div className="flex basis-2/6 flex-col">
							<Label htmlFor="firstNameInput" label="First Name" />
							<InputBox id="firstNameInput" type="text" />
						</div>
						<div className="flex basis-2/6 flex-col">
							<Label htmlFor="middleNameInput" label="Middle Name" />
							<InputBox id="middleNameInput" type="text" />
						</div>
					</div>

					<div className="flex flex-row gap-4">
						<div className="flex basis-2/6 flex-col">
							<Label
								htmlFor="extensionNameInput"
								label="Extension Name e.g. Jr., III (If applicable)"
							/>
							<InputBox id="extensionNameInput" type="text" />
						</div>
						<div className="flex basis-2/6 flex-col">
							<Label htmlFor="dateOfBirthInput" label="Date of Birth" />
							<input
								className="rounded-lg border-2 border-theme-blue bg-white p-2 text-center shadow-md shadow-stone-900/50 focus:border-blue-700 focus:outline-none"
								id="dateOfBirthInput"
								type="date"
							/>
						</div>
						<div className="flex basis-2/6 flex-row gap-4">
							<div className="flex basis-10% flex-col">
								<Label htmlFor="ageInput" label="Age" />
								<InputBox className="w-28 text-center" id="middleNameInput" type="number" />
							</div>
							<div className="flex basis-90% flex-col">
								<Label htmlFor="" label="Gender" />
								<div className="flex flex-row items-center gap-4">
									<input id="maleOption" name="genderOptions" type="radio" value="male" />
									<Label htmlFor="maleOption" label="Male" />
									<input id="femaleOption" name="genderOptions" type="radio" value="female" />
									<Label htmlFor="femaleOption" label="Female" />
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-row items-center justify-center gap-4">
						<p className="text-xl">
							Belonging to any Indigenous Peoples (IP) <br />
							Community/Indigenous Cultural Community?
						</p>
						<input id="noOption" name="IPGroupOptions" type="radio" value="no" />
						<Label htmlFor="noOption" label="No" />
						<input id="yesOption" name="IPGroupOptions" type="radio" value="yes" />
						<Label htmlFor="yesOption" label="Yes" />
						<Label html="ifYesInput" label="If Yes, please specify:" />
						<InputBox className="grow" id="ifYesInput" type="text" />
					</div>

					<div className="flex flex-row gap-4">
						<div className="flex basis-2/6 flex-col">
							<Label htmlFor="motherTongueInput" label="Mother Tongue" />
							<InputBox id="motherTongueInput" type="text" />
						</div>
						<div className="flex basis-4/6 flex-col">
							<Label htmlFor="bloodTypeInput" label="Blood Type" />
							<InputBox className="w-28 text-center" id="bloodTypeInput" type="text" />
						</div>
					</div>
				</section>

				<SectionHeader label="TEACHER ADDRESS" />
				<section className="mt-4 mb-8 flex flex-col gap-4">
					<div className="flex flex-row gap-4">
						<div className="flex basis-1/2 flex-col">
							<Label htmlFor="houseNumStreetInput" label="House Number and Street" />
							<InputBox id="houseNumStreetInput" type="text" />
						</div>
						<div className="flex basis-1/2 flex-col">
							<Label htmlFor="barangayInput" label="Barangay" />
							<InputBox id="barangayInput" type="text" />
						</div>
					</div>

					<div className="flex flex-row gap-4">
						<div className="flex basis-5/6 flex-col">
							<Label htmlFor="cityMuniProvCountInput" label="City/Municipality/Province/Country" />
							<InputBox id="cityMuniProvCountInput" type="text" />
						</div>
						<div className="flex basis-1/6 flex-col">
							<Label htmlFor="zipCodeInput" label="Zip Code" />
							<InputBox className="text-center" id="zipCodeInput" type="number" />
						</div>
					</div>
				</section>

				<SectionHeader label="CONTACT INFORMATION" />
				<section className="mt-4 mb-8 flex flex-row gap-4">
					<div className="flex basis-1/3 flex-col">
						<Label htmlFor="cellphoneNumInput" label="Cellphone No." />
						<InputBox id="cellphoneNumInput" type="number" />
					</div>
					<div className="flex basis-1/3 flex-col">
						<Label htmlFor="telephoneNumInput" label="Telephone No." />
						<InputBox id="telephoneNumInput" type="number" />
					</div>
					<div className="flex basis-1/3 flex-col">
						<Label htmlFor="emergencyNumInput" label="Emergency Contact No." />
						<InputBox id="emergencyNumInput" type="number" />
					</div>
				</section>

				<SectionHeader className="h-4" label="" />
				<section className="mt-4 mb-4 ml-auto flex w-fit flex-row gap-4">
					<button
						className="w-48 rounded-lg bg-red-600 pt-1 text-xl font-bold text-white hover:bg-red-800"
						onClick={props.onClickDeleteProfile}
						name={props.name}
					>
						DELETE PROFILE
					</button>
					<button
						className="w-48 rounded-lg bg-green-600 pt-1 text-xl font-bold text-white hover:bg-green-800"
						onClick={props.onClickUpdateProfile}
						name={props.name}
					>
						UPDATE PROFILE
					</button>
				</section>
			</section>
		</div>
	);
}
