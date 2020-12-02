import { registerBlockType } from '@wordpress/blocks';

const {
    RichText
} = wp.editor;

registerBlockType('autograph/hero', {
    title: 'Hero Header Image',
    icon: 'welcome-write-blog',
    category: 'design',
    edit() {
        return (
             <RichText
                value='The stuff inside the input'
                />
        );
    },

    save() {
        return (
            <div>Only the front end will show this</div>
        );
    }
});

registerBlockType('autograph/block', {
    title: 'block2',
    icon: 'smiley',
    category: 'design',
    edit: () => <div> Hello, world! </div>,
    save: () => <div> Hello, world! </div>,
});