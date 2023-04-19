import { registerBlockType } from '@wordpress/blocks';

import './style.view.scss';
import './style.editor.scss';

import {
	RichText
} from '@wordpress/block-editor';

const { getBlockDefaultClassName } = wp.blocks;
const { Fragment } = wp.element;
const { InspectorControls, PanelColorSettings, withColors, getColorClassName } = wp.blockEditor;

const edit_header_block = (props) => {
	const { className, setAttributes } = props;
	const { attributes } = props;
	const { textColor, setTextColor } = props;

	let custom_color_class;
	let custom_color_style = {};
	if (textColor != undefined) {
		if (textColor.class != undefined) {
			custom_color_class = textColor.class;
		} else {
			custom_color_style.color = textColor.color;
		}
	}
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
					]}
				/>
			</InspectorControls>
			<div className={className}>
				<div className="copy">
					<div class="col-full">
						<RichText
							className={"copy-h2 " + custom_color_class} 
							style={custom_color_style}
							tagName="h2"
							placeholder="Enter your heading"
							value={attributes.heading}
							onChange={changeHeading}
						/>

						<RichText
							className={"copy-h3 " + custom_color_class} 
							style={custom_color_style}
							tagName="h3"
							placeholder="Enter your text here"
							value={attributes.bodyContent}
							onChange={changeBodyContent}
						/>
						<RichText
							className={"copy-link " + custom_color_class} 
							style={custom_color_style}
							tagName="p"
							placeholder="Enter your text here"
							value={attributes.linkContent}
							onChange={changeLinkContent}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	];
}
const save_header_block = (props) => {
	const className = getBlockDefaultClassName('borncreative/outro-text-block');
	const { attributes } = props;
	const { textColor, customTextColor } = props.attributes;

	let custom_color_class;
	let custom_color_style = {};
	if (textColor != undefined) {
		custom_color_class = getColorClassName('color', textColor);
	}
	if (customTextColor != undefined) {
		custom_color_style.color = customTextColor;
	}
	return (
		<div className={className}>
			<div className="copy">
				<div class="col-full">
					<RichText.Content
						className={"copy-h2 " + custom_color_class} 
						style={custom_color_style}
						tagName="h2"
						value={attributes.heading}
					/>
					<RichText.Content
						className={"copy-h3 " + custom_color_class} 
						style={custom_color_style}
						tagName="h3"
						value={attributes.bodyContent}
					/>
					<RichText.Content
						className={"copy-link " + custom_color_class} 
						style={custom_color_style}
						tagName="p"
						value={attributes.linkContent}
					/>
				</div>
			</div>
		</div>
	);
}

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
		textColor: {
			type: 'string'
		},
		customTextColor: {
			type: 'string'
		},
	},
	supports: {
		// Declare support for block's alignment.
		// This adds support for all the options:
		// left, center, right, wide, and full.
		align: true
	},

	edit: withColors({ textColor: 'color' })(edit_header_block),
	save: save_header_block

});
