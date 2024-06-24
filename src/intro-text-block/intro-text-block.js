import { registerBlockType } from '@wordpress/blocks';

import './style.view.scss';
import './style.editor.scss';

import { RichText, MediaUpload } from '@wordpress/block-editor';

const { getBlockDefaultClassName } = wp.blocks;
const { Fragment } = wp.element;
const { InspectorControls, PanelColorSettings, withColors, getColorClassName } =
	wp.blockEditor;

const edit_header_block = ( props ) => {
	const { className, setAttributes } = props;
	const { attributes } = props;
	const { textColor, setTextColor } = props;
	const { backgroundColor, setBackgroundColor } = props;

	let custom_color_class;
	const custom_color_style = {};
	if ( textColor != undefined ) {
		if ( textColor.class != undefined ) {
			custom_color_class = textColor.class;
		} else {
			custom_color_style.color = textColor.color;
		}
	}

	let custom_backgroundcolor_class;
	const custom_backgroundcolor_style = {};
	if ( backgroundColor != undefined ) {
		if ( backgroundColor.class != undefined ) {
			custom_backgroundcolor_class = backgroundColor.class;
		} else {
			custom_backgroundcolor_style.backgroundColor =
				backgroundColor.color;
		}
	}

	// we create a function that will take the changes from RichText
	// and update the attributes
	function changeBodyContent( changes ) {
		setAttributes( {
			bodyContent: changes,
		} );
	}

	function changeHeadinga( headinga ) {
		setAttributes( { headinga } );
	}
	function changeHeadingb( headingb ) {
		setAttributes( { headingb } );
	}
	function changeHeadingc( headingc ) {
		setAttributes( { headingc } );
	}
	function changeLinea( linea ) {
		setAttributes( { linea } );
	}
	function changeLineb( lineb ) {
		setAttributes( { lineb } );
	}
	function changeLinec( linec ) {
		setAttributes( { linec } );
	}

	return [
		<Fragment>
			<InspectorControls>
				{ /* Later, when we have customizable options we will add stuff here! */ }
				<div
					style={ {
						padding: '1em 0',
					} }
				>
					Options
				</div>
				<PanelColorSettings
					title="Color settings"
					colorSettings={ [
						{
							value: textColor.color,
							onChange: setTextColor,
							label: 'Text color',
						},
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: 'Background color',
						},
					] }
				/>
			</InspectorControls>
			<div
				className={ className + ' ' + custom_backgroundcolor_class }
				style={ custom_backgroundcolor_style }
			>
				<div className="copy col-full">
					<div className="row">
						<div className="column1">
							<RichText
								className={ 'copy-bd ' + custom_color_class }
								style={ custom_color_style }
								tagName="p"
								placeholder="Enter your text here"
								value={ attributes.bodyContent }
								onChange={ changeBodyContent }
							/>
						</div>
						<div className="column2">
							<RichText
								className={ 'headinga ' + custom_color_class }
								style={ custom_color_style }
								tagName="h4"
								placeholder="Client"
								value={ attributes.headinga }
								onChange={ changeHeadinga }
							/>
							<RichText
								className={ 'linea ' + custom_color_class }
								style={ custom_color_style }
								tagName="p"
								placeholder="Client Name"
								value={ attributes.linea }
								onChange={ changeLinea }
							/>
							<RichText
								className={ 'headingb ' + custom_color_class }
								style={ custom_color_style }
								tagName="h4"
								placeholder="Project Type"
								value={ attributes.headingb }
								onChange={ changeHeadingb }
							/>
							<RichText
								className={ 'lineb ' + custom_color_class }
								style={ custom_color_style }
								tagName="p"
								placeholder="Client Name"
								value={ attributes.lineb }
								onChange={ changeLineb }
							/>
							<RichText
								className={ 'headingc ' + custom_color_class }
								style={ custom_color_style }
								tagName="h4"
								placeholder="Services"
								value={ attributes.headingc }
								onChange={ changeHeadingc }
							/>
							<RichText
								className={ 'linec ' + custom_color_class }
								style={ custom_color_style }
								tagName="p"
								placeholder="Client Name"
								value={ attributes.linec }
								onChange={ changeLinec }
							/>
						</div>
					</div>
				</div>
			</div>
		</Fragment>,
	];
};
const saveHeaderBlock = ( props ) => {
	const className = getBlockDefaultClassName(
		'borncreative/intro-text-block'
	);
	const { attributes } = props;
	const { textColor, customTextColor } = props.attributes;
	const { backgroundColor, customBackgroundColor } = props.attributes;

	let custom_color_class;
	const custom_color_style = {};
	if ( textColor != undefined ) {
		custom_color_class = getColorClassName( 'color', textColor );
	}
	if ( customTextColor != undefined ) {
		custom_color_style.color = customTextColor;
	}

	let custom_backgroundcolor_class;
	const custom_backgroundcolor_style = {};
	if ( backgroundColor != undefined ) {
		custom_backgroundcolor_class = getColorClassName(
			'background-color',
			backgroundColor
		);
	}
	if ( customBackgroundColor != undefined ) {
		custom_backgroundcolor_style.backgroundColor = customBackgroundColor;
	}
	return (
		<div
			className={ className + ' ' + custom_backgroundcolor_class }
			style={ custom_backgroundcolor_style }
			data-aos="fade-up"
			data-aos-duration="2000"
		>
			<div className="copy col-full">
				<div className="row">
					<div className="column1">
						<RichText.Content
							className={ 'copy-bd ' + custom_color_class }
							style={ custom_color_style }
							tagName="p"
							value={ attributes.bodyContent }
						/>
					</div>
					<div className="column2">
						<RichText.Content
							className={ 'headinga ' + custom_color_class }
							style={ custom_color_style }
							tagName="h4"
							value={ attributes.headinga }
						/>
						<RichText.Content
							className={ 'linea ' + custom_color_class }
							style={ custom_color_style }
							tagName="p"
							value={ attributes.linea }
						/>

						<RichText.Content
							className={ 'headingb ' + custom_color_class }
							style={ custom_color_style }
							tagName="h4"
							value={ attributes.headingb }
						/>
						<RichText.Content
							className={ 'lineb ' + custom_color_class }
							style={ custom_color_style }
							tagName="p"
							value={ attributes.lineb }
						/>

						<RichText.Content
							className={ 'headingc ' + custom_color_class }
							style={ custom_color_style }
							tagName="h4"
							value={ attributes.headingc }
						/>
						<RichText.Content
							className={ 'linec ' + custom_color_class }
							style={ custom_color_style }
							tagName="p"
							value={ attributes.linec }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

registerBlockType( 'borncreative/intro-text-block', {
	title: 'Client Intro Text Block',
	icon: 'id',
	category: 'born-creative-blocks',

	attributes: {
		bodyContent: {
			source: 'html',
			selector: '.copy-bd',
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
			selector: '.linea',
		},
		lineb: {
			source: 'html',
			selector: '.lineb',
		},
		linec: {
			source: 'html',
			selector: '.linec',
		},
		textColor: {
			type: 'string',
		},
		customTextColor: {
			type: 'string',
		},
		backgroundColor: {
			type: 'string',
		},
		customBackgroundColor: {
			type: 'string',
		},
	},
	supports: {
		// Declare support for block's alignment.
		// This adds support for all the options:
		// left, center, right, wide, and full.
		align: true,
	},

	edit: withColors( {
		textColor: 'color',
		backgroundColor: 'background-color',
	} )( edit_header_block ),
	save: saveHeaderBlock,
} );
