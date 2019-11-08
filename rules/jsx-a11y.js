'use strict';

module.exports = {
    'rules': {
        // Enforce emojis are wrapped in and provide screen reader access.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/accessible-emoji.md
        'jsx-a11y/accessible-emoji': 2,
        // Enforce all elements that require alternative text have meaningful information to relay back to end user.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/alt-text.md
        'jsx-a11y/alt-text': 2,
        // Enforce all anchors to contain accessible content.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-has-content.md
        'jsx-a11y/anchor-has-content': 2,
        // Enforce all anchors are valid, navigable elements.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
        'jsx-a11y/anchor-is-valid': 2,
        // Enforce elements with aria-activedescendant are tabbable.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-activedescendant-has-tabindex.md
        'jsx-a11y/aria-activedescendant-has-tabindex': 2,
        // Enforce all aria-* props are valid.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-props.m
        'jsx-a11y/aria-props': 2,
        // Enforce ARIA state and property values are valid.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-proptypes.md
        'jsx-a11y/aria-proptypes': 2,
        // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-role.md
        'jsx-a11y/aria-role': 2,
        // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-unsupported-elements.md
        'jsx-a11y/aria-unsupported-elements': 2,
        // Enforce a clickable non-interactive element has at least one keyboard event listener.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/click-events-have-key-events.md
        'jsx-a11y/click-events-have-key-events': 0,
        // Enforce heading (h1, h2, etc) elements contain accessible content.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/heading-has-content.md
        'jsx-a11y/heading-has-content': 2,
        // Enforce <html> element has lang prop.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/html-has-lang.md
        'jsx-a11y/html-has-lang': 2,
        // Enforce iframe elements have a title attribute.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/iframe-has-title.md
        'jsx-a11y/iframe-has-title': 2,
        // Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/img-redundant-alt.md
        'jsx-a11y/img-redundant-alt': 2,
        // Enforce that elements with interactive handlers like onClick must be focusable.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/interactive-supports-focus.md
        'jsx-a11y/interactive-supports-focus': 2,
        // Enforce that a label tag has a text label and an associated control.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/label-has-associated-control.md
        'jsx-a11y/label-has-associated-control': 2,
        // Enforce lang attribute has a valid value.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/lang.md
        'jsx-a11y/lang': 2,
        // Enforces that <audio> and <video> elements must have a <track> for captions.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/media-has-caption.md
        'jsx-a11y/media-has-caption': 0,
        // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/mouse-events-have-key-events.md
        'jsx-a11y/mouse-events-have-key-events': 2,
        // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screen reader.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-access-key.md
        'jsx-a11y/no-access-key': 2,
        // Enforce autoFocus prop is not used.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-autofocus.md
        'jsx-a11y/no-autofocus': 2,
        // Enforce distracting elements are not used.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-distracting-elements.md
        'jsx-a11y/no-distracting-elements': 2,
        // Interactive elements should not be assigned non-interactive roles.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 2,
        // Non-interactive elements should not be assigned mouse or keyboard event listeners.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-element-interactions.md
        'jsx-a11y/no-noninteractive-element-interactions': 2,
        // Non-interactive elements should not be assigned interactive roles.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 2,
        // tabIndex should only be declared on interactive elements
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-tabindex.md
        'jsx-a11y/no-noninteractive-tabindex': 2,
        // Enforce usage of onBlur over onChange on select menus for accessibility.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-onchange.md
        'jsx-a11y/no-onchange': 2,
        // Enforce explicit role property is not the same as implicit/default role property on element.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-redundant-roles.md
        'jsx-a11y/no-redundant-roles': 2,
        // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-static-element-interactions.md
        'jsx-a11y/no-static-element-interactions': 2,
        // Enforce that elements with ARIA roles must have all required attributes for that role.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-has-required-aria-props.md
        'jsx-a11y/role-has-required-aria-props': 2,
        // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-supports-aria-props.md
        'jsx-a11y/role-supports-aria-props': 2,
        // Enforce scope prop is only used on <th> elements.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/scope.md
        'jsx-a11y/scope': 2,
        // Enforce tabIndex value is not greater than zero.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/tabindex-no-positive.md
        'jsx-a11y/tabindex-no-positive': 2,
    },
};
