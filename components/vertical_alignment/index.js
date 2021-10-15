// import "./style.scss";


const { __ } = wp.i18n; // Import __() from wp.i18n
const { __experimentalBoxControl } = wp.components;
const BoxControl = __experimentalBoxControl;

const { InspectorControls,
    BlockControls,
    AlignmentToolbar,
    BlockAlignmentToolbar,
    RichText,
    MediaUpload, MediaUploadCheck, InnerBlocks } = wp.editor;
const { PanelBody, PanelRow,
    TextControl, SelectControl, RangeControl, Dashicon, ToggleControl, ColorPalette, ColorIndicator,
    Card, CardBody, Button, AlignmentMatrixControl, AnglePickerControl, ColorGradientControl, __experimentalGradientPicker, ColorPicker } = wp.components;


export default (props) => {

    let attrs = {
        ...props.attributes,
        [`${props.prefix}_vertical_alignment`]: {
            type: 'string',
            default: 'default'
        },      
    };
    let content = ({attributes, setAttributes}) => <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={false}>

    <PanelRow>
        <h4>Vertical Alignment</h4>
        <div style={{alignSelf:'center'}}>
            <SelectControl      
                                value={ attributes[`${props.prefix}_vertical_alignment`] }
                                options={[
                                    { label: 'Default' , value:'default'},
                                    { label: 'Top' , value:'top'},
                                    { label: 'Middle' , value:'middle'},
                                    { label: 'Bottom' , value:'bottom'},
                                    { label: 'Space Between' , value:'space_between'},
                                    { label: 'Space Around' , value:'space_around'},
                                    { label: 'Space Evenly' , value:'space_evenly'},
                                ]}
                                onChange={(new_val) => setAttributes({ [`${props.prefix}_vertical_alignment`]: new_val })
                            }
                                />
        </div>                  
     
    </PanelRow>

    </PanelBody>;
    return { attrs, content }
}