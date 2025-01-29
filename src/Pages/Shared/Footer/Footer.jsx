import {
	FaFacebookF,
	FaGithub,
	FaLinkedinIn,
	FaSlack,
	FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterWithSocialMedia = () => {
	return (
		<footer className="flex flex-col items-center gap-4 p-4 sm:flex-row sm:justify-between">
			<p className="text-center text-gradient text-sm">
				&copy;{new Date().getFullYear()}{" "}
				<Link
					to="/"
					className="font-medium transition-all  hover:text-blue-600"
				>
					Tawheed
				</Link>
				{". "}
				All Rights Reserved.
			</p>
			<div className="flex flex-row items-center gap-4 text-white">
				<Link className="transition hover:text-gray-700">
					<FaFacebookF />
				</Link>
				<Link className="transition hover:text-gray-700">
					<FaLinkedinIn />
				</Link>
				<Link className="transition hover:text-gray-700">
					<FaGithub />
				</Link>
				<Link className=" transition hover:text-gray-700">
					<FaTwitter />
				</Link>
				<Link className="transition hover:text-gray-700">
					<FaSlack />
				</Link>
			</div>
		</footer>
	);
};

export default FooterWithSocialMedia;
