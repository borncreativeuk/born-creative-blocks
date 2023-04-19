import { registerBlockType } from '@wordpress/blocks';

import './style.view.scss';
import './style.editor.scss';

import {
    RichText,
	InspectorControls
} from '@wordpress/block-editor';

const { getBlockDefaultClassName } = wp.blocks;

registerBlockType('borncreative/outro-text-block', {
    title: 'Outro Text Block',
    icon: 'text',
    category: 'born-creative-blocks',

    attributes: {
        bodyContent: {
            source: 'html',
            selector: '.copy-h3'
        },
        linkContent: {
            source: 'html',
            selector: '.copy-link'
        },
        heading: {
            source: 'html',
            selector: '.copy-h2',
        },
    },

    edit(props) {
        const { className, setAttributes } = props;
        const { attributes } = props;

        // we create a function that will take the changes from RichText
        // and update the attributes
        function changeBodyContent(changes) {
            setAttributes({
                bodyContent: changes
            })
        }
        function changeLinkContent(changes) {
            setAttributes({
                linkContent: changes
            })
        }
        
        function changeHeading(heading) {
            // using some nice js features instead of typing
            setAttributes({ heading });
        }



        return [
            <InspectorControls>
                {/* Later, when we have customizable options we will add stuff here! */}
                <div
                    style={{
                        padding: '1em 0',
                    }}
                >
                    Options
                </div>
            </InspectorControls>,
            <div className={className}>
                <div className="copy">
                    <div class="col-full">
                        <RichText
                            className="copy-h2"
                            tagName="h2"
                            placeholder="Enter your heading"
                            value={attributes.heading}
                            onChange={changeHeading}
                        />
                        
                        <RichText
                            className="copy-h3"
                            tagName="h3"
                            placeholder="Enter your text here"
                            value={attributes.bodyContent}
                            onChange={changeBodyContent}
                        />
                        <RichText
                            className="copy-link"
                            tagName="p"
                            placeholder="Enter your text here"
                            value={attributes.linkContent}
                            onChange={changeLinkContent}
                        />
                    </div>
                </div>
            </div>,
        ];
    },

    save(props) {
        const className = getBlockDefaultClassName('borncreative/outro-text-block');
        const { attributes } = props;

        return (
            <div className={className}>
                <div className="copy">
                    <div class="col-full">
                        <RichText.Content
                            class="copy-h2"
                            tagName="h2"
                            value={attributes.heading}
                        />
                        <RichText.Content
                            className="copy-h3"
                            tagName="h3"
                            value={attributes.bodyContent}
                        />
                        <RichText.Content
                            className="copy-link"
                            tagName="p"
                            value={attributes.linkContent}
                        />
                    </div>
                </div>
            </div>
        );
    },
});
