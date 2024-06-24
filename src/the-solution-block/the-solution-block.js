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
	function changeHeadinga( headinga ) {
		setAttributes( { headinga } );
	}
	function changeHeadingb( headingb ) {
		setAttributes( { headingb } );
	}

	function selectImagea( value ) {
		setAttributes( {
			imagea: value.sizes.full.url,
		} );
	}
	function selectImageb( value ) {
		setAttributes( {
			imageb: value.sizes.full.url,
		} );
	}
	function selectImagec( value ) {
		setAttributes( {
			imagec: value.sizes.full.url,
		} );
	}
	function changeFigurea( figurea ) {
		setAttributes( { figurea } );
	}
	function changeFigureb( figureb ) {
		setAttributes( { figureb } );
	}
	function changeBodyContent( changes ) {
		setAttributes( {
			bodyContent: changes,
		} );
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
				<div className="col-full ws-t ws-b">
					<RichText
						className={ 'headinga ' + custom_color_class }
						style={ custom_color_style }
						tagName="h2"
						placeholder="Enter your text here"
						value={ attributes.headinga }
						onChange={ changeHeadinga }
					/>
				</div>
				<div className="col-full">
					<div className="media imagec">
						<MediaUpload
							onSelect={ selectImagec }
							render={ ( { open } ) => {
								return (
									<img
										onClick={ open }
										src={ attributes.imagec }
									/>
								);
							} }
						/>
					</div>
					<div className="row">
						<div className="column1"></div>
						<div className="media column1">
							<MediaUpload
								onSelect={ selectImagea }
								render={ ( { open } ) => {
									return (
										<img
											onClick={ open }
											src={ attributes.imagea }
										/>
									);
								} }
							/>
							<RichText
								className={ 'figurea ' + custom_color_class }
								style={ custom_color_style }
								tagName="figure"
								placeholder="Enter your text here"
								value={ attributes.figurea }
								onChange={ changeFigurea }
							/>
						</div>
						<div className="media column1">
							<MediaUpload
								onSelect={ selectImageb }
								render={ ( { open } ) => {
									return (
										<img
											onClick={ open }
											src={ attributes.imageb }
										/>
									);
								} }
							/>
							<RichText
								className={ 'figureb ' + custom_color_class }
								style={ custom_color_style }
								tagName="figure"
								placeholder="Enter your text here"
								value={ attributes.figureb }
								onChange={ changeFigureb }
							/>
						</div>
					</div>
					<div className="row ws-t">
						<div className="column1"></div>
						<div className="copy">
							<RichText
								className={ 'headingb ' + custom_color_class }
								style={ custom_color_style }
								tagName="h3"
								placeholder="Enter your text here"
								value={ attributes.headingb }
								onChange={ changeHeadingb }
							/>
						</div>
					</div>
					<div className="row ws-b">
						<div className="column1"></div>
						<div className="column2">
							<RichText
								className={ 'copy-bd ' + custom_color_class }
								style={ custom_color_style }
								tagName="p"
								placeholder="Enter your text here"
								value={ attributes.bodyContent }
								onChange={ changeBodyContent }
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
		'borncreative/the-solution-block'
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
			<div className="col-full ws-t ws-b">
				<RichText.Content
					className={ 'headinga ' + custom_color_class }
					style={ custom_color_style }
					tagName="h2"
					value={ attributes.headinga }
				/>
				<hr />
			</div>

			<div className="col-full">
				<img className="imagec" src={ attributes.imagec } />
				<div className="row">
					<div className="column1"></div>
					<div className="media column1">
						<div className="zoom">
							<img src={ attributes.imagea } />
						</div>
						<figure
							className={ 'figureb ' + custom_color_class }
							style={ custom_color_style }
						>
							{ attributes.figurea }
						</figure>
					</div>
					<div className="media column1">
						<div className="zoom">
							<img src={ attributes.imageb } />
						</div>
						<figure
							className={ 'figureb ' + custom_color_class }
							style={ custom_color_style }
						>
							{ attributes.figureb }
						</figure>
					</div>
				</div>
				<div className="row ws-t">
					<div className="column1"></div>
					<div className="copy">
						<RichText.Content
							className={ 'headingb ' + custom_color_class }
							style={ custom_color_style }
							tagName="h3"
							value={ attributes.headingb }
						/>
					</div>
				</div>
				<div className="row ws-b">
					<div className="column1"></div>
					<div className="column2">
						<RichText.Content
							className={ 'copy-bd ' + custom_color_class }
							style={ custom_color_style }
							tagName="p"
							value={ attributes.bodyContent }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

registerBlockType( 'borncreative/the-solution-block', {
	title: 'The Solution Block',
	icon: 'layout',
	category: 'born-creative-blocks',

	attributes: {
		headinga: {
			source: 'html',
			selector: 'h2',
		},
		headingb: {
			source: 'html',
			selector: 'h3',
		},
		bodyContent: {
			source: 'html',
			selector: 'p',
		},
		imagea: {
			type: 'string',
			default: 'http://placehold.it/500',
		},
		imageb: {
			type: 'string',
			default: 'http://placehold.it/500',
		},
		imagec: {
			type: 'string',
			default: 'http://placehold.it/500',
		},
		figurea: {
			source: 'html',
			selector: '.figurea',
		},
		figureb: {
			source: 'html',
			selector: '.figureb',
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
