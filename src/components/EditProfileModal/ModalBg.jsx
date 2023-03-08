export default function (props) {
	return (
		<div
			className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-black/50"
			id="modalBg"
			onClick={props.onClickModalBg}
		>
			<div className="h-56 w-56 rounded-lg bg-white" id="modal">
				{props.content}
			</div>
		</div>
	);
}
