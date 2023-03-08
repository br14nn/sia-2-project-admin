import StudentTR from "./StudentTR";

export default function (props) {
	return (
		<table className="mx-auto w-full border-separate border-spacing-2">
			<thead className="bg-theme-blue text-lg tracking-widest text-white tablet:text-xl desktop:text-2xl">
				<tr>
					<th className="w-30% rounded-tl-lg">NAME</th>
					<th className="w-10%">LEVEL</th>
					<th className="w-20%">SECTION</th>
					<th className="w-20%">STATUS</th>
					<th className="w-20% rounded-tr-lg">ACTION</th>
				</tr>
			</thead>
			<tbody className="bg-white text-center text-lg font-bold tablet:text-xl desktop:text-2xl">
				<StudentTR
					name="qwerty"
					level="4"
					section="Maligaya"
					status="Enrolled"
					id="1"
					onClickEditProfile={props.onClickEditProfile}
				/>
				<StudentTR
					name="qwerty"
					level="4"
					section="Maligaya"
					status="Enrolled"
					id="2"
					onClickEditProfile={props.onClickEditProfile}
				/>
				<StudentTR
					name="qwerty"
					level="4"
					section="Maligaya"
					status="Enrolled"
					id="3"
					onClickEditProfile={props.onClickEditProfile}
				/>
				<StudentTR
					name="qwerty"
					level="4"
					section="Maligaya"
					status="Enrolled"
					id="4"
					onClickEditProfile={props.onClickEditProfile}
				/>
				<StudentTR
					name="qwerty"
					level="4"
					section="Maligaya"
					status="Enrolled"
					id="5"
					onClickEditProfile={props.onClickEditProfile}
				/>
				<StudentTR
					name="qwerty"
					level="4"
					section="Maligaya"
					status="Enrolled"
					id="6"
					onClickEditProfile={props.onClickEditProfile}
				/>
				<StudentTR
					name="qwerty"
					level="4"
					section="Maligaya"
					status="Enrolled"
					id="7"
					onClickEditProfile={props.onClickEditProfile}
				/>
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
				<StudentTR name="qwerty" level="4" section="Maligaya" status="Enrolled" />
			</tbody>
			<tfoot className="h-9 bg-theme-blue desktop:h-10">
				<tr>
					<td className="rounded-b-lg" colSpan={5}></td>
				</tr>
			</tfoot>
		</table>
	);
}
