import React from 'react';

// '/accessible-emoji': Enforce emojis are wrapped in and provide screen reader access.
(() => {
    // Fail
    const bad = () => <span>🤔</span>;

    // Succeed
    const good = () => <span role="img" aria-label="Thinking emoji">🤔</span>;
})();

// '/alt-text': Enforce all elements that require alternative text have meaningful information to relay back to end user.
(() => {
    // Fail
    const bad = () => <img />;

    // Succeed
    const good = () => <img alt="this is a meaningful description to exemplify a good use case" />;
})();

// '/anchor-has-content': Enforce all anchors to contain accessible content.
(() => {
    // Fail
    const bad1 = () => <a href="www.example.com" />;
    const bad2 = () => <a href="www.example.com"><p aria-hidden> Example text </p></a>;

    // Succeed
    const good1 = () => <a href="www.example.com"> Example </a>;
    const good2 = () => <a href="www.example.com" dangerouslySetInnerHTML={ { __html: 'Example' } } />;
})();

// '/anchor-is-valid': Enforce all anchors are valid, navigable elements.
(() => {
    // Fail
    const bad1 = () => <a> Example </a>;
    const bad2 = () => <a href="#"> Example </a>;
    const bad3 = () => <a onClick={ console.log() }> Example </a>;

    // Succeed
    const good1 = () => <a href="www.example.com"> Example </a>;
    const good2 = () => <a href="www.example.com" onClick={ console.log() } dangerouslySetInnerHTML={ { __html: 'Example' } } />;
})();

// '/aria-activedescendant-has-tabindex': Enforce elements with aria-activedescendant are tabbable.
(() => {
    // Fail
    const bad = () => <div aria-activedescendant={ innerWidth } />;

    // Succeed
    const good1 = () => <input aria-activedescendant={ innerWidth } tabIndex="0" />;
})();

// '/aria-props': Enforce all aria-* props are valid.
(() => {
    // Fail
    const bad1 = () => <input aria-activedescndant={ innerWidth } tabIndex="0" />;
    const bad2 = () => <input aria-hdden />;

    // Succeed
    const good1 = () => <input aria-activedescendant={ innerWidth } tabIndex="0" />;
    const good2 = () => <input aria-hidden />;
})();

// '/aria-proptypes': Enforce ARIA state and property values are valid.
(() => {
    // Fail
    const bad1 = () => <input aria-activedescendant={ 'true' } />;
    const bad2 = () => <input aria-hidden="yes please" />;

    // Succeed
    const good1 = () => <input aria-activedescendant={ innerWidth } tabIndex="0" />;
    const good2 = () => <input aria-hidden="true" />;
})();

// '/aria-role': Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
(() => {
    // Fail
    const bad1 = () => <input role="datepicker" />;
    const bad2 = () => <input role="range" />;
    const bad3 = () => <input role="" />;

    // Succeed
    const good = () => <input role="button" />;
})();

// '/aria-unsupported-elements': Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
(() => {
    // Fail
    const bad = () => <meta charset="utf-8" aria-hidden />;

    // Succeed
    const good = () => <meta charset="utf-8" />;
})();

// '/click-events-have-key-events': Enforce a clickable non-interactive element has at least one keyboard event listener.
(() => {
    // Fail
    // Disabling the following rules to showcase error
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    const bad = () => <div onClick={ console.log() } />;

    // Succeed
    const good = () => <div onClick={ console.log() } onKeyDown={ console.log() } role="link" tabIndex="0" />;
})();

// '/heading-has-content': Enforce heading (h1, h2, etc) elements contain accessible content.
(() => {
    // Fail
    const bad1 = () => <h1 />;
    const bad2 = () => <h1><p aria-hidden> Hidden </p></h1>;

    // Succeed
    const good = () => <h1><p> Visible </p></h1>;
})();

// '/html-has-lang': Enforce <html> element has lang prop.
(() => {
    // Fail
    const bad1 = () => <html />;

    // Succeed
    const good = () => <html lang="pt" />;
})();

// '/iframe-has-title': Enforce iframe elements have a title attribute.
(() => {
    // Fail
    const bad = () => <iframe />;

    // Succeed
    const good = () => <iframe title="has a title" />;
})();

// '/img-redundant-alt': Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
(() => {
    // Fail
    const bad = () => <img alt="this image is a picture of a photo" />;

    // Succeed
    const good = () => <img alt="Example of a negative after developing a roll of film." />;
})();

// '/interactive-supports-focus': Enforce that elements with interactive handlers like onClick must be focusable.
(() => {
    // Fail
    const bad = () => <span onClick={ console.log() } onKeyDown={ console.log() } role="button">Link</span>;

    // Succeed
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    const good = () => <span onClick={ console.log() } onKeyDown={ console.log() } role="button" tabIndex="0">Link</span>;
})();

// '/label-has-associated-control': Enforce that a label tag has a text label and an associated control.
(() => {
    // Fail
    const bad1 = () =>
        (<div>
            <label>
                Link
            </label>
            <input />
        </div>);
    const bad2 = () =>
        (<div>
            <label>
                Link
            </label>
        </div>);

    // Succeed
    const good1 = () =>
        (<div>
            <label>
                Link
                <input />
            </label>
        </div>);
    const good2 = () =>
        (<div>
            <label htmlFor="input">
                Link
            </label>
            <input id="input" />
        </div>);
})();

