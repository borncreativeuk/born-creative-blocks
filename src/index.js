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
        image: {
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
                image: value.sizes.full.url,
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
                                <img 
                                    onClick={open}
                                    src={attributes.image}
                                    />
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
                    <img src={ attributes.image }/>
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
    icon: 'smiley',
    category: 'common',

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
                    <hr/>
                </div>
            </div>
        );
    },
});




registerBlockType('borncreative/text-only-block', {
    title: 'Text Only Block',
    icon: 'smiley',
    category: 'common',

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
                        class="copy-hd"
                        tagName="div"
                        value={attributes.heading}
                        />
                    <hr/>
                </div>
            </div>
        );
    },
});




registerBlockType('borncreative/the-process-block', {
    title: 'The Process Block',
    icon: 'smiley',
    category: 'common',

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
        figurec: {
            source: 'html',
            selector: '.figurec'
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
        function changeFigurec(figurec) {
            setAttributes({ figurec });
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
            <div className="col-full">
            <RichText 
                className="headinga"
                tagName="h2"
                placeholder="Enter your text here"
                value={attributes.headinga}
                onChange={changeHeadinga}
                />
                </div>
                <div class="row">
                <div className="media column1">
                    <MediaUpload 
                        onSelect={selectImagea}
                        render={ ({open}) => {
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
                <div className="media column2">
                    <MediaUpload 
                        onSelect={selectImageb}
                        render={ ({open}) => {
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
                <div className="media column1">
                    <MediaUpload 
                        onSelect={selectImagec}
                        render={ ({open}) => {
                            return (
                                <img 
                                    onClick={open}
                                    src={attributes.imagec}
                                    />
                            );
                        }}
                    />
                    <RichText 
                        className="figurec"
                        tagName="figure"
                        placeholder="Enter your text here"
                        value={attributes.figurec}
                        onChange={changeFigurec}
                        />
                </div>
                </div>
                <div className="copy">
                    <div class="col-full">
                        <RichText 
                        className="headingb"
                        tagName="h3"
                        placeholder="Enter your text here"
                        value={attributes.headingb}
                        onChange={changeHeadingb}
                        />
                        <div class="column3">
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
        const className = getBlockDefaultClassName('borncreative/the-process-block');
        const { attributes } = props;

        
            
        return (
            <div className={className} data-aos="fade-up" data-aos-duration="2000">
                <div className="col-full">
                    <RichText.Content 
                        class="headinga"
                        tagName="h2"
                        value={attributes.headinga}
                        />
                    <hr/>
                </div>
                <div class="row">
                    <div 
                    className="media column1">
                        <div class="zoom"><img src={ attributes.imagea }/></div>
                        <figure className="figurea">{ attributes.figurea }</figure>
                    </div>
                    <div 
                    className="media column2">
                        <div class="zoom"><img src={ attributes.imageb }/></div>
                        <figure className="figureb">{ attributes.figureb }</figure>
                    </div>
                    <div 
                    className="media column1">
                        <div class="zoom"><img src={ attributes.imagec }/></div>
                        <figure className="figurec">{ attributes.figurec }</figure>
                    </div>
                </div>
                <div className="copy">
                <div class="col-full">
                    <RichText.Content 
                    class="headingb"
                    tagName="h3"
                    value={attributes.headingb}
                    />
                    <div class="column3">
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









registerBlockType('borncreative/the-solution-block', {
    title: 'The Solution Block',
    icon: 'smiley',
    category: 'common',

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
                        render={ ({open}) => {
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
                            render={ ({open}) => {
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
                            render={ ({open}) => {
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
                    <hr/>
                </div>

                <img class="imagec" src={ attributes.imagec }/>

                <div class="col-full">
                    <div class="row">
                        <div class="column1"></div>
                        <div class="media column1">
                            <div class="zoom"><img src={ attributes.imagea }/></div>
                            <figure className="figurea">{ attributes.figurea }</figure>
                        </div>
                        <div class="media column1">
                            <div class="zoom"><img src={ attributes.imageb }/></div>
                            <figure className="figureb">{ attributes.figureb }</figure>
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

 







registerBlockType('borncreative/the-5-image-gallery-block', {
    title: '5 image gallery',
    icon: 'smiley',
    category: 'common',

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
                        render={ ({open}) => {
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
                        render={ ({open}) => {
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
                        render={ ({open}) => {
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
                        render={ ({open}) => {
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
                        render={ ({open}) => {
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
                        <div class="zoom"><img src={ attributes.imagea }/></div>
                    </div>
                </div>
                <div class="column1">
                    <div 
                    className="media pb">
                        <div class="zoom"><img src={ attributes.imageb }/></div>
                    </div>
                    <div 
                    className="media pb">
                        <div class="zoom"><img src={ attributes.imagec }/></div>
                    </div>
                    <div class="extra-row">
                        <div 
                        className="media pr">
                            <div class="zoom"><img src={ attributes.imaged }/></div>
                        </div>
                        <div 
                        className="media">
                            <div class="zoom"><img src={ attributes.imagee }/></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
});













registerBlockType('borncreative/double-title-text-block', {
    title: 'Double Title and Text Block',
    icon: 'smiley',
    category: 'common',

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
                    <hr/>
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
                    <hr/>
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

