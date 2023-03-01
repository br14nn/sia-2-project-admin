import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function (props) {
	const navigate = useNavigate();

	function handleClick() {
		navigate(props.navigate);
	}

	return (
		<li>
			<motion.button
				onClick={handleClick}
				className={`text-white text-center desktop:text-start font-bold text-xl tablet:text-2xl w-full h-10 tablet:h-16 desktop:pl-16 ${props.className}`}
				initial={{ backgroundColor: props.bgColorNotHover }}
				whileHover={{ backgroundColor: props.bgColorHover }}
				transition={{ duration: 0.2 }}
			>
				{props.itemName}
			</motion.button>
		</li>
	);
}
