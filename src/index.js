import { registerBlockType } from '@wordpress/blocks';

import './style.view.scss';
import './style.editor.scss';

const {
    getBlockDefaultClassName
} = wp.blocks;

const { 
    InspectorControls,
    RichText,
    MediaUpload
} = wp.editor;

registerBlockType('borncreative/header-block', {
    title: 'Header Block',
    icon: 'smiley',
    category: 'common',

    attributes: {
        bodyContent: {
            source: 'html',
            selector: '.copy-bd'
        },
        heading: {
            source: 'html',
            selector: 'h2',
        },
        imgUrl: {
            type: 'string',
            default: 'http://placehold.it/500'
        }
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

        function changeHeading(heading) {
            // using some nice js features instead of typing
            // { heading: heading }
            setAttributes({ heading });
        }

        function selectImage(value) {
            console.log(value);
            setAttributes({
                imgUrl: value.sizes.full.url,
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
                <div className="media">
                    <MediaUpload 
                        onSelect={selectImage}
                        render={ ({open}) => {
                            return (
                                <button onClick={open}>
                                    <img 
                                        src={attributes.imgUrl}
                                        />
                                </button>
                            );
                        }}
                    />
                </div>
                <div className="copy">
                <div class="col-full">
                    <RichText 
                            className="copy-hd"
                            tagName="h2"
                            placeholder="Enter your heading"
                            value={attributes.heading}
                            onChange={changeHeading}
                            />
                    {/* Content is replaced by this guy.
                    We determin the class name and the html tag that
                    we want it to show as. */}
                    <RichText 
                        className="copy-bd"
                        tagName="h3"
                        placeholder="Enter your text here"
                        value={attributes.bodyContent}
                        onChange={changeBodyContent}
                        />
                </div>
                </div>
            </div>,
        ];
    },

    save(props) {
        const className = getBlockDefaultClassName('borncreative/header-block');
        const { attributes } = props;

        
            
        

        return (
            <div className={className}>
                <div 
                className="media">
                    <img src="{ attributes.imgUrl }">
                </div>
                <div className="copy">
                <div class="col-full">
                    <RichText.Content 
                        class="copy-hd"
                        tagName="h2"
                        value={attributes.heading}
                        />
                    <RichText.Content 
                        className="copy-bd" 
                        tagName="h3" 
                        value={attributes.bodyContent} 
                        />
                </div>
                </div>
            </div>
        );
    },
});

 








registerBlockType('borncreative/intro-text-block', {
    title: 'Intro Text Block',
    icon: 'smiley',
    category: 'common',

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
            <div className={className}>
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