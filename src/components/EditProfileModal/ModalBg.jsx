import Modal from "./Modal";

export default function (props) {
	return (
		<div
			className="fixed inset-0 flex h-screen w-screen items-center justify-center overflow-x-auto bg-black/50 px-16 py-10 tablet:px-36 desktop:px-56"
			id="modalBg"
			onClick={props.onClickModalBg}
		>
			<Modal />
		</div>
	);
}
