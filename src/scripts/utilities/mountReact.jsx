/* eslint-disable */
import ReactDOM from 'react-dom';
import React from "react";

/**
 * retrieves attributes from an element and turn them into an object
 * @param el - html element
 * @param prefix
 * @returns boolean
 */
function getAttributes(el, prefix = null) {

    // turn the nodelist into an array
    return Array.prototype
        .slice.call(el.attributes)
        .reduce((acc, attributeNode) => {
            // turn the array into an object
            let name = attributeNode.nodeName;
            let value = attributeNode.nodeValue.trim();
            if (prefix) {
                if (name.startsWith(prefix)) {
                    name = name.replace(prefix, '')
                        .replace(/-(\w)/g, (match, p1) => p1.toUpperCase());
                } else {
                    return acc;
                }
            }

            // parse objects or arrays
            if (value.charAt(0) === '{' && value.charAt(value.length - 1) === '}') {
                value = JSON.parse(value);
            } else if (value.charAt(0) === '[' && value.charAt(value.length - 1) === ']') {
                value = JSON.parse(value);
            }

            acc[name] = value;
            return acc;
        }, {});
}

export function mountReact(wrapperSelector, RootComponent, extraProps) {
    let el = wrapperSelector instanceof HTMLElement ? wrapperSelector : document.querySelector(wrapperSelector)

    if (el) {
        let props = getAttributes(el, 'prop-');

        if(extraProps){
            props = {...props, ...extraProps};
        }

        return ReactDOM.render(<RootComponent {...props}/>, el);
    } else {
        console.error(`Unable to find element by selector: ${wrapperSelector}`);
        return false;
    }
}