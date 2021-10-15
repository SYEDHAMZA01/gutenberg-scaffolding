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
let heightelement = false;

export default (props) => {

    let attrs = {
        ...props.attributes,
        [`${props.prefix}_height`]: {
            type: 'string'
        },
        [`${props.prefix}_custom_min_height`]: {
            type: 'number',
            default: 400
        },
       
    };
    let content = ({attributes, setAttributes}) => <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={false}>

<PanelRow>
    <h4>Height</h4>
    <div style={{alignSelf:'center'}}>
        <SelectControl      
                            value={ attributes[`${props.prefix}_height`] }
                            options={[
                                { label: 'Default' , value:'default'},
                                { label: 'Fit To Screen' , value:'fit_to_screen'},
                                { label: 'Min Height' , value:'min_height'},
                            ]}
                            onChange={(new_val) => setAttributes({ [`${props.prefix}_height`]: new_val })
                            ((new_val == 'min_height')?heightelement = true:heightelement = false)
                        }
                             />
    </div>                        
</PanelRow>

{heightelement == true ?<RangeControl 
                            label={__('Minimum Height', 'blocks-bakery')}
                            min={0}
                            max={1440}
                            value={[`${props.prefix}_custom_min_height`]}
                            step={1}
                            onChange={(new_val) => 
                                setAttributes({ [`${props.prefix}_custom_min_height`]: new_val })
                            }
/>:''}
    </PanelBody>;
    return { attrs, content }
}