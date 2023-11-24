import Dropzone from "react-dropzone";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ToastNotification } from "../ToastNotificatioin/Toast";
import "./Dropzone.css";

export function DropzoneComponent() {
	const [file, setFile] = useState(null);
	const [openFile, setOpenFile] = useState(false);
	const [toastNotificationParams, setToastNotificationParams] = useState({
		isOpen: false,
		type: null,
		message: null,
	});

	const navigate = useNavigate();

	const showToastNotification = (type, message) => {
		setToastNotificationParams({
			isOpen: true,
			type,
			message,
		});
	};

	const onDrop = useCallback((acceptedFiles) => {
		if (acceptedFiles.length !== 1) {
			showToastNotification("error", "Please upload only one file");
			return;
		}

		const acceptedFile = acceptedFiles[0];

		if (acceptedFile.type !== "application/pdf") {
			showToastNotification("error", "Please upload a PDF file");
			return;
		}

		const reader = new FileReader();

		reader.readAsArrayBuffer(acceptedFile);

		reader.onabort = () =>
			showToastNotification("error", "File reading was aborted");
		reader.onerror = () =>
			showToastNotification("error", "File reading has failed");
		reader.onload = () => {
			const binaryStr = reader.result;
			setFile(
				...acceptedFiles,
				new Blob([binaryStr], { type: "application/pdf" })
			);
			showToastNotification("success", "File uploaded successfully");
		};
	}, []);

	const convertedFileSize = (bytes) => {
		const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
		if (bytes === 0) {
			return "0 Byte";
		}
		const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
		return Math.round(bytes / Math.pow(1024, i)) + " " + sizes[i];
	};

	const handleOpenFile = () => {
		setOpenFile(true);
		navigate("/pdf", { state: { file } });
	};

	return (
		<>
			<ToastNotification {...toastNotificationParams} />
			<div className='container'>
				{!openFile && (
					<>
						{!file && (
							<div>
								<Dropzone onDrop={onDrop}>
									{({ getRootProps, getInputProps }) => (
										<section>
											<div className='dropzone-container' {...getRootProps()}>
												<input {...getInputProps()} />
												<p className='placeholder'>
													Drag &lsquo;n&rsquo; drop some files here, or click to
													select files
												</p>
											</div>
										</section>
									)}
								</Dropzone>
							</div>
						)}

						{file && (
							<div className='preview-container'>
								<div className='preview'>
									<img
										className='preview-img'
										src='/images/pdf_preview.svg'
										alt='preview'
									/>
								</div>
								<div className='file-data'>
									<p>
										<span className='file-name'>{file.name} </span>-{" "}
										<span className='file-size'>
											{convertedFileSize(file.size)} bytes
										</span>
									</p>
								</div>
							</div>
						)}

						<div className='open-file'>
							<button
								style={{ display: file ? "block" : "none" }}
								onClick={handleOpenFile}
							>
								Open File
							</button>
						</div>
					</>
				)}
			</div>
		</>
	);
}
