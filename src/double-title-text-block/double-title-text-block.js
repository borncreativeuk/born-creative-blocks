import { registerBlockType } from '@wordpress/blocks';

import './style.view.scss';
import './style.editor.scss';

import {
	RichText,
	MediaUpload
} from '@wordpress/block-editor';

const { getBlockDefaultClassName } = wp.blocks;
const { Fragment } = wp.element;
const { InspectorControls, PanelColorSettings, withColors, getColorClassName } = wp.blockEditor;

const edit_header_block = (props) => {
	const { className, setAttributes } = props;
	const { attributes } = props;
	const { textColor, setTextColor } = props;
	const { backgroundColor, setBackgroundColor } = props;

	let custom_color_class;
	let custom_color_style = {};
	if (textColor != undefined) {
		if (textColor.class != undefined) {
			custom_color_class = textColor.class;
		} else {
			custom_color_style.color = textColor.color;
		}
	}

	let custom_backgroundcolor_class;
	let custom_backgroundcolor_style = {};
	if (backgroundColor != undefined) {
		if (backgroundColor.class != undefined) {
			custom_backgroundcolor_class = backgroundColor.class;
		} else {
			custom_backgroundcolor_style.backgroundColor = backgroundColor.color;
		}
	}
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
		<Fragment>
			<InspectorControls>
				{/* Later, when we have customizable options we will add stuff here! */}
				<div
					style={{
						padding: '1em 0',
					}}
				>
					Options
				</div>
				<PanelColorSettings
					title='Color settings'
					colorSettings={[
						{
							value: textColor.color,
							onChange: setTextColor,
							label: 'Text color'
						},
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: 'Background color'
						},
					]}
				/>
			</InspectorControls>
			<div className={className + " " + custom_backgroundcolor_class} style={custom_backgroundcolor_style}>
				<div class="col-full">
					<RichText
						className={"headinga " + custom_color_class}
						style={custom_color_style}
						tagName="h2"
						placeholder="Enter your heading"
						value={attributes.headinga}
						onChange={changeHeadinga}
					/>
					<RichText
						className={"contenta " + custom_color_class}
						style={custom_color_style}
						tagName="p"
						placeholder="Enter your content"
						value={attributes.contenta}
						onChange={changeContenta}
					/>
					<hr />
					<RichText
						className={"headingb " + custom_color_class}
						style={custom_color_style}
						tagName="h2"
						placeholder="Enter your heading"
						value={attributes.headingb}
						onChange={changeHeadingb}
					/>
					<RichText
						className={"contentb " + custom_color_class}
						style={custom_color_style}
						tagName="p"
						placeholder="Enter your content"
						value={attributes.contentb}
						onChange={changeContentb}
					/>
				</div>
			</div>
		</Fragment>
	];
}
const save_header_block = (props) => {
	const className = getBlockDefaultClassName('borncreative/double-title-text-block');
	const { attributes } = props;
	const { textColor, customTextColor } = props.attributes;
	const { backgroundColor, customBackgroundColor } = props.attributes;

	let custom_color_class;
	let custom_color_style = {};
	if (textColor != undefined) {
		custom_color_class = getColorClassName('color', textColor);
	}
	if (customTextColor != undefined) {
		custom_color_style.color = customTextColor;
	}

	let custom_backgroundcolor_class;
	let custom_backgroundcolor_style = {};
	if (backgroundColor != undefined) {
		custom_backgroundcolor_class = getColorClassName('background-color', backgroundColor);
	}
	if (customBackgroundColor != undefined) {
		custom_backgroundcolor_style.backgroundColor = customBackgroundColor;
	}
	return (
		<div className={className + " " + custom_backgroundcolor_class} style={custom_backgroundcolor_style} data-aos="fade-up" data-aos-duration="2000">
			<div class="col-full">
				<RichText.Content
					className={"headinga " + custom_color_class}
					style={custom_color_style}
					tagName="h2"
					value={attributes.headinga}
				/>
				<RichText.Content
					className={"contenta " + custom_color_class}
					style={custom_color_style}
					tagName="p"
					value={attributes.contenta}
				/>
				<hr />
				<RichText.Content
					className={"headingb " + custom_color_class}
					style={custom_color_style}
					tagName="h2"
					value={attributes.headingb}
				/>
				<RichText.Content
					className={"contentb " + custom_color_class}
					style={custom_color_style}
					tagName="p"
					value={attributes.contentb}
				/>
			</div>
		</div>
	);
}

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
		textColor: {
			type: 'string'
		},
		customTextColor: {
			type: 'string'
		},
		bgColor: {
			type: 'string'
		},
		customBackgroundColor: {
			type: 'string'
		},
	},
	supports: {
		// Declare support for block's alignment.
		// This adds support for all the options:
		// left, center, right, wide, and full.
		align: true,	
	},

	edit: withColors({ textColor: 'color', backgroundColor: 'background-color' })(edit_header_block),
	save: save_header_block
});

