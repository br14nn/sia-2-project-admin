import Dropdown from "./Dropdown";
import ModalBtn from "./ModalBtn";

export default function (props) {
	return (
		<div className="w-96 overflow-hidden rounded-lg bg-white" id="deleteSYModal">
			<header className="flex w-full bg-stone-600 px-4 py-1 text-2xl font-bold text-white ">
				<p>Delete School Year</p>
			</header>
			<div className="my-5 flex items-center justify-center gap-2 text-xl">
				<span>School Year:</span>
				<Dropdown />
			</div>
			<div className="mt-8 mb-5 flex items-center justify-center gap-10 text-xl">
				<ModalBtn
					id="cancelBtn"
					bgColor="bg-red-600"
					btnLabel="Cancel"
					onClick={props.cancelBtnOnClick}
				/>
				<ModalBtn
					id="deleteBtn"
					bgColor="bg-red-700"
					btnLabel="Delete"
					onClick={props.deleteBtnOnClick}
				/>
			</div>
		</div>
	);
}
