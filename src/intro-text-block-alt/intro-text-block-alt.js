import { registerBlockType } from '@wordpress/blocks';

import './style.view.scss';
import './style.editor.scss';

import {
    RichText,
	InspectorControls
} from '@wordpress/block-editor';

const { getBlockDefaultClassName } = wp.blocks;


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
