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
				<div className="copy">
					<div class="col-full">
						<RichText
							className={"copy-hd " + custom_color_class}
							style={custom_color_style}
							tagName="h2"
							placeholder="Enter your heading"
							value={attributes.heading}
							onChange={changeHeading}
						/>
						{/* Content is replaced by this guy.
				We determin the class name and the html tag that
				we want it to show as. */}
						<RichText
							className={"copy-bd " + custom_color_class}
							style={custom_color_style}
							tagName="h3"
							placeholder="Enter your text here"
							value={attributes.bodyContent}
							onChange={changeBodyContent}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	];
}


const save_header_block = (props) => {
	const className = getBlockDefaultClassName('borncreative/header-block');
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
			<div className="copy">
				<div class="col-full">
					<RichText.Content
						className={"copy-hd " + custom_color_class} 
						style={custom_color_style}
						tagName="h2"
						value={attributes.heading}
					/>
					<RichText.Content
						className={"copy-bd " + custom_color_class} 
						style={custom_color_style}
						tagName="h3"
						value={attributes.bodyContent}
					/>
				</div>
			</div>
		</div>
	);
}


registerBlockType('borncreative/header-block', {
	title: 'Header Block',
	icon: 'cover-image',
	category: 'born-creative-blocks',

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
		},
		textColor: {
			type: 'string'
		},
		customTextColor: {
			type: 'string'
		},
	},

	edit: withColors({ textColor: 'color' })(edit_header_block),
	save: save_header_block

});
