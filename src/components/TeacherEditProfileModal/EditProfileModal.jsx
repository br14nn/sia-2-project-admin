import ModalBg from "./ModalBg";

export default function (props) {
	return (
		<ModalBg
			onClickModalBg={props.onClickModalBg}
			name={props.name}
			onClickDeleteProfile={props.onClickDeleteProfile}
			onClickUpdateProfile={props.onClickUpdateProfile}
		/>
	);
}
