import "../../styles/theme.scss";
import "../../styles/theme.scss.liquid";


import {mountReact} from "../utilities/mountReact";
import ExampleComponent from "../../react-build/ExampleComponent"

if(!window._babelPolyfill) {
    require('babel-polyfill');
}

mountReact('#theme-react-wrapper', ExampleComponent);

