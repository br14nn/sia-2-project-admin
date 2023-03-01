import ModalBg from "./ModalBg";

export default function (props) {
	return (
		<ModalBg
			newSYModalBgOnClick={props.newSYModalBgOnClick}
			createBtnOnClick={props.createBtnOnClick}
			cancelBtnOnClick={props.cancelBtnOnClick}
		/>
	);
}
