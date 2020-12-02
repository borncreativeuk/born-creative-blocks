import { registerBlockType } from '@wordpress/blocks';

registerBlockType('autograph/hero', {
    title: 'Hero Header Image',
    icon: 'smiley',
    category: 'design',
    edit: () => <div> Hello, world 1! </div>,
    save: () => <div> Hello, world 1! </div>,
});

registerBlockType('autograph/block', {
    title: 'block2',
    icon: 'smiley',
    category: 'design',
    edit: () => <div> Hello, world! </div>,
    save: () => <div> Hello, world! </div>,
});