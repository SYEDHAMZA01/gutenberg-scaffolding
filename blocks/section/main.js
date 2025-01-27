/**
 * Registers a new block provided a unique name and an object defining its behavior.
 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
 */

import {BBPadding} from '../../components/padding';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, useBlockProps } = wp.blockEditor;
const { InspectorControls,
    BlockControls,
    AlignmentToolbar,
    BlockAlignmentToolbar,
    
    MediaUpload, MediaUploadCheck, InnerBlocks } = wp.editor;
const { PanelBody, PanelRow,
    TextControl, SelectControl, RangeControl, Dashicon, ToggleControl, ColorPalette, ColorIndicator,
    Card, CardBody, Button, AlignmentMatrixControl, AnglePickerControl, ColorGradientControl, __experimentalGradientPicker, ColorPicker } = wp.components;


/**
 * Every block starts by registering a new block type definition.
 * @see https://wordpress.org/gutenberg/handbook/block-api/
 */
const blockSlug = 'section';
const blockName = 'Section';
registerBlockType(`${MAMD_PLUGIN_INFO.slug}/${blockSlug}`, {
    /**
     * This is the display title for your block, which can be translated with `i18n` functions.
     * The block inserter will show this name.
     */
    title: __('Gutenberg ' + blockName),

    attributes: {
        backgroundColor: {
            default: "yellow",
            type: "string"
        },
        someText: {
            type: 'string',
            source: 'html',
            selector: 'h2',
            default: "Write Something"
        },
        bb_section_padding:{
            type:'string'

        }
    },

    /**
     * Blocks are grouped into categories to help users browse and discover them.
     * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
     */
    category: 'widgets', //MAMD_PLUGIN_INFO.category_slug
    /**
     * Optional block extended support features.
     */
    // supports: {
    //     // Removes support for an HTML mode.
    //     html: false,
    // },
    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
     *
     * @param {Object} [props] Properties passed from the editor.
     * @return {Element}       Element to render.
     */
    edit: function ({ attributes, setAttributes }) {
        const blockProps = useBlockProps({
            className: 'my-random-classname',
        });

        return (
            <>
            <InspectorControls>
                    <BBPadding setAttributes={setAttributes} attributePrefix="bb_section" name="Padding Chaiye" />

                    {/* <BBPadding name="Padding Chaiye" /> */}
</InspectorControls>
<><p>{attributes.bb_section_padding}</p>
                <RichText
                    {...blockProps}
                    tagName="h2" // The tag here is the element output and editable in the admin
                    value={attributes.someText} // Any existing content, either from the database or an attribute default
                    allowedFormats={['core/bold', 'core/italic']} // Allow the content to be made bold or italic, but do not allow other formatting options
                    onChange={(someText) => setAttributes({ someText })} // Store updated content as a block attribute
                    placeholder={__('Heading...')} // Display this text before any content has been added by the user
                /></>
            </>
        );
    },

    /**
     * The save function defines the way in which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into `post_content`.
     * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
     *
     * @return {Element}       Element to render.
     */
    save: function ({ attributes }) {
        const blockProps = useBlockProps.save();

        return <RichText.Content {...blockProps} tagName="h2" value={attributes.someText} />;
    },
});
