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
let customgapelement = false;

export default (props) => {

    let attrs = {
        ...props.attributes,
        [`${props.prefix}_columns_gap`]: {
            type: 'string'
        },
        [`${props.prefix}_custom_columns_gap`]: {
            type: 'number',
            default: 10
        },
       
    };
    let content = ({attributes, setAttributes}) => <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={false}>

<PanelRow>
    <h4>Columns Gap</h4>
    <div style={{alignSelf:'center'}}>
        <SelectControl      
                            value={ attributes[`${props.prefix}_columns_gap`] }
                            options={[
                                { label: 'Default' , value:'default'},
                                { label: 'No Gap' , value:'No Gap'},
                                { label: 'Narrow' , value:'Narrow'},
                                { label: 'Extended' , value:'Extended'},
                                { label: 'Wide' , value:'Wide'},
                                { label: 'Wider' , value:'Wider'},
                                { label: 'Costom' , value:'Costom'},
                            ]}
                            onChange={(new_val) => setAttributes({ [`${props.prefix}_columns_gap`]: new_val })
                            ((new_val == 'Costom')?customgapelement = true:customgapelement = false)
                        }
                             />
    </div>                        
</PanelRow>

{customgapelement == true ?<RangeControl 
                            label={__('Custom Column Gap', 'blocks-bakery')}
                            min={0}
                            max={500}
                            value={[`${props.prefix}_custom_columns_gap`]}
                            step={1}
                            onChange={(new_val) => 
                                setAttributes({ [`${props.prefix}_custom_columns_gap`]: new_val })
                            }
/>:''}
    </PanelBody>;
    return { attrs, content }
}