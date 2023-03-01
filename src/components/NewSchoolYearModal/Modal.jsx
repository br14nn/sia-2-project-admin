import ModalBtn from "./ModalBtn";
import ModalInputText from "./ModalInputText";

export default function (props) {
	return (
		<div className="w-32rem overflow-hidden rounded-lg bg-white" id="newSYModal">
			<header className="flex w-full bg-stone-600 px-4 py-1 text-2xl font-bold text-white ">
				<p>New School Year</p>
			</header>
			<div className="my-5 flex items-center justify-center gap-2 text-xl">
				<span>Create school year:</span>
				<ModalInputText id="startYear" maxLength={4} />
				<span>-</span>
				<ModalInputText id="endYear" maxLength={4} />
				<span>?</span>
			</div>
			<div className="mt-8 mb-5 flex items-center justify-center gap-10 text-xl">
				<ModalBtn
					id="cancelBtn"
					bgColor="bg-red-600"
					onClick={props.cancelBtnOnClick}
					btnLabel="Cancel"
				/>
				<ModalBtn
					id="createBtn"
					bgColor="bg-green-600"
					onClick={props.createBtnOnClick}
					btnLabel="Create"
				/>
			</div>
		</div>
	);
}
