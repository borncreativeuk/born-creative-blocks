import { registerBlockType } from '@wordpress/blocks';

import './style.view.scss';
import './style.editor.scss';

import {
    RichText,
	InspectorControls
} from '@wordpress/block-editor';

const { getBlockDefaultClassName } = wp.blocks;


registerBlockType('borncreative/text-only-block', {
    title: 'Text Only Block',
    icon: 'heading',
    category: 'born-creative-blocks',

    attributes: {
        heading: {
            source: 'html',
            selector: '.copy-bd',
        },
    },

    edit(props) {
        const { className, setAttributes } = props;
        const { attributes } = props;

        function changeHeading(heading) {
            // using some nice js features instead of typing
            // { heading: heading }
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
                <div class="col-full">
                    <RichText
                        className="copy-bd"
                        tagName="div"
                        placeholder="Enter your heading"
                        value={attributes.heading}
                        onChange={changeHeading}
                    />
                </div>
            </div>,
        ];
    },

    save(props) {
        const className = getBlockDefaultClassName('borncreative/text-only-block');
        const { attributes } = props;

        return (
            <div className={className} data-aos="fade-up" data-aos-duration="2000">
                <div class="col-full">
                    <RichText.Content
                        class="copy-bd"
                        tagName="div"
                        value={attributes.heading}
                    />
                </div>
            </div>
        );
    },
});

