import { registerBlockType } from '@wordpress/blocks';

import './style.view.scss';
import './style.editor.scss';

import {
    RichText,
    MediaUpload,
	InspectorControls
} from '@wordpress/block-editor';

const { getBlockDefaultClassName } = wp.blocks;

import './header-block/header-block'
import './header-block-video/header-block-video'
import './header-block-alt/header-block-alt'
import './the-process-block/the-process-block'
import './the-solution-block/the-solution-block'
import './five-image-block/five-image-block'


registerBlockType('borncreative/client-text-block', {
    title: 'Client Intro Text Block',
    icon: 'id',
    category: 'born-creative-blocks',

    attributes: {
        bodyContent: {
            source: 'html',
            selector: '.copy-bd'
        },
        headinga: {
            source: 'html',
            selector: '.headinga',
        },
        headingb: {
            source: 'html',
            selector: '.headingb',
        },
        headingc: {
            source: 'html',
            selector: '.headingc',
        },
        linea: {
            source: 'html',
            selector: '.linea'
        },
        lineb: {
            source: 'html',
            selector: '.lineb'
        },
        linec: {
            source: 'html',
            selector: '.linec'
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

        function changeHeadinga(headinga) {
            setAttributes({ headinga });
        }
        function changeHeadingb(headingb) {
            setAttributes({ headingb });
        }
        function changeHeadingc(headingc) {
            setAttributes({ headingc });
        }
        function changeLinea(linea) {
            setAttributes({ linea });
        }
        function changeLineb(lineb) {
            setAttributes({ lineb });
        }
        function changeLinec(linec) {
            setAttributes({ linec });
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
                <div className="copy col-full">
                    <div class="row">
                        <div class="column1">
                            <RichText
                                className="copy-bd"
                                tagName="p"
                                placeholder="Enter your text here"
                                value={attributes.bodyContent}
                                onChange={changeBodyContent}
                            />
                        </div>
                        <div class="column2">
                            <RichText
                                className="headinga"
                                tagName="h4"
                                placeholder="Client"
                                value={attributes.headinga}
                                onChange={changeHeadinga}
                            />
                            <RichText
                                className="linea"
                                tagName="p"
                                placeholder="Client Name"
                                value={attributes.linea}
                                onChange={changeLinea}
                            />
                            <RichText
                                className="headingb"
                                tagName="h4"
                                placeholder="Project Type"
                                value={attributes.headingb}
                                onChange={changeHeadingb}
                            />
                            <RichText
                                className="lineb"
                                tagName="p"
                                placeholder="Client Name"
                                value={attributes.lineb}
                                onChange={changeLineb}
                            />
                            <RichText
                                className="headingc"
                                tagName="h4"
                                placeholder="Services"
                                value={attributes.headingc}
                                onChange={changeHeadingc}
                            />
                            <RichText
                                className="linec"
                                tagName="p"
                                placeholder="Client Name"
                                value={attributes.linec}
                                onChange={changeLinec}
                            />
                        </div>
                    </div>
                </div>
            </div>,
        ];
    },

    save(props) {
        const className = getBlockDefaultClassName('borncreative/intro-text-block');
        const { attributes } = props;

        return (
            <div className={className} data-aos="fade-up" data-aos-duration="2000">
                <div className="copy col-full">
                    <div class="row">
                        <div class="column1">
                            <RichText.Content
                                className="copy-bd"
                                tagName="p"
                                value={attributes.bodyContent}
                            />
                        </div>
                        <div class="column2">
                            <RichText.Content
                                class="headinga"
                                tagName="h4"
                                value={attributes.headinga}
                            />
                            <RichText.Content
                                class="linea"
                                tagName="p"
                                value={attributes.linea}
                            />

                            <RichText.Content
                                class="headingb"
                                tagName="h4"
                                value={attributes.headingb}
                            />
                            <RichText.Content
                                class="lineb"
                                tagName="p"
                                value={attributes.lineb}
                            />

                            <RichText.Content
                                class="headingc"
                                tagName="h4"
                                value={attributes.headingc}
                            />
                            <RichText.Content
                                class="linec"
                                tagName="p"
                                value={attributes.linec}
                            />

                        </div>
                    </div>
                </div>
            </div>
        );
    },
});

registerBlockType('borncreative/title-only-block', {
    title: 'Title Only Block',
    icon: 'heading',
    category: 'born-creative-blocks',

    attributes: {
        heading: {
            source: 'html',
            selector: 'h2',
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
                        className="copy-hd"
                        tagName="h2"
                        placeholder="Enter your heading"
                        value={attributes.heading}
                        onChange={changeHeading}
                    />
                </div>
            </div>,
        ];
    },

    save(props) {
        const className = getBlockDefaultClassName('borncreative/title-only-block');
        const { attributes } = props;

        return (
            <div className={className} data-aos="fade-up" data-aos-duration="2000">
                <div class="col-full">
                    <RichText.Content
                        class="copy-hd"
                        tagName="h2"
                        value={attributes.heading}
                    />
                    <hr />
                </div>
            </div>
        );
    },
});




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


registerBlockType('borncreative/the-5-image-gallery-block', {
    title: '5 image gallery',
    icon: 'layout',
    category: 'born-creative-blocks',

    attributes: {
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
        imaged: {
            type: 'string',
            default: 'http://placehold.it/500'
        },
        imagee: {
            type: 'string',
            default: 'http://placehold.it/500'
        },

    },

    edit(props) {
        const { className, setAttributes } = props;
        const { attributes } = props;



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

        function selectImaged(value) {
            setAttributes({
                imaged: value.sizes.full.url,
            })
        }

        function selectImagee(value) {
            setAttributes({
                imagee: value.sizes.full.url,
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


                <div class="column1">
                    <div className="media pr">
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
                    </div>
                </div>
                <div class="column1">
                    <div className="media pb">
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
                    </div>
                    <div className="media pb">
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
                    <div class="extra-row">
                        <div className="media pr">
                            <MediaUpload
                                onSelect={selectImaged}
                                render={({ open }) => {
                                    return (
                                        <img
                                            onClick={open}
                                            src={attributes.imaged}
                                        />
                                    );
                                }}
                            />
                        </div>
                        <div className="media">
                            <MediaUpload
                                onSelect={selectImagee}
                                render={({ open }) => {
                                    return (
                                        <img
                                            onClick={open}
                                            src={attributes.imagee}
                                        />
                                    );
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>,
        ];
    },

    save(props) {
        const className = getBlockDefaultClassName('borncreative/the-5-image-gallery-block');
        const { attributes } = props;



        return (
            <div className={className} data-aos="fade-up" data-aos-duration="2000">
                <div class="column1">
                    <div
                        className="media pr">
                        <div class="zoom"><img src={attributes.imagea} /></div>
                    </div>
                </div>
                <div class="column1">
                    <div
                        className="media pb">
                        <div class="zoom"><img src={attributes.imageb} /></div>
                    </div>
                    <div
                        className="media pb">
                        <div class="zoom"><img src={attributes.imagec} /></div>
                    </div>
                    <div class="extra-row">
                        <div
                            className="media pr">
                            <div class="zoom"><img src={attributes.imaged} /></div>
                        </div>
                        <div
                            className="media">
                            <div class="zoom"><img src={attributes.imagee} /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
});


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

registerBlockType('borncreative/alt-intro-text-block', {
    title: 'Alternative Intro Text Block',
    icon: 'text',
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
        headingc: {
            source: 'html',
            selector: '.headingc',
        },
        headingd: {
            source: 'html',
            selector: '.headingd',
        },
        headinge: {
            source: 'html',
            selector: '.headinge',
        },

        linea: {
            source: 'html',
            selector: '.linea'
        },
        lineb: {
            source: 'html',
            selector: '.lineb'
        },
        linec: {
            source: 'html',
            selector: '.linec'
        },
        lined: {
            source: 'html',
            selector: '.lined'
        },
        linee: {
            source: 'html',
            selector: '.linee'
        },
        
        
        icona: {
            source: 'html',
            selector: '.icona'
        },
        iconb: {
            source: 'html',
            selector: '.iconb'
        },
        iconc: {
            source: 'html',
            selector: '.iconc'
        },
        icond: {
            source: 'html',
            selector: '.icond'
        },
        icone: {
            source: 'html',
            selector: '.icone'
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
        function changeHeadingc(headingc) {
            setAttributes({ headingc });
        }
        function changeHeadingd(headingd) {
            setAttributes({ headingd });
        }
        function changeHeadinge(headinge) {
            setAttributes({ headinge });
        }
        function changeLinea(linea) {
            setAttributes({ linea });
        }
        function changeLineb(lineb) {
            setAttributes({ lineb });
        }
        function changeLinec(linec) {
            setAttributes({ linec });
        }
        function changeLined(lined) {
            setAttributes({ lined });
        }
        function changeLinee(linee) {
            setAttributes({ linee });
        }
        function changeIcona(icona) {
            setAttributes({ icona });
        }
        function changeIconb(iconb) {
            setAttributes({ iconb });
        }
        function changeIconc(iconc) {
            setAttributes({ iconc });
        }
        function changeIcond(icond) {
            setAttributes({ icond });
        }
        function changeIcone(icone) {
            setAttributes({ icone });
        }

        return [
            <InspectorControls>
                <div
                    style={{
                        padding: '1em 0',
                    }}
                >
                    Options
                </div>
            </InspectorControls>,
            <div className={className}>
                <div className="copy col-full">
                    <div class="row">
                        <div class="column1">
                            <div class="icon-group-holder">
                                <div class="column3">
                                    <RichText
                                        className="icona blue-circle-icon"
                                        tagName="span"
                                        placeholder="1"
                                        value={attributes.icona}
                                        onChange={changeIcona}
                                    />
                                </div>
                                <div class="column4">
                                    <RichText
                                        className="headinga"
                                        tagName="h4"
                                        placeholder="Heading"
                                        value={attributes.headinga}
                                        onChange={changeHeadinga}
                                    />
                                    <RichText
                                        className="linea"
                                        tagName="p"
                                        placeholder="Text Content"
                                        value={attributes.linea}
                                        onChange={changeLinea}
                                    />
                                </div>
                            </div>
                            <div class="icon-group-holder">
                                <div class="column3">
                                    <RichText
                                        className="iconb blue-circle-icon"
                                        tagName="span"
                                        placeholder="2"
                                        value={attributes.iconb}
                                        onChange={changeIconb}
                                    />
                                </div>
                                <div class="column4">
                                    <RichText
                                        className="headingb"
                                        tagName="h4"
                                        placeholder="Heading"
                                        value={attributes.headingb}
                                        onChange={changeHeadingb}
                                    />
                                    <RichText
                                        className="lineb"
                                        tagName="p"
                                        placeholder="Text Content"
                                        value={attributes.lineb}
                                        onChange={changeLineb}
                                    /> 
                                </div>
                            </div>
                            <div class="icon-group-holder">
                                <div class="column3">
                                    <RichText
                                        className="iconc blue-circle-icon"
                                        tagName="span"
                                        placeholder="3"
                                        value={attributes.iconc}
                                        onChange={changeIconc}
                                    />
                                </div>
                                <div class="column4">
                                    <RichText
                                        className="headingc"
                                        tagName="h4"
                                        placeholder="Heading"
                                        value={attributes.headingc}
                                        onChange={changeHeadingc}
                                    />
                                    <RichText
                                        className="linec blue-circle-icon"
                                        tagName="p"
                                        placeholder="Text Content"
                                        value={attributes.linec}
                                        onChange={changeLinec}
                                    />
                                </div>
                            </div>
                            <div class="icon-group-holder">
                                <div class="column3">
                                    <RichText
                                        className="icond blue-circle-icon"
                                        tagName="span"
                                        placeholder="4"
                                        value={attributes.icond}
                                        onChange={changeIcond}
                                    />
                                </div>
                                <div class="column4">
                                    <RichText
                                        className="headingd"
                                        tagName="h4"
                                        placeholder="Heading"
                                        value={attributes.headingd}
                                        onChange={changeHeadingd}
                                    />
                                    <RichText
                                        className="lined"
                                        tagName="p"
                                        placeholder="Text Content"
                                        value={attributes.lined}
                                        onChange={changeLined}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="column2">
                            <RichText
                                className="icone"
                                tagName="h5"
                                placeholder="text content"
                                value={attributes.icone}
                                onChange={changeIcone}
                            />
                            <RichText
                                className="headinge"
                                tagName="h4"
                                placeholder="Heading"
                                value={attributes.headinge}
                                onChange={changeHeadinge}
                            />
                            <RichText
                                className="linee"
                                tagName="p"
                                placeholder="Text Content"
                                value={attributes.linee}
                                onChange={changeLinee}
                            />

                        </div>
                    </div>
                </div>
            </div>
        ];
    },

    save(props) {
        const className = getBlockDefaultClassName('borncreative/alt-intro-text-block');
        const { attributes } = props;

        return (
            <div className={className} data-aos="fade-up" data-aos-duration="2000">
                <div className="copy col-full">
                    <div class="row">
                        
                        <div class="column1">
                            <div class="icon-group-holder">
                                <div class="column3">
                                    <RichText.Content
                                        class="icona blue-circle-icon"
                                        tagName="span"
                                        value={attributes.icona}
                                    />
                                </div>
                                <div class="column4">
                                    <RichText.Content
                                        class="headinga"
                                        tagName="h4"
                                        value={attributes.headinga}
                                    />
                                    <RichText.Content
                                        class="linea"
                                        tagName="p"
                                        value={attributes.linea}
                                    />
                                </div>
                            </div>
                            <div class="icon-group-holder">
                                <div class="column3">
                                    <RichText.Content
                                        class="iconb blue-circle-icon"
                                        tagName="span"
                                        value={attributes.iconb}
                                    />
                                </div>
                                <div class="column4">
                                    <RichText.Content
                                        class="headingb"
                                        tagName="h4"
                                        value={attributes.headingb}
                                    />
                                    <RichText.Content
                                        class="lineb"
                                        tagName="p"
                                        value={attributes.lineb}
                                    />
                                </div>
                            </div>
                            <div class="icon-group-holder">
                                <div class="column3">
                                    <RichText.Content
                                        class="iconc blue-circle-icon"
                                        tagName="span"
                                        value={attributes.iconc}
                                    />
                                </div>
                                <div class="column4">
                                    <RichText.Content
                                        class="headingc"
                                        tagName="h4"
                                        value={attributes.headingc}
                                    />
                                    <RichText.Content
                                        class="linec"
                                        tagName="p"
                                        value={attributes.linec}
                                    />
                                </div>
                            </div>
                            <div class="icon-group-holder">
                                <div class="column3">
                                    <RichText.Content
                                        class="icond blue-circle-icon"
                                        tagName="span"
                                        value={attributes.icond}
                                    />
                                </div>
                                <div class="column4">
                                    <RichText.Content
                                        class="headingd"
                                        tagName="h4"
                                        value={attributes.headingd}
                                    />
                                    <RichText.Content
                                        class="lined"
                                        tagName="p"
                                        value={attributes.lined}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="column2">
                            <RichText.Content
                                class="icone"
                                tagName="h5"
                                value={attributes.icone}
                            />
                            <RichText.Content
                                class="headinge"
                                tagName="h4"
                                value={attributes.headinge}
                            />
                            <RichText.Content
                                class="linee"
                                tagName="p"
                                value={attributes.linee}
                            />


                        </div>
                    </div>
                </div>
            </div>
        );
    },
});
