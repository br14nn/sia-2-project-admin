import Modal from "./Modal";

export default function (props) {
	return (
		<div
			className="fixed flex h-full w-screen items-center justify-center bg-black/50"
			id="deleteSYModalBg"
			onClick={props.deleteSYModalBgOnClick}
		>
			<Modal cancelBtnOnClick={props.cancelBtnOnClick} deleteBtnOnClick={props.deleteBtnOnClick} />
		</div>
	);
}
