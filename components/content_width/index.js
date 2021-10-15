// import "./style.scss";
import { getAttribute, getResponsiveMode, responsiveChange } from "../../main";

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
              setAttributes({ [`${props.prefix}_type`]: nextValues })
            }
          />
        </div>
      </PanelRow>

      {getAttribute(attributes, props.prefix, "type") === "boxed" ? (
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "30px", marginBottom: "30px" }}>
              <span style={{ marginRight: "10px" }}>Border Width</span>

            <ButtonGroup>
              <Button
                variant="primary"
                style={{ cursor: "pointer" }}
                onClick={(e) => responsiveChange("desktop", setAttributes)}
                icon="laptop"
              />



              <Button
                variant="secondary"
                style={{ cursor: "pointer" }}
                onClick={(e) => responsiveChange("tablet", setAttributes)}
                icon="tablet"
              />

              <Button
                variant="primary"
                style={{ cursor: "pointer" }}
                onClick={(e) => responsiveChange("mobile", setAttributes)}
                icon="smartphone"
              />
             </ButtonGroup> 
            </div>
          </div>
          <RangeControl
            min={500}
            max={1600}
            value={getAttribute(
              attributes,
              props.prefix,
              "max_type",
              attributes.deviceSelection
            )}
            step={1}
            onChange={(new_val) =>
              setAttributes({ [`${props.prefix}_max`]: new_val })
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
