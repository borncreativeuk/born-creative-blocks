import { registerBlockType } from '@wordpress/blocks';

import './style.view.scss';
import './style.editor.scss';

import { MediaUpload, InspectorControls } from '@wordpress/block-editor';

const { getBlockDefaultClassName } = wp.blocks;

registerBlockType( 'borncreative/the-5-image-gallery-block', {
	title: '5 image gallery',
	icon: 'layout',
	category: 'born-creative-blocks',

	attributes: {
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
		imaged: {
			type: 'string',
			default: 'http://placehold.it/500',
		},
		imagee: {
			type: 'string',
			default: 'http://placehold.it/500',
		},
	},
	supports: {
		// Declare support for block's alignment.
		// This adds support for all the options:
		// left, center, right, wide, and full.
		align: true,
	},

	edit( props ) {
		const { className, setAttributes } = props;
		const { attributes } = props;

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

		function selectImaged( value ) {
			setAttributes( {
				imaged: value.sizes.full.url,
			} );
		}

		function selectImagee( value ) {
			setAttributes( {
				imagee: value.sizes.full.url,
			} );
		}

		return [
			<InspectorControls>
				{ /* Later, when we have customizable options we will add stuff here! */ }
				<div
					style={ {
						padding: '1em 0',
					} }
				>
					Options
				</div>
			</InspectorControls>,
			<div className={ className }>
				<div className="column1">
					<div className="media pr">
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
					</div>
				</div>
				<div className="column1">
					<div className="media pb">
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
					</div>
					<div className="media pb">
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
					<div className="extra-row">
						<div className="media pr">
							<MediaUpload
								onSelect={ selectImaged }
								render={ ( { open } ) => {
									return (
										<img
											onClick={ open }
											src={ attributes.imaged }
										/>
									);
								} }
							/>
						</div>
						<div className="media">
							<MediaUpload
								onSelect={ selectImagee }
								render={ ( { open } ) => {
									return (
										<img
											onClick={ open }
											src={ attributes.imagee }
										/>
									);
								} }
							/>
						</div>
					</div>
				</div>
			</div>,
		];
	},

	save( props ) {
		const className = getBlockDefaultClassName(
			'borncreative/the-5-image-gallery-block'
		);
		const { attributes } = props;

		return (
			<div
				className={ className }
				data-aos="fade-up"
				data-aos-duration="2000"
			>
				<div className="column1">
					<div className="media pr">
						<div className="zoom">
							<img src={ attributes.imagea } />
						</div>
					</div>
				</div>
				<div className="column1">
					<div className="media pb">
						<div className="zoom">
							<img src={ attributes.imageb } />
						</div>
					</div>
					<div className="media pb">
						<div className="zoom">
							<img src={ attributes.imagec } />
						</div>
					</div>
					<div className="extra-row">
						<div className="media pr">
							<div className="zoom">
								<img src={ attributes.imaged } />
							</div>
						</div>
						<div className="media">
							<div className="zoom">
								<img src={ attributes.imagee } />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
} );
