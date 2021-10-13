const { __ } = wp.i18n; // Import __() from wp.i18n


const { InspectorControls,
    BlockControls,
    AlignmentToolbar,
    BlockAlignmentToolbar,
    RichText,
    MediaUpload, MediaUploadCheck, InnerBlocks } = wp.editor;
const { PanelBody, PanelRow,
    TextControl, SelectControl, RangeControl, Dashicon, ToggleControl, ColorPalette, ColorIndicator,
    Card, CardBody, Button, AlignmentMatrixControl, AnglePickerControl, ColorGradientControl, __experimentalGradientPicker, ColorPicker } = wp.components;

export const BBPadding = (props) => {
    
    return <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={true}>
    {/* <TextControl  onChange={(e)=>props.setAttributes({[props.attributePrefix+"_padding"]:e})} /> */}
    <RangeControl
                            label="Wrapper Padding Top"
                            min={0}
                            max={100}
                            step={0.1}
                            initialPosition={0}
                            value={props.attributePrefix+"_pt_wrap"}
                            onChange={(e)=>props.setAttributes({[props.attributePrefix+"_pt_wrap"]:e})}
                        />

    <RangeControl
                            label="Wrapper Padding Right"
                            min={0}
                            max={100}
                            step={0.1}
                            initialPosition={0}
                            value={props.attributePrefix+"_pr_wrap"}
                        />
    <RangeControl
                            label="Wrapper Padding Bottom"
                            min={0}
                            max={100}
                            step={0.1}
                            initialPosition={0}
                            value={props.attributePrefix+"_pb_wrap"}
                        />
    <RangeControl
                            label="Wrapper Padding Left"
                            min={0}
                            max={100}
                            step={0.1}
                            initialPosition={0}
                            value={props.attributePrefix+"_pl_wrap"}
                        />                    
</PanelBody>
}