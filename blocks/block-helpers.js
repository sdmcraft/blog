/**
 * Replace element type. ex) <p> -> <div>
 * @param {Element} el The original element that subject to replace.
 * @param {string} type The nodeName to be set for el.
 * @returns newEl Updated Element
 */
export const replaceElementType = (el, type) => {
  // If they are same, no need to replace.
  if (el === null || el.nodeName === type.toUpperCase()) {
    return el;
  }
  const newEl = document.createElement(type);
  newEl.innerHTML = el.innerHTML;
  el.parentNode.replaceChild(newEl, el);
  // copy all attributes from el to newEl
  [...el.attributes].forEach((attr) => newEl.setAttribute(attr.nodeName, attr.nodeValue));
  return newEl;
};

/**
 * Create an element with ID, class, children, and attributes
 * @param {String} tag the tag nav of the element
 * @param {Object} attributes the attributes of the tag
 * @param {HTMLElement} html the content of the element
 * @returns {HTMLElement} the element created
 */
export function createTag(tag, attributes, html) {
  const el = document.createElement(tag);
  if (html) {
    if (html instanceof HTMLElement) {
      el.append(html);
    } else {
      el.insertAdjacentHTML('beforeend', html);
    }
  }
  if (attributes) {
    Object.keys(attributes).forEach((key) => {
      el.setAttribute(key, attributes[key]);
    });
  }
  return el;
}

/**
 * Creates an SVG tag using the specified ID.
 * @param {string} id The ID
 * @returns {element} The SVG tag
 */
export function createSVG(id) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `/icons/icons.svg#${id}`);
  svg.appendChild(use);
  return svg;
}
