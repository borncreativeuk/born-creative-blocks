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
	function changeHeadinga( headinga ) {
		setAttributes( { headinga } );
	}
	function changeHeadingb( headingb ) {
		setAttributes( { headingb } );
	}
	function changeContenta( contenta ) {
		setAttributes( { contenta } );
	}
	function changeContentb( contentb ) {
		setAttributes( { contentb } );
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
				<div className="col-full">
					<RichText
						className={ 'headinga ' + customColorClass }
						style={ customColorStyle }
						tagName="h2"
						placeholder="Enter your heading"
						value={ attributes.headinga }
						onChange={ changeHeadinga }
					/>
					<RichText
						className={ 'contenta ' + customColorClass }
						style={ customColorStyle }
						tagName="p"
						placeholder="Enter your content"
						value={ attributes.contenta }
						onChange={ changeContenta }
					/>
					<hr />
					<RichText
						className={ 'headingb ' + customColorClass }
						style={ customColorStyle }
						tagName="h2"
						placeholder="Enter your heading"
						value={ attributes.headingb }
						onChange={ changeHeadingb }
					/>
					<RichText
						className={ 'contentb ' + customColorClass }
						style={ customColorStyle }
						tagName="p"
						placeholder="Enter your content"
						value={ attributes.contentb }
						onChange={ changeContentb }
					/>
				</div>
			</div>
		</Fragment>,
	];
};
const saveHeaderBlock = ( props ) => {
	const className = getBlockDefaultClassName(
		'borncreative/double-title-text-block'
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
			<div className="col-full">
				<RichText.Content
					className={ 'headinga ' + customColorClass }
					style={ customColorStyle }
					tagName="h2"
					value={ attributes.headinga }
				/>
				<RichText.Content
					className={ 'contenta ' + customColorClass }
					style={ customColorStyle }
					tagName="p"
					value={ attributes.contenta }
				/>
				<hr />
				<RichText.Content
					className={ 'headingb ' + customColorClass }
					style={ customColorStyle }
					tagName="h2"
					value={ attributes.headingb }
				/>
				<RichText.Content
					className={ 'contentb ' + customColorClass }
					style={ customColorStyle }
					tagName="p"
					value={ attributes.contentb }
				/>
			</div>
		</div>
	);
};

registerBlockType( 'borncreative/double-title-text-block', {
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
		textColor: {
			type: 'string',
		},
		customTextColor: {
			type: 'string',
		},
		bgColor: {
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
