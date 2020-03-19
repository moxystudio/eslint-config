import React from 'react';

const handleEvent = () => {};

// `accessible-emoji` - enforce emojis are wrapped in and provide screen reader access
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <span>🤔</span>;
}
// Good
{
    const good = () => <span role="img" aria-label="Thinking emoji">🤔</span>;
}

// `alt-text` - enforce all elements that require alternative text have meaningful information to relay back to end user
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <img />;
}
// Good
{
    const good = () => <img alt="this is a meaningful description to exemplify a good use case" />;
}

// `anchor-has-content` - enforce all anchors to contain accessible content
// ---------------------------------------------------------------------
// Bad
{
    const bad1 = () => <a href="www.example.com" />;
    const bad2 = () => <a href="www.example.com"><p aria-hidden>Example text</p></a>;
}
// Good
{
    const good1 = () => <a href="www.example.com">Example</a>;
    const good2 = () => <a href="www.example.com" dangerouslySetInnerHTML={ { __html: 'Example' } } />;
}

// `anchor-is-valid` - enforce all anchors are valid, navigable elements
// ---------------------------------------------------------------------
// Bad
{
    const bad1 = () => <a>Example</a>;
    const bad2 = () => <a href="#">Example</a>;
    const bad3 = () => <a onClick={ handleEvent }>Example</a>;
}
// Good
{
    const good1 = () => <a href="www.example.com">Example</a>;
    const good2 = () => <a href="www.example.com" onClick={ handleEvent } dangerouslySetInnerHTML={ { __html: 'Example' } } />;
}

// `aria-activedescendant-has-tabindex` - enforce elements with aria-activedescendant are tabbable
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <div aria-activedescendant={ innerWidth } />;
}
// Good
{
    const good1 = () => <input aria-activedescendant={ innerWidth } tabIndex="0" />;
}

// `aria-props` - enforce all aria-* props are valid
// ---------------------------------------------------------------------
// Bad
{
    const bad1 = () => <input aria-activedescndant={ innerWidth } tabIndex="0" />;
    const bad2 = () => <input aria-hdden />;
}
// Good
{
    const good1 = () => <input aria-activedescendant={ innerWidth } tabIndex="0" />;
    const good2 = () => <input aria-hidden />;
}

// `aria-proptypes` - enforce ARIA state and property values are valid
// ---------------------------------------------------------------------
// Bad
{
    const bad1 = () => <input aria-activedescendant={ 'true' } />;
    const bad2 = () => <input aria-hidden="yes please" />;
}
// Good
{
    const good1 = () => <input aria-activedescendant={ innerWidth } tabIndex="0" />;
    const good2 = () => <input aria-hidden="true" />;
}

// `aria-role` - enforce that elements with ARIA roles must use a valid, non-abstract ARIA role
// ---------------------------------------------------------------------
// Bad
{
    const bad1 = () => <input role="datepicker" />;
    const bad2 = () => <input role="range" />;
    const bad3 = () => <input role="" />;
}
// Good
{
    const good = () => <input role="button" />;
}

// `aria-unsupported-elements` - enforce that elements that do not support ARIA roles, states, and properties do not have those attributes
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <meta charset="utf-8" aria-hidden />;
}
// Good
{
    const good = () => <meta charset="utf-8" />;
}

// `click-events-have-key-events` - enforce a clickable non-interactive element has at least one keyboard event listener
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <div role="button" tabIndex="0" onClick={ handleEvent } />;
}
// Good
{
    const good = () => <div role="button" tabIndex="0" onClick={ handleEvent } onKeyDown={ handleEvent } />;
}

// `heading-has-content` - enforce heading (h1, h2, etc) elements contain accessible content
// ---------------------------------------------------------------------
// Bad
{
    const bad1 = () => <h1 />;
    const bad2 = () => <h1><p aria-hidden>Hidden</p></h1>;
}
// Good
{
    const good = () => <h1><p>Visible</p></h1>;
}

// `html-has-lang` - enforce <html> element has lang prop
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <html />;
}
// Good
{
    const good = () => <html lang="pt" />;
}

// `iframe-has-title` - enforce iframe elements have a title attribute
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <iframe />;
}
// Good
{
    const good = () => <iframe title="has a title" />;
}

// `img-redundant-alt` - enforce <img> alt prop does not contain the word "image", "picture", or "photo"
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <img alt="this image is a picture of a photo" />;
}
// Good
{
    const good = () => <img alt="Example of a negative after developing a roll of film." />;
}

// `interactive-supports-focus` - enforce that elements with interactive handlers like onClick must be focusable
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <span onClick={ handleEvent } onKeyDown={ handleEvent } role="button">Link</span>;
}
// Good
{
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    const good = () => <span onClick={ handleEvent } onKeyDown={ handleEvent } role="button" tabIndex="0">Link</span>;
}