// '/lang': Enforce lang attribute has a valid value.
(() => {
    // Fail
    const bad = () => <html lang="PT" />;

    // Succeed
    const good = () => <html lang="pt" />;
})();

// '/media-has-caption': Enforces that <audio> and <video> elements must have a <track> for captions.
(() => {
    // Fail
    const bad1 = () => <audio />;
    const bad2 = () => <audio> <track /></audio>;

    // Succeed
    const good = () => <audio> <track kind="captions" /></audio>;
})();

// '/mouse-events-have-key-events': Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
(() => {
    // Fail
    // Disabling the following rules to showcase error
    const bad = () => <button onMouseOut={ console.log() } />;

    // Succeed
    const good = () => <button onMouseOut={ console.log() } onBlur={ console.log() } />;
})();

// '/no-access-key': Enforce that the accessKey prop is not used on any element
//                   to avoid complications with keyboard commands used by a screen reader.
(() => {
    // Fail
    const bad = () => <div accessKey={ key } />;

    // Succeed
    const good = () => <div />;
})();

// '/no-autofocus': Enforce autoFocus prop is not used.
(() => {
    // Fail
    const bad = () => <div autoFocus="true" />;

    // Succeed
    const good = () => <div />;
})();

// '/no-distracting-elements': Enforce distracting elements are not used.
(() => {
    // Fail
    const bad1 = () => <marquee />;
    const bad2 = () => <blink />;

    // Succeed
    const good = () => <div />;
})();

// '/no-distracting-elements': Enforce distracting elements are not used.
(() => {
    // Fail
    const bad1 = () => <marquee />;
    const bad2 = () => <blink />;

    // Succeed
    const good = () => <div />;
})();

// '/no-interactive-element-to-noninteractive-role': Interactive elements should not be assigned non-interactive roles.
(() => {
    // Fail
    const bad = () => <input role="presentation" />;

    // Succeed
    const good = () => <input />;
})();

// '/no-noninteractive-element-interactions': Non-interactive elements should not be assigned mouse or keyboard event listeners.
(() => {
    // Fail
    const bad = () => <ol onClick={ console.log() } onKeyDown={ console.log() } />;

    // Succeed
    const good = () => <ol />;
})();

// '/no-noninteractive-element-to-interactive-role': Non-interactive elements should not be assigned interactive roles.
(() => {
    // Fail
    const bad = () => <ol onClick={ console.log() } onKeyDown={ console.log() } role="link" tabIndex="0" />;

    // Succeed
    const good = () => <ol />;
})();

// '/no-noninteractive-tabindex': tabIndex should only be declared on interactive elements
(() => {
    // Fail
    const bad = () => <div tabIndex="0"> Example </div>;

    // Succeed
    const good = () => <div> Example </div>;
})();

// '/no-onchange': Enforce usage of onBlur over onChange on select menus for accessibility.
(() => {
    // Fail
    const bad = () => <select onChange={ console.log() } />;

    // Succeed
    const good1 = () => <select onBlur={ console.log() } />;
    const good2 = () => <select onChange={ console.log() } onBlur={ console.log() } />;
})();

// '/no-redundant-roles': Enforce explicit role property is not the same as implicit/default role property on element.
(() => {
    // Fail
    const bad = () => <button role="button" />;

    // Succeed
    // Disabling the following rules to showcase success
    // eslint-disable-next-line jsx-a11y/no-interactive-element-to-noninteractive-role
    const good1 = () => <button role="presentation" />;
    const good2 = () => <select onChange={ console.log() } onBlur={ console.log() } />;
})();

// '/no-static-element-interactions': Enforce that non-interactive, visible elements (such as <div>)
//                                    that have click handlers use the role attribute.
(() => {
    // Fail
    const bad = () => <div onClick={ console.log() } onKeyDown={ console.log() } />;

    // Succeed
    // Disabling the following rules to showcase success
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    const good = () => <div onClick={ console.log() } onKeyDown={ console.log() } role="link" />;
})();

// '/role-has-required-aria-props': Enforce that elements with ARIA roles must have all required attributes for that role.
(() => {
    // Fail
    const bad = () => <span role="checkbox" />;

    // Succeed
    const good = () => <span role="checkbox" aria-checked="false" />;
})();

// '/role-supports-aria-props': Enforce that elements with explicit or implicit roles defined
//                              contain only aria-* properties supported by that role.
(() => {
    // Fail
    const bad = () => <span role="checkbox" aria-checked="false" aria-required />;

    // Succeed
    const good = () => <span role="checkbox" aria-checked="false" />;
})();

// '/scope': Enforce scope prop is only used on <th> elements.
(() => {
    // Fail
    const bad = () => <div scope="col" />;

    // Succeed
    const good = () => <th scope="col" />;
})();

// 'jsx-a11y/tabindex-no-positive': Enforce tabIndex value is not greater than zero.
(() => {
    // Fail
    const bad = () => <a href="www.example.com" tabIndex="1"> Example </a>;

    // Succeed
    const good = () => <a href="www.example.com" tabIndex="0"> Example </a>;
})();
