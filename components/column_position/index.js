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
        [`${props.prefix}_column_position`]: {
            type: 'string',
            default: 'middle'
        },       
    };
    let content = ({attributes, setAttributes}) => <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={false}>

    <PanelRow>
        <h4>Column Position</h4>
        <div style={{alignSelf:'center'}}>
            <SelectControl      
                                value={ attributes[`${props.prefix}_column_position`] }
                                options={[
                                    { label: 'Stretch' , value:'stretch'},
                                    { label: 'Top' , value:'top'},
                                    { label: 'Middle' , value:'middle'},
                                    { label: 'Bottom' , value:'bottom'}
                                ]}
                                onChange={(new_val) => setAttributes({ [`${props.prefix}_column_position`]: new_val })
                            }
                                />
        </div>                        
    </PanelRow>

    </PanelBody>;
    return { attrs, content }
}