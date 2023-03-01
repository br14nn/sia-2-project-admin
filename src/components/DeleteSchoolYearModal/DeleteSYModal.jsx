import ModalBg from "./ModalBg";

export default function (props) {
	return (
		<ModalBg
			deleteSYModalBgOnClick={props.deleteSYModalBgOnClick}
			cancelBtnOnClick={props.cancelBtnOnClick}
			deleteBtnOnClick={props.deleteBtnOnClick}
		/>
	);
}
