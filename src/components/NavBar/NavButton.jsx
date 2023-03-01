export default function (props) {
	return (
		<button className="text-4xl text-white tablet:text-6xl" onClick={props.navBtnOnClick}>
			{props.buttonIcon}
		</button>
	);
}
