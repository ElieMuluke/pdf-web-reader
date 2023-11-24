# PDF Web Reader

This is a web app that allows you to read PDFs in your browser. It is built using [Vite](https://vitejs.dev/), [React](https://reactjs.org/), and [PDF.js](https://mozilla.github.io/pdf.js/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14.17.0 or higher)
- [Yarn](https://yarnpkg.com/) (v1.22.5 or higher)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/ElieMuluke/pdf-web-reader.git
   ```

2. Install NPM packages

   ```sh
   yarn install
   ```

3. Start the development server

   ```sh
   yarn dev
   ```

## Usage

### Adding PDFs

1. Just drag and drop your PDFs into the browser window in the area indicated by the dashed border.
2. Alternatively, you can click on the dashed border to open a file picker dialog.

### Viewing PDFs

1. Once a PDF is loaded, you can click on it to open it in the PDF viewer.

### Open another PDF

1. In the PDF viewer, click on the "Open another PDF" button to get redirected to the PDF upload page.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m "Add some AmazingFeature"`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [PDF.js](https://mozilla.github.io/pdf.js/)
- [react-pdf](https://react-pdf.org/)

## Notes

### Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
