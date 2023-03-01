import Modal from "./Modal";

export default function (props) {
	return (
		<div
			className="fixed flex h-full w-screen items-center justify-center bg-black/50"
			id="newSYModalBg"
			onClick={props.newSYModalBgOnClick}
		>
			<Modal createBtnOnClick={props.createBtnOnClick} cancelBtnOnClick={props.cancelBtnOnClick} />
		</div>
	);
}
