import { registerBlockType } from '@wordpress/blocks';

import './style.view.scss';
import './style.editor.scss';

import {
    RichText,
    MediaUpload,
	InspectorControls
} from '@wordpress/block-editor';

const { getBlockDefaultClassName } = wp.blocks;


registerBlockType('borncreative/the-solution-block', {
    title: 'The Solution Block',
    icon: 'layout',
    category: 'born-creative-blocks',

    attributes: {
        headinga: {
            source: 'html',
            selector: 'h2',
        },
        headingb: {
            source: 'html',
            selector: 'h3',
        },
        bodyContent: {
            source: 'html',
            selector: 'p',
        },
        imagea: {
            type: 'string',
            default: 'http://placehold.it/500'
        },
        imageb: {
            type: 'string',
            default: 'http://placehold.it/500'
        },
        imagec: {
            type: 'string',
            default: 'http://placehold.it/500'
        },
        figurea: {
            source: 'html',
            selector: '.figurea'
        },
        figureb: {
            source: 'html',
            selector: '.figureb'
        },
    },

    edit(props) {
        const { className, setAttributes } = props;
        const { attributes } = props;

        // we create a function that will take the changes from RichText
        // and update the attributes
        function changeHeadinga(headinga) {
            setAttributes({ headinga });
        }
        function changeHeadingb(headingb) {
            setAttributes({ headingb });
        }

        function selectImagea(value) {
            setAttributes({
                imagea: value.sizes.full.url,
            })
        }
        function selectImageb(value) {
            setAttributes({
                imageb: value.sizes.full.url,
            })
        }
        function selectImagec(value) {
            setAttributes({
                imagec: value.sizes.full.url,
            })
        }
        function changeFigurea(figurea) {
            setAttributes({ figurea });
        }
        function changeFigureb(figureb) {
            setAttributes({ figureb });
        }
        function changeBodyContent(changes) {
            setAttributes({
                bodyContent: changes
            })
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

                <div className="col-full ws-t ws-b">
                    <RichText
                        className="headinga"
                        tagName="h2"
                        placeholder="Enter your text here"
                        value={attributes.headinga}
                        onChange={changeHeadinga}
                    />
                </div>


                <div className="media imagec">
                    <MediaUpload
                        onSelect={selectImagec}
                        render={({ open }) => {
                            return (
                                <img
                                    onClick={open}
                                    src={attributes.imagec}
                                />
                            );
                        }}
                    />
                </div>


                <div class="col-full">
                    <div class="row">
                        <div class="column1"></div>
                        <div className="media column1">
                            <MediaUpload
                                onSelect={selectImagea}
                                render={({ open }) => {
                                    return (
                                        <img
                                            onClick={open}
                                            src={attributes.imagea}
                                        />
                                    );
                                }}
                            />
                            <RichText
                                className="figurea"
                                tagName="figure"
                                placeholder="Enter your text here"
                                value={attributes.figurea}
                                onChange={changeFigurea}
                            />
                        </div>
                        <div className="media column1">
                            <MediaUpload
                                onSelect={selectImageb}
                                render={({ open }) => {
                                    return (
                                        <img
                                            onClick={open}
                                            src={attributes.imageb}
                                        />
                                    );
                                }}
                            />
                            <RichText
                                className="figureb"
                                tagName="figure"
                                placeholder="Enter your text here"
                                value={attributes.figureb}
                                onChange={changeFigureb}
                            />
                        </div>
                    </div>
                    <div class="row ws-t">
                        <div class="column1"></div>
                        <div className="copy">
                            <RichText
                                className="headingb"
                                tagName="h3"
                                placeholder="Enter your text here"
                                value={attributes.headingb}
                                onChange={changeHeadingb}
                            />
                        </div>
                    </div>
                    <div class="row ws-b">
                        <div class="column1"></div>
                        <div class="column2">
                            <RichText
                                className="copy-bd"
                                tagName="p"
                                placeholder="Enter your text here"
                                value={attributes.bodyContent}
                                onChange={changeBodyContent}
                            />
                        </div>
                    </div>
                </div>
            </div>,
        ];
    },

    save(props) {
        const className = getBlockDefaultClassName('borncreative/the-solution-block');
        const { attributes } = props;


        return (
            <div className={className} data-aos="fade-up" data-aos-duration="2000">
                <div className="col-full ws-t ws-b">
                    <RichText.Content
                        class="headinga"
                        tagName="h2"
                        value={attributes.headinga}
                    />
                    <hr />
                </div>

                <img class="imagec" src={attributes.imagec} />

                <div class="col-full">
                    <div class="row">
                        <div class="column1"></div>
                        <div class="media column1">
                            <div class="zoom"><img src={attributes.imagea} /></div>
                            <figure className="figurea">{attributes.figurea}</figure>
                        </div>
                        <div class="media column1">
                            <div class="zoom"><img src={attributes.imageb} /></div>
                            <figure className="figureb">{attributes.figureb}</figure>
                        </div>
                    </div>
                    <div class="row ws-t">
                        <div class="column1"></div>
                        <div className="copy">
                            <RichText.Content
                                class="headingb"
                                tagName="h3"
                                value={attributes.headingb}
                            />
                        </div>
                    </div>
                    <div class="row ws-b">
                        <div class="column1"></div>
                        <div class="column2">
                            <RichText.Content
                                className="copy-bd"
                                tagName="p"
                                value={attributes.bodyContent}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    },
});
