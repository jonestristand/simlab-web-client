# SimLab Web Client

SimLabber Web Client is a [React](https://reactjs.org/)- and [MaterialUI](https://material-ui.com/)-based web application that uses the [SimLab](https://github.com/jonestristand/simlab) library to generate synthetic, coherent, and consistent patient lab reports for use in medical simulation cases.

## Installation

Clone from github, then use npm to install the required packages.

```bash
git clone git@github.com:jonestristand/simlab-web-client.git
npm install
```

## Usage

To run with the development server, use the start script. 

```bash
npm start
```

The project can be built for deployment using the build script
```bash
npm run build
```

Finally, the project can be deployed by first creating a `.npmrc` file in the root directory containing the SSH connection string to your client, such as:
```
deploy_path = user@server.com:/path/to/public_html
```

This allows the transfer and deploy scripts to be used
```bash
npm run transfer # Send the existing build to the server
npm run deploy   # Build and then send the result to the server
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)