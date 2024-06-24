import { registerBlockType } from '@wordpress/blocks';

import './style.view.scss';
import './style.editor.scss';

import { RichText, MediaUpload } from '@wordpress/block-editor';

const { getBlockDefaultClassName } = wp.blocks;
const { Fragment } = wp.element;
const { InspectorControls, PanelColorSettings, withColors, getColorClassName } =
	wp.blockEditor;

const editHeaderBlock = ( props ) => {
	const { className, setAttributes } = props;
	const { attributes } = props;
	const { textColor, setTextColor } = props;

	let customColorClass;
	const customColorStyle = {};
	if ( textColor !== undefined ) {
		if ( textColor.class !== undefined ) {
			customColorClass = textColor.class;
		} else {
			customColorStyle.color = textColor.color;
		}
	}

	// we create a function that will take the changes from RichText
	// and update the attributes
	function changeBodyContent( changes ) {
		setAttributes( {
			bodyContent: changes,
		} );
	}

	function changeHeading( heading ) {
		// using some nice js features instead of typing
		// { heading: heading }
		setAttributes( { heading } );
	}

	function selectImage( value ) {
		setAttributes( {
			image: value.url,
		} );
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
					] }
				/>
			</InspectorControls>
			,
			<div className={ className }>
				<div className="media">
					<MediaUpload
						onSelect={ selectImage }
						render={ ( { open } ) => {
							return (
								<video
									onClick={ open }
									autoPlay="autoplay"
									muted
								>
									<source
										src={ attributes.image }
										type="video/mp4"
									/>
								</video>
							);
						} }
					/>
				</div>
				<div className="copy">
					<div className="col-full">
						<RichText
							className={ 'copy-hd ' + customColorClass }
							style={ customColorStyle }
							tagName="h2"
							placeholder="Enter your heading"
							value={ attributes.heading }
							onChange={ changeHeading }
						/>
						{ /* Content is replaced by this guy.
				We determin the class name and the html tag that
				we want it to show as. */ }
						<RichText
							className={ 'copy-bd ' + customColorClass }
							style={ customColorStyle }
							tagName="h3"
							placeholder="Enter your text here"
							value={ attributes.bodyContent }
							onChange={ changeBodyContent }
						/>
					</div>
				</div>
			</div>
		</Fragment>,
	];
};
const saveHeaderBlock = ( props ) => {
	const className = getBlockDefaultClassName( 'borncreative/header-block' );
	const { attributes } = props;
	const { textColor, customTextColor } = props.attributes;

	let customColorClass;
	const customColorStyle = {};
	if ( textColor !== undefined ) {
		customColorClass = getColorClassName( 'color', textColor );
	}
	if ( customTextColor !== undefined ) {
		customColorStyle.color = customTextColor;
	}
	return (
		<div className={ className }>
			<div className="media">
				<video loop="true" autoPlay="autoplay" muted>
					<source src={ attributes.image } type="video/mp4" />
				</video>
			</div>
			<div className="copy">
				<div className="col-full">
					<RichText.Content
						className={ 'copy-hd ' + customColorClass }
						style={ customColorStyle }
						tagName="h2"
						value={ attributes.heading }
					/>
					<RichText.Content
						className={ 'copy-bd ' + customColorClass }
						style={ customColorStyle }
						tagName="h3"
						value={ attributes.bodyContent }
					/>
				</div>
			</div>
		</div>
	);
};

registerBlockType( 'borncreative/header-block-video', {
	title: 'Video Header Block',
	icon: 'format-video',
	category: 'born-creative-blocks',

	attributes: {
		bodyContent: {
			source: 'html',
			selector: '.copy-bd',
		},
		heading: {
			source: 'html',
			selector: 'h2',
		},
		image: {
			type: 'string',
		},
		textColor: {
			type: 'string',
		},
		customTextColor: {
			type: 'string',
		},
	},
	supports: {
		// Declare support for block's alignment.
		// This adds support for all the options:
		// left, center, right, wide, and full.
		align: true,
	},
	edit: withColors( { textColor: 'color' } )( editHeaderBlock ),
	save: saveHeaderBlock,
} );
