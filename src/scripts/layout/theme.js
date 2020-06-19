import "../../styles/theme.scss";
import "../../styles/theme.scss.liquid";
import {mountReact} from "../utilities/mountReact.jsx";
import ExampleComponent from "../../react-build/components/ExampleComponent";

mountReact('#theme-react-wrapper', ExampleComponent);