// `label-has-associated-control` - enforce that a label tag has a text label and an associated control
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => (
        <div>
            <label>
                Link
            </label>
            <input />
        </div>
    );
}
// Good
{
    const good1 = () => (
        <div>
            <label>
                Link
                <input />
            </label>
        </div>
    );
    const good2 = () => (
        <div>
            <label htmlFor="input">
                Link
            </label>
            <input id="input" />
        </div>
    );
}

// `lang` - enforce lang attribute has a valid value
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <html lang="PT" />;
}
// Good
{
    const good = () => <html lang="pt" />;
}

// `media-has-caption` - enforces that <audio> and <video> elements must have a <track> for captions
// ---------------------------------------------------------------------
{
    // Not active
    const bad1 = () => <audio />;
    const bad2 = () => <audio> <track /></audio>;
}
// Good
{
    const good = () => <audio> <track kind="captions" /></audio>;
}

// `mouse-events-have-key-events` - enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users
// ---------------------------------------------------------------------
// Bad
{
    // Disabling the following rules to showcase error
    const bad = () => <button onMouseOut={ handleEvent } />;
}
// Good
{
    const good = () => <button onMouseOut={ handleEvent } onBlur={ handleEvent } />;
}

// `no-access-key` - enforce that the accessKey prop is not used on any element to
//                   avoid complications with keyboard commands used by a screen reader
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <div accessKey="s" />;
}
// Good
{
    const good = () => <div />;
}

// `no-autofocus` - enforce autoFocus prop is not used
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <div autoFocus="true" />;
}
// Good
{
    const good = () => <div />;
}

// `no-distracting-elements` - enforce distracting elements are not used
// ---------------------------------------------------------------------
// Bad
{
    const bad1 = () => <marquee />;
    const bad2 = () => <blink />;
}
// Good
{
    const good = () => <div />;
}

// `no-interactive-element-to-noninteractive-role` - Interactive elements should not be assigned non-interactive roles
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <input role="presentation" />;
}
// Good
{
    const good = () => <input />;
}

// `no-noninteractive-element-interactions` - Non-interactive elements should not be assigned mouse or keyboard event listeners
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <ol onClick={ handleEvent } onKeyDown={ handleEvent } />;
}
// Good
{
    const good = () => <ol />;
}

// `no-noninteractive-element-to-interactive-role` - Non-interactive elements should not be assigned interactive roles
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <ol onClick={ handleEvent } onKeyDown={ handleEvent } role="link" tabIndex="0" />;
}
// Good
{
    const good = () => <ol />;
}

// `no-noninteractive-tabindex` - tabIndex should only be declared on interactive element
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <div tabIndex="0">Example</div>;
}
// Good
{
    const good = () => <div>Example</div>;
}

// `no-onchange` - enforce usage of onBlur over onChange on select menus for accessibility
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <select onChange={ handleEvent } />;
}
// Good
{
    const good1 = () => <select onBlur={ handleEvent } />;
    const good2 = () => <select onChange={ handleEvent } onBlur={ handleEvent } />;
}

// `no-redundant-roles` - enforce explicit role property is not the same as implicit/default role property on element
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <button role="button" />;
}
// Good
{
    // Disabling the following rules to showcase success
    // eslint-disable-next-line jsx-a11y/no-interactive-element-to-noninteractive-role
    const good1 = () => <button role="presentation" />;
    const good2 = () => <select onChange={ handleEvent } onBlur={ handleEvent } />;
}

// `no-static-element-interactions` - enforce that non-inteactive,elements
//                                    (such as <div> that have click handlers use the role attribute)
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <div onClick={ handleEvent } onKeyDown={ handleEvent } />;
}
// Good
{
    // Disabling the following rules to showcase success
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    const good = () => <div onClick={ handleEvent } onKeyDown={ handleEvent } role="link" />;
}

// `role-has-required-aria-props` - enforce that elements with ARIA roles must have all required attributes for that role
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <span role="checkbox" />;
}
// Good
{
    const good = () => <span role="checkbox" aria-checked="false" />;
}

// `role-supports-aria-props` - enforce that elements with explicit or implicit roles contain
//                              only aria-* properties supported by that role
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <span role="checkbox" aria-checked="false" aria-required />;
}
// Good
{
    const good = () => <span role="checkbox" aria-checked="false" />;
}

// `scope` - enforce scope prop is only used on <th> elements
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <div scope="col" />;
}
// Good
{
    const good = () => <th scope="col" />;
}

// `jsx-a11y/tabindex-no-positive` - enforce tabIndex value is not greater than zero
// ---------------------------------------------------------------------
// Bad
{
    const bad = () => <a href="www.example.com" tabIndex="1">Example</a>;
}
// Good
{
    const good = () => <a href="www.example.com" tabIndex="0">Example</a>;
}
