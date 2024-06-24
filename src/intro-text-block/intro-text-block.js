import { registerBlockType } from '@wordpress/blocks';

import './style.view.scss';
import './style.editor.scss';

import { RichText } from '@wordpress/block-editor';

const { getBlockDefaultClassName } = wp.blocks;
const { Fragment } = wp.element;
const { InspectorControls, PanelColorSettings, withColors, getColorClassName } =
	wp.blockEditor;

const editHeaderBlock = ( props ) => {
	const { className, setAttributes } = props;
	const { attributes } = props;
	const { textColor, setTextColor } = props;
	const { backgroundColor, setBackgroundColor } = props;

	let customColorClass;
	const customColorStyle = {};
	if ( textColor !== undefined ) {
		if ( textColor.class !== undefined ) {
			customColorClass = textColor.class;
		} else {
			customColorStyle.color = textColor.color;
		}
	}

	let customBackgroundColorClass;
	const customBackgroundColorStyle = {};
	if ( backgroundColor !== undefined ) {
		if ( backgroundColor.class !== undefined ) {
			customBackgroundColorClass = backgroundColor.class;
		} else {
			customBackgroundColorStyle.backgroundColor = backgroundColor.color;
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
		<Fragment key={ props?.id ?? Math.random( 6 ) }>
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
				className={ className + ' ' + customBackgroundColorClass }
				style={ customBackgroundColorStyle }
			>
				<div className="copy col-full">
					<div className="row">
						<div className="column1">
							<RichText
								className={ 'copy-bd ' + customColorClass }
								style={ customColorStyle }
								tagName="p"
								placeholder="Enter your text here"
								value={ attributes.bodyContent }
								onChange={ changeBodyContent }
							/>
						</div>
						<div className="column2">
							<RichText
								className={ 'headinga ' + customColorClass }
								style={ customColorStyle }
								tagName="h4"
								placeholder="Client"
								value={ attributes.headinga }
								onChange={ changeHeadinga }
							/>
							<RichText
								className={ 'linea ' + customColorClass }
								style={ customColorStyle }
								tagName="p"
								placeholder="Client Name"
								value={ attributes.linea }
								onChange={ changeLinea }
							/>
							<RichText
								className={ 'headingb ' + customColorClass }
								style={ customColorStyle }
								tagName="h4"
								placeholder="Project Type"
								value={ attributes.headingb }
								onChange={ changeHeadingb }
							/>
							<RichText
								className={ 'lineb ' + customColorClass }
								style={ customColorStyle }
								tagName="p"
								placeholder="Client Name"
								value={ attributes.lineb }
								onChange={ changeLineb }
							/>
							<RichText
								className={ 'headingc ' + customColorClass }
								style={ customColorStyle }
								tagName="h4"
								placeholder="Services"
								value={ attributes.headingc }
								onChange={ changeHeadingc }
							/>
							<RichText
								className={ 'linec ' + customColorClass }
								style={ customColorStyle }
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

	let customColorClass;
	const customColorStyle = {};
	if ( textColor !== undefined ) {
		customColorClass = getColorClassName( 'color', textColor );
	}
	if ( customTextColor !== undefined ) {
		customColorStyle.color = customTextColor;
	}

	let customBackgroundColorClass;
	const customBackgroundColorStyle = {};
	if ( backgroundColor !== undefined ) {
		customBackgroundColorClass = getColorClassName(
			'background-color',
			backgroundColor
		);
	}
	if ( customBackgroundColor !== undefined ) {
		customBackgroundColorStyle.backgroundColor = customBackgroundColor;
	}
	return (
		<div
			className={ className + ' ' + customBackgroundColorClass }
			style={ customBackgroundColorStyle }
			data-aos="fade-up"
			data-aos-duration="2000"
		>
			<div className="copy col-full">
				<div className="row">
					<div className="column1">
						<RichText.Content
							className={ 'copy-bd ' + customColorClass }
							style={ customColorStyle }
							tagName="p"
							value={ attributes.bodyContent }
						/>
					</div>
					<div className="column2">
						<RichText.Content
							className={ 'headinga ' + customColorClass }
							style={ customColorStyle }
							tagName="h4"
							value={ attributes.headinga }
						/>
						<RichText.Content
							className={ 'linea ' + customColorClass }
							style={ customColorStyle }
							tagName="p"
							value={ attributes.linea }
						/>

						<RichText.Content
							className={ 'headingb ' + customColorClass }
							style={ customColorStyle }
							tagName="h4"
							value={ attributes.headingb }
						/>
						<RichText.Content
							className={ 'lineb ' + customColorClass }
							style={ customColorStyle }
							tagName="p"
							value={ attributes.lineb }
						/>

						<RichText.Content
							className={ 'headingc ' + customColorClass }
							style={ customColorStyle }
							tagName="h4"
							value={ attributes.headingc }
						/>
						<RichText.Content
							className={ 'linec ' + customColorClass }
							style={ customColorStyle }
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
	} )( editHeaderBlock ),
	save: saveHeaderBlock,
} );
