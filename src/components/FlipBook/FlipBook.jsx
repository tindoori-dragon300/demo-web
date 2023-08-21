import HTMLFlipBook from 'react-pageflip';
import React from 'react';
import './FlipBook.css'

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref}>
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

function FlipBook(props) {
    return (
        <HTMLFlipBook
            width={300}
            height={500}
            showCover={true}
            mobileScrollSupport={true}
            maxShadowOpacity={0.5}
        >
            <Page number="1">Page text</Page>
            <Page number="2">Page text</Page>
            <Page number="3">Page text</Page>
            <Page number="4">Page text</Page>
            <Page number="5">Page text</Page>
            <Page number="6">Page text</Page>
        </HTMLFlipBook>
    );
}

export default FlipBook;