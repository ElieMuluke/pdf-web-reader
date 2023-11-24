import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastNotification({ message, type }) {
	const toastType = {
		success: () => toast.success(message),
		error: () => toast.error(message),
		info: () => toast.info(message),
		warning: () => toast.warning(message),
		default: () => toast(message),
		custom: () => toast(message, { className: "custom-toast" }),
	};

	const notify = () => {
		if (type in toastType) {
			toastType[type]();
		} else {
			toastType["default"]();
		}
	};

	notify();

	return (
		<ToastContainer
			position='top-right'
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop
			closeOnClick
			rtl={false}
			pauseOnFocusLoss={false}
			draggable
			pauseOnHover={true}
		/>
	);
}
