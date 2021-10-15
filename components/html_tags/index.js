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
        [`${props.prefix}_html_tags`]: {
            type: 'string',
            default: 'section'
        },       
    };
    let content = ({attributes, setAttributes}) => <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={false}>

    <PanelRow>
        <h4>HTML Tags</h4>
        <div style={{alignSelf:'center'}}>
            <SelectControl      
                                value={ attributes[`${props.prefix}_html_tags`] }
                                options={[
                                    { label: 'Default' , value:'section'},
                                    { label: 'Header' , value:'header'},
                                    { label: 'Section' , value:'section'},
                                    { label: 'Footer' , value:'footer'},
                                    { label: 'Main' , value:'main'},
                                    { label: 'Nav' , value:'nav'},
                                    { label: 'Article' , value:'article'},
                                    { label: 'Aside' , value:'aside'},
                                ]}
                                onChange={(new_val) => setAttributes({ [`${props.prefix}_html_tags`]: new_val })
                            }
                                />
        </div>                        
    </PanelRow>

    </PanelBody>;
    return { attrs, content }
}