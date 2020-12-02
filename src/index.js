import { registerBlockType } from '@wordpress/blocks';

const {
    RichText
} = wp.editor;

registerBlockType('autograph/hero', {
    title: 'Hero Header Image',
    icon: 'welcome-write-blog',
    category: 'design',
    attributes: {
        textString: {
            type: 'array',
            source: 'children',
            selector: 'h2',
        }
    },
     edit(props) {
        const { setAttributes, attributes } = props;

        function onTextChange(changes) {
            setAttributes({
                textString: changes
            });
        }

        return (
            <RichText
                tagName="h2"
                value={attributes.textString}
                onChange={onTextChange}
                placeholder="Enter your text here!"
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