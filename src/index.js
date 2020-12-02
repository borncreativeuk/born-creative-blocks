import { registerBlockType } from '@wordpress/blocks';

registerBlockType('autograph/block', {
    title: 'Basic Example',
    icon: 'smiley',
    category: 'design',
    edit: () => <div> Hello, world! </div>,
    save: () => <div> Hello, world! </div>,
});