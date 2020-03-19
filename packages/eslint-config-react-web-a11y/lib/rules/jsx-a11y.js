'use strict';

// React JSX a11y plugin - // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules

module.exports = {
    rules: {
        // Enforce emojis are wrapped in and provide screen reader access
        'jsx-a11y/accessible-emoji': 'warn',
        // Enforce all elements that require alternative text have meaningful information to relay back to end user
        'jsx-a11y/alt-text': 'warn',
        // Enforce all anchors to contain accessible content
        'jsx-a11y/anchor-has-content': 'warn',
        // Enforce all anchors are valid, navigable elements
        'jsx-a11y/anchor-is-valid': 'warn',
        // Enforce elements with aria-activedescendant are tabbable
        'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
        // Enforce all aria-* props are valid
        'jsx-a11y/aria-props': 'error',
        // Enforce ARIA state and property values are valid
        'jsx-a11y/aria-proptypes': 'error',
        // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role
        'jsx-a11y/aria-role': 'error',
        // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes
        'jsx-a11y/aria-unsupported-elements': 'warn',
        // Enforce a clickable non-interactive element has at least one keyboard event listener
        'jsx-a11y/click-events-have-key-events': 'warn',
        // Enforce heading (h1, h2, etc) elements contain accessible content
        'jsx-a11y/heading-has-content': 'warn',
        // Enforce <html> element has lang prop
        'jsx-a11y/html-has-lang': 'warn',
        // Enforce iframe elements have a title attribute
        'jsx-a11y/iframe-has-title': 'warn',
        // Enforce <img> alt prop does not contain the word "image", "picture", or "photo"
        'jsx-a11y/img-redundant-alt': 'warn',
        // Enforce that elements with interactive handlers like onClick must be focusable
        'jsx-a11y/interactive-supports-focus': 'warn',
        // Enforce that a label tag has a text label and an associated control
        'jsx-a11y/label-has-associated-control': 'warn',
        // Enforce lang attribute has a valid value
        'jsx-a11y/lang': 'error',
        // Enforces that <audio> and <video> elements must have a <track> for captions
        'jsx-a11y/media-has-caption': 0,
        // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users
        'jsx-a11y/mouse-events-have-key-events': 'warn',
        // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screen reader
        'jsx-a11y/no-access-key': 'warn',
        // Enforce autoFocus prop is not used
        'jsx-a11y/no-autofocus': 'warn',
        // Enforce distracting elements are not used
        'jsx-a11y/no-distracting-elements': 'warn',
        // Interactive elements should not be assigned non-interactive roles
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn',
        // Non-interactive elements should not be assigned mouse or keyboard event listeners
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        // Non-interactive elements should not be assigned interactive roles
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
        // tabIndex should only be declared on interactive elements
        'jsx-a11y/no-noninteractive-tabindex': 'warn',
        // Enforce usage of onBlur over onChange on select menus for accessibility
        'jsx-a11y/no-onchange': 'warn',
        // Enforce explicit role property is not the same as implicit/default role property on element
        'jsx-a11y/no-redundant-roles': 'warn',
        // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute
        'jsx-a11y/no-static-element-interactions': 'warn',
        // Enforce that elements with ARIA roles must have all required attributes for that role
        'jsx-a11y/role-has-required-aria-props': 'warn',
        // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role
        'jsx-a11y/role-supports-aria-props': 'error',
        // Enforce scope prop is only used on <th> elements
        'jsx-a11y/scope': 'warn',
        // Enforce tabIndex value is not greater than zero
        'jsx-a11y/tabindex-no-positive': 'warn',
    },
};
