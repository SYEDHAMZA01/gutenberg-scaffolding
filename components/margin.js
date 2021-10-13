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

export const BBMargin = (props) => {

    //Line Height px em for tilte...........
    const section_px_margin = () => {
        var a = document.getElementById("section_px_margin");
        var b = document.getElementById("section_em_margin");
        var c = document.getElementById("section_rem_margin");
        a.style.textDecoration = "underline";
        b.style.textDecoration = "none";
        c.style.textDecoration = "none";
        props.setAttributes({ bb_section_margin_unit: 'px', bb_section_margin_controller: 200 })

    }

    const section_em_margin = () => {
        var a = document.getElementById("section_px_margin");
        var b = document.getElementById("section_em_margin");
        var c = document.getElementById("section_rem_margin");
        a.style.textDecoration = "none";
        b.style.textDecoration = "underline";
        c.style.textDecoration = "none";
        props.setAttributes({ bb_section_margin_unit: 'em', bb_section_margin_controller: 10 })

    }

    const section_rem_margin = () => {
        var a = document.getElementById("section_px_margin");
        var b = document.getElementById("section_em_margin");
        var c = document.getElementById("section_rem_margin");
        a.style.textDecoration = "none";
        b.style.textDecoration = "none";
        c.style.textDecoration = "underline";
        props.setAttributes({ bb_section_margin_unit: 'rem', bb_section_margin_controller: 10 })

    }
    
    return <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={true}>
        <PanelRow>
                <p>Wrapper Padding Top</p>
            <div>
                <Button id="section_px_margin" onClick={section_px_margin} style={{ textDecoration: "underline", padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>px</Button>
                <Button id="section_em_margin" onClick={section_em_margin} style={{ padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>em</Button>
                <Button id="section_rem_margin" onClick={section_rem_margin} style={{ padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>rem</Button>
            </div>
        </PanelRow>
    <RangeControl
                            
                            min={0}
                            max={100}
                            step={0.1}
                            initialPosition={0}
                            value={props.attributePrefix+"_pt_wrap"}
                            onChange={(e)=>props.setAttributes({[props.attributePrefix+"_mt_wrap"]:e})}
                        />

    <RangeControl
                            label="Wrapper Padding Right"
                            min={0}
                            max={100}
                            step={0.1}
                            initialPosition={0}
                            value={props.attributePrefix+"_mr_wrap"}
                        />
    <RangeControl
                            label="Wrapper Padding Bottom"
                            min={0}
                            max={100}
                            step={0.1}
                            initialPosition={0}
                            value={props.attributePrefix+"_mb_wrap"}
                        />
    <RangeControl
                            label="Wrapper Padding Left"
                            min={0}
                            max={100}
                            step={0.1}
                            initialPosition={0}
                            value={props.attributePrefix+"_ml_wrap"}
                        />                    
</PanelBody>
}