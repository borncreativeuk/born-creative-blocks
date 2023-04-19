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
	const { backgroundColor, setBackgroundColor } = props;
	const { iconColor, setIconColor } = props;

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

	let custom_iconcolor_class;
	let custom_iconcolor_style = {};
	if (iconColor != undefined) {
		if (iconColor.class != undefined) {
			custom_iconcolor_class = iconColor.class;
		} else {
			custom_iconcolor_style.backgroundColor = iconColor.color;
		}
	}
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
		<Fragment>
			<InspectorControls>
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
						{
							value: iconColor.color,
							onChange: setIconColor,
							label: 'Icon color'
						},
					]}
				/>
			</InspectorControls>,
			<div className={className + " " + custom_backgroundcolor_class} style={custom_backgroundcolor_style}>
				<div className="copy col-full">
					<div class="row">
						<div class="column1">
							<div class="icon-group-holder">
								<div class="column3">
									<RichText
										className={"icona blue-circle-icon " + custom_color_class + " " + custom_iconcolor_class}
										style={custom_color_style}
										tagName="span"
										placeholder="1"
										value={attributes.icona}
										onChange={changeIcona}
									/>
								</div>
								<div class="column4">
									<RichText
										className={"headinga " + custom_color_class}
										style={custom_color_style}
										tagName="h4"
										placeholder="Heading"
										value={attributes.headinga}
										onChange={changeHeadinga}
									/>
									<RichText
										className={"linea " + custom_color_class}
										style={custom_color_style}
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
										className={"iconb blue-circle-icon " + custom_color_class + " " + custom_iconcolor_class}
										style={custom_color_style}
										tagName="span"
										placeholder="2"
										value={attributes.iconb}
										onChange={changeIconb}
									/>
								</div>
								<div class="column4">
									<RichText
										className={"headingb " + custom_color_class}
										style={custom_color_style}
										tagName="h4"
										placeholder="Heading"
										value={attributes.headingb}
										onChange={changeHeadingb}
									/>
									<RichText
										className={"lineb " + custom_color_class}
										style={custom_color_style}
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
										className={"iconc blue-circle-icon " + custom_color_class + " " + custom_iconcolor_class}
										style={custom_color_style}
										tagName="span"
										placeholder="3"
										value={attributes.iconc}
										onChange={changeIconc}
									/>
								</div>
								<div class="column4">
									<RichText
										className={"headingc " + custom_color_class}
										style={custom_color_style}
										tagName="h4"
										placeholder="Heading"
										value={attributes.headingc}
										onChange={changeHeadingc}
									/>
									<RichText
										className={"linec " + custom_color_class}
										style={custom_color_style}
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
										className={"icond blue-circle-icon " + custom_color_class + " " + custom_iconcolor_class}
										style={custom_color_style}
										tagName="span"
										placeholder="4"
										value={attributes.icond}
										onChange={changeIcond}
									/>
								</div>
								<div class="column4">
									<RichText
										className={"headingd " + custom_color_class}
										style={custom_color_style}
										tagName="h4"
										placeholder="Heading"
										value={attributes.headingd}
										onChange={changeHeadingd}
									/>
									<RichText
										className={"lined " + custom_color_class}
										style={custom_color_style}
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
								className={"icone " + custom_color_class }
								style={custom_color_style}
								tagName="h5"
								placeholder="text content"
								value={attributes.icone}
								onChange={changeIcone}
							/>
							<RichText
								className={"headinge " + custom_color_class}
								style={custom_color_style}
								tagName="h4"
								placeholder="Heading"
								value={attributes.headinge}
								onChange={changeHeadinge}
							/>
							<RichText
								className={"linee " + custom_color_class}
								style={custom_color_style}
								tagName="p"
								placeholder="Text Content"
								value={attributes.linee}
								onChange={changeLinee}
							/>

						</div>
					</div>
				</div>
			</div>
		</Fragment>
	];
}
const save_header_block = (props) => {
	const className = getBlockDefaultClassName('borncreative/alt-intro-text-block');
	const { attributes } = props;
	const { textColor, customTextColor } = props.attributes;
	const { backgroundColor, customBackgroundColor } = props.attributes;
	const { iconColor, customIconColor } = props.attributes;

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


	let custom_iconcolor_class;
	let custom_iconcolor_style = {};
	if (iconColor != undefined) {
		custom_iconcolor_class = getColorClassName('background-color', iconColor);
	}
	if (customIconColor != undefined) {
		custom_iconcolor_style.backgroundColor = customIconColor;
	}
	return (
		<div className={className + " " + custom_backgroundcolor_class} style={custom_backgroundcolor_style} data-aos="fade-up" data-aos-duration="2000">
			<div className="copy col-full">
				<div class="row">

					<div class="column1">
						<div class="icon-group-holder">
							<div class="column3">
								<RichText.Content
									className={"icona blue-circle-icon " + custom_color_class + " " + custom_iconcolor_class}
									style={custom_color_style}
									tagName="span"
									value={attributes.icona}
								/>
							</div>
							<div class="column4">
								<RichText.Content
									className={"headinga " + custom_color_class}
									style={custom_color_style}
									tagName="h4"
									value={attributes.headinga}
								/>
								<RichText.Content
									className={"linea " + custom_color_class}
									style={custom_color_style}
									tagName="p"
									value={attributes.linea}
								/>
							</div>
						</div>
						<div class="icon-group-holder">
							<div class="column3">
								<RichText.Content
									className={"iconb blue-circle-icon " + custom_color_class + " " + custom_iconcolor_class}
									style={custom_color_style}
									tagName="span"
									value={attributes.iconb}
								/>
							</div>
							<div class="column4">
								<RichText.Content
									className={"headingb " + custom_color_class}
									style={custom_color_style}
									tagName="h4"
									value={attributes.headingb}
								/>
								<RichText.Content
									className={"lineb " + custom_color_class}
									style={custom_color_style}
									tagName="p"
									value={attributes.lineb}
								/>
							</div>
						</div>
						<div class="icon-group-holder">
							<div class="column3">
								<RichText.Content
									className={"iconc blue-circle-icon " + custom_color_class + " " + custom_iconcolor_class}
									style={custom_color_style}
									tagName="span"
									value={attributes.iconc}
								/>
							</div>
							<div class="column4">
								<RichText.Content
									className={"headingc " + custom_color_class}
									style={custom_color_style}
									tagName="h4"
									value={attributes.headingc}
								/>
								<RichText.Content
									className={"linec " + custom_color_class}
									style={custom_color_style}
									tagName="p"
									value={attributes.linec}
								/>
							</div>
						</div>
						<div class="icon-group-holder">
							<div class="column3">
								<RichText.Content
									className={"icond blue-circle-icon " + custom_color_class + " " + custom_iconcolor_class}
									style={custom_color_style}
									tagName="span"
									value={attributes.icond}
								/>
							</div>
							<div class="column4">
								<RichText.Content
									className={"headingd " + custom_color_class}
									style={custom_color_style}
									tagName="h4"
									value={attributes.headingd}
								/>
								<RichText.Content
									className={"lined " + custom_color_class}
									style={custom_color_style}
									tagName="p"
									value={attributes.lined}
								/>
							</div>
						</div>
					</div>
					<div class="column2">
						<RichText.Content
							className={"icone " + custom_color_class}
							style={custom_color_style}
							tagName="h5"
							value={attributes.icone}
						/>
						<RichText.Content
							className={"headinge " + custom_color_class}
							style={custom_color_style}
							tagName="h4"
							value={attributes.headinge}
						/>
						<RichText.Content
							className={"linee " + custom_color_class}
							style={custom_color_style}
							tagName="p"
							value={attributes.linee}
						/>


					</div>
				</div>
			</div>
		</div>
	);
}

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
		textColor: {
			type: 'string'
		},
		customTextColor: {
			type: 'string'
		},
		backgroundColor: {
			type: 'string'
		},
		customBackgroundColor: {
			type: 'string'
		},
		iconColor: {
			type: 'string'
		},
		customIconColor: {
			type: 'string'
		},
	},
	supports: {
		// Declare support for block's alignment.
		// This adds support for all the options:
		// left, center, right, wide, and full.
		align: true
	},

	edit: withColors({ textColor: 'color', backgroundColor: 'background-color', iconColor: 'background-color' })(edit_header_block),
	save: save_header_block
});
