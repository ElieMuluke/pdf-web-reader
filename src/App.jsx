import "./App.css";
import { DropzoneComponent } from "./components/Dropzone/Dropzone";

function App() {
	return (
		<>
			<div className='main-screen container'>
				<h1>PDF Reader</h1>
				<DropzoneComponent />
			</div>
		</>
	);
}

export default App;
