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

	function changeHeadingh2(changes) {
		// using some nice js features instead of typing
		// { heading: heading }
		setAttributes({
			headingh2: changes
		});
	}
	function changeHeadingh3(changes) {
		// using some nice js features instead of typing
		// { heading: heading }
		setAttributes({
			headingh3: changes
		});
	}
	function changeBodyContent(changes) {
		setAttributes({
			bodyContent: changes
		})
	}
	function changeListContent(changes) {
		setAttributes({
			listContent: changes
		})
	}
	function changeLinkContent(changes) {
		setAttributes({
			linkContent: changes
		})
	}

	function selectImage(value) {
		setAttributes({
			image: value.sizes.full.url,
		})
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
				<div className="media">
					<MediaUpload
						onSelect={selectImage}
						render={({ open }) => {
							return (
								<img
									onClick={open}
									src={attributes.image}
								/>
							);
						}}
					/>
				</div>
				<div className="column1">
					<div class="copy">
						<RichText
							className={"copy-h2 " + custom_color_class}
							style={custom_color_style}
							tagName="h2"
							placeholder="Enter your heading"
							value={attributes.headingh2}
							onChange={changeHeadingh2}
						/>
						<RichText
							className={"copy-h3 " + custom_color_class}
							style={custom_color_style}
							tagName="h3"
							placeholder="Enter your heading"
							value={attributes.headingh3}
							onChange={changeHeadingh3}
						/>


						<RichText
							className={"copy-body " + custom_color_class}
							style={custom_color_style}
							tagName="p"
							placeholder="Enter your text here"
							value={attributes.bodyContent}
							onChange={changeBodyContent}
						/>
						<RichText
							className={"copy-list " + custom_color_class}
							style={custom_color_style}
							tagName="p"
							placeholder="Enter your text here"
							value={attributes.listContent}
							onChange={changeListContent}
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
	const className = getBlockDefaultClassName('borncreative/alt-header-block');
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
			<div
				className="media">
				<img src={attributes.image} />
			</div>
			<div className="column1">
				<div class="copy">

					<RichText.Content
						className={"copy-h2 " + custom_color_class}
						style={custom_color_style}
						tagName="h2"
						value={attributes.headingh2}
					/>
					<RichText.Content
						className={"copy-h3 " + custom_color_class}
						style={custom_color_style}
						tagName="h3"
						value={attributes.headingh3}
					/>
					<RichText.Content
						className={"copy-body " + custom_color_class}
						style={custom_color_style}
						tagName="p"
						value={attributes.bodyContent}
					/>
					<RichText.Content
						className={"copy-list " + custom_color_class}
						style={custom_color_style}
						tagName="p"
						value={attributes.listContent}
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

registerBlockType('borncreative/alt-header-block', {
	title: 'Alternative Header Block',
	icon: 'cover-image',
	category: 'born-creative-blocks',

	attributes: {
		headingh2: {
			source: 'html',
			selector: '.copy-h2',
		},
		headingh3: {
			source: 'html',
			selector: '.copy-h3',
		},
		bodyContent: {
			source: 'html',
			selector: '.copy-body'
		},
		listContent: {
			source: 'html',
			selector: '.copy-list'
		},
		linkContent: {
			source: 'html',
			selector: '.copy-link'
		},
		image: {
			type: 'string',
			default: 'https://via.placeholder.com/500'
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