import { registerBlockType } from '@wordpress/blocks';

import './style.view.scss';
import './style.editor.scss';

import { RichText } from '@wordpress/block-editor';

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
	function changeHeading( heading ) {
		// using some nice js features instead of typing
		// { heading: heading }
		setAttributes( { heading } );
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
				<div className="col-full">
					<RichText
						className={ 'copy-bd ' + custom_color_class }
						style={ custom_color_style }
						tagName="div"
						placeholder="Enter your heading"
						value={ attributes.heading }
						onChange={ changeHeading }
					/>
				</div>
			</div>
		</Fragment>,
	];
};

const saveHeaderBlock = ( props ) => {
	const className = getBlockDefaultClassName(
		'borncreative/text-only-block'
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
			<div className="col-full">
				<RichText.Content
					className={ 'copy-bd ' + custom_color_class }
					style={ custom_color_style }
					tagName="div"
					value={ attributes.heading }
				/>
			</div>
		</div>
	);
};

registerBlockType( 'borncreative/text-only-block', {
	title: 'Text Only Block',
	icon: 'heading',
	category: 'born-creative-blocks',

	attributes: {
		heading: {
			source: 'html',
			selector: '.copy-bd',
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
