// import "./style.scss";
import { getAttribute, getResponsiveMode, responsiveChange, setAttributesCustom, ResponsiveButtonGroup } from "../../main";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { __experimentalBoxControl } = wp.components;
const BoxControl = __experimentalBoxControl;

const {
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
  BlockAlignmentToolbar,
  RichText,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
} = wp.editor;
const {
  PanelBody,
  BaseControl ,
  PanelRow,
  TextControl,
  SelectControl,
  RangeControl,
  Dashicon,
  ToggleControl,
  ColorPalette,
  ColorIndicator,
  Card,
  CardBody,
  Button,
  ButtonGroup,
  AlignmentMatrixControl,
  AnglePickerControl,
  ColorGradientControl,
  __experimentalGradientPicker,
  ColorPicker,
} = wp.components;
export default (props) => {
  let attrs = {
    ...props.attributes,
    ...getResponsiveMode(
      {
        [`${props.prefix}_max`]: {
          type: "number",
          default: 1140,
        },
      },
      true,
      ["all"]
    ),
    [`${props.prefix}_type`]: {
      type: "string",
      default: "boxed",
    },
  };
  //   console.log(`attr generaator`,getResponsiveMode({
  //     [`${props.prefix}_max`]: {
  //       type: "number",
  //       default: 1140,
  //     },
  //   },true,['all']));
  let content = ({ attributes, setAttributes }) => (
    <PanelBody title={__(props.name, "blocks-bakery")} initialOpen={true}>
      <PanelRow>
        <h4>
          Content Width ({getAttribute(attributes, props.prefix, "type")})
        </h4>

        <div style={{ alignSelf: "center" }}>
          <SelectControl
            value={getAttribute(attributes, props.prefix, "type")}
            options={[
              { label: "Boxed", value: "boxed" },
              { label: "Full Width", value: "full_width" },
            ]}
            onChange={(nextValues) =>
              setAttributesCustom(setAttributes,nextValues,attributes, props.prefix, "type")
              
            }
          />
        </div>
      </PanelRow>

      {getAttribute(attributes, props.prefix, "type") === "boxed" ? (
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "30px", marginBottom: "30px" }}>
              <span style={{ marginRight: "10px" }}>Border Width</span>
<ResponsiveButtonGroup attributes={attributes} setAttributes={setAttributes}/>
           
            </div>
          </div>
          <RangeControl
            min={500}
            max={1600}
            value={getAttribute(
              attributes,
              props.prefix, 
              "max"
            )}
            step={1}
            onChange={(value) =>
              setAttributesCustom(setAttributes,value,attributes,props.prefix,'max')
            }
          />
        </div>
      ) : (
        "not found"
      )}
    </PanelBody>
  );
  return { attrs, content };
};
