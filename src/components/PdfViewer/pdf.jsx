import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "./pdf.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function PDFViewer() {
	const [numPages, setNumPages] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	const file = location.state.file;

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	return (
		<>
			<button
				onClick={() => {
					navigate("/", { replace: true });
				}}
			>
				Open another PDF
			</button>
			<div className='controlls'></div>
			<div className='pdf-viewer-container'>
				<Document
					className='pdf-document'
					file={{ url: URL.createObjectURL(file) }}
					onLoadSuccess={onDocumentLoadSuccess}
				>
					{Array.from(new Array(numPages), (el, index) => (
						<Page
							key={`page_${index + 1}`}
							className='pdf-page'
							pageNumber={index + 1}
							width={window.innerWidth - 30}
							height={window.innerHeight - 120}
							renderAnnotationLayer={false}
							renderTextLayer={false}
						/>
					))}
				</Document>
			</div>
		</>
	);
}
