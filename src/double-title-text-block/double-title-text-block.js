import { registerBlockType } from '@wordpress/blocks';

import './style.view.scss';
import './style.editor.scss';

import {
    RichText,
	InspectorControls
} from '@wordpress/block-editor';

const { getBlockDefaultClassName } = wp.blocks;


registerBlockType('borncreative/double-title-text-block', {
    title: 'Double Title and Text Block',
    icon: 'layout',
    category: 'born-creative-blocks',

    attributes: {
        headinga: {
            source: 'html',
            selector: '.headinga',
        },
        headingb: {
            source: 'html',
            selector: '.headingb',
        },
        contenta: {
            source: 'html',
            selector: '.contenta',
        },
        contentb: {
            source: 'html',
            selector: '.contentb',
        },
    },

    edit(props) {
        const { className, setAttributes } = props;
        const { attributes } = props;

        function changeHeadinga(headinga) {
            setAttributes({ headinga });
        }
        function changeHeadingb(headingb) {
            setAttributes({ headingb });
        }
        function changeContenta(contenta) {
            setAttributes({ contenta });
        }
        function changeContentb(contentb) {
            setAttributes({ contentb });
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
                <div class="col-full">
                    <RichText
                        className="headinga"
                        tagName="h2"
                        placeholder="Enter your heading"
                        value={attributes.headinga}
                        onChange={changeHeadinga}
                    />
                    <RichText
                        className="contenta"
                        tagName="p"
                        placeholder="Enter your content"
                        value={attributes.contenta}
                        onChange={changeContenta}
                    />
                    <hr />
                    <RichText
                        className="headingb"
                        tagName="h2"
                        placeholder="Enter your heading"
                        value={attributes.headingb}
                        onChange={changeHeadingb}
                    />
                    <RichText
                        className="contentb"
                        tagName="p"
                        placeholder="Enter your content"
                        value={attributes.contentb}
                        onChange={changeContentb}
                    />
                </div>
            </div>,
        ];
    },

    save(props) {
        const className = getBlockDefaultClassName('borncreative/double-title-text-block');
        const { attributes } = props;

        return (
            <div className={className} data-aos="fade-up" data-aos-duration="2000">
                <div class="col-full">
                    <RichText.Content
                        class="headinga"
                        tagName="h2"
                        value={attributes.headinga}
                    />
                    <RichText.Content
                        class="contenta"
                        tagName="p"
                        value={attributes.contenta}
                    />
                    <hr />
                    <RichText.Content
                        class="headingb"
                        tagName="h2"
                        value={attributes.headingb}
                    />
                    <RichText.Content
                        class="contentb"
                        tagName="p"
                        value={attributes.contentb}
                    />
                </div>
            </div>
        );
    },
});

