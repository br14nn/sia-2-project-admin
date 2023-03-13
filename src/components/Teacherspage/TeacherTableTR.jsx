export default function (props) {
	return (
		<tr>
			<td className="py-1">{props.teacherName}</td>
			<td className="py-1">{props.teacherAdvisory}</td>
			<td className="py-1">
				<button
					className="rounded-lg bg-theme-blue px-5 pt-1 text-xl text-white hover:bg-theme-blue-darker"
					id={props.id}
					name="editProfileBtn"
					onClick={props.onClickEditProfile}
				>
					EDIT PROFILE
				</button>
			</td>
		</tr>
	);
}
