import React, { useEffects } from "react";
import spacingPanel from "./components/spacing";
import columnGapPanel from "./components/columns_gap";
import contentWidthPanel from "./components/content_width";
import heightPanel from "./components/height";
import columnPositionPanel from "./components/column_position";
import verticalAlignmentPanel from "./components/vertical_alignment";
import overflowPanel from "./components/overflow";
import htmlTagsPanel from "./components/html_tags";
import backgroundPanel from "./components/background";
const { registerBlockType } = wp.blocks;
const { InspectorControls, useBlockProps } = wp.blockEditor;
const { __ } = wp.i18n; // Import __() from wp.i18n
const {
  BlockControls,
  AlignmentToolbar,
  BlockAlignmentToolbar,
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
} = wp.editor;

const MAMD_PLUGIN_INFO = {
  name: "BB",
  slug: "blocks-bakery",
  prefix: "bb",
  category_slug: "bb_category",
};
let editPanels = [];

export const blockBakeryRegisterBlock = (blockName, options) => {
  let attributes = {
    mainPrefix: {
      type: "string",
      default: `${MAMD_PLUGIN_INFO.prefix}_${blockName}`,
    },
    ...options.attributes,
  };
  if (options.modules) {
    // Content Width
    if (options.modules.contentWidth) {
      let { name, prefix } = options.modules.contentWidth;
      let contentWidthPanelObj = contentWidthPanel({
        name,
        prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${
          prefix ? `_${prefix}` : ""
        }`,
        attributes,
      });
      attributes = contentWidthPanelObj.attrs;
      editPanels.push(contentWidthPanelObj.content);
    }

    //Height
    if (options.modules.height) {
      let { name, prefix } = options.modules.height;
      let heightPanelObj = heightPanel({
        name,
        prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${
          prefix ? `_${prefix}` : ""
        }`,
        attributes,
      });
      attributes = heightPanelObj.attrs;
      editPanels.push(heightPanelObj.content);
    }

    // Column Position
    if (options.modules.columnPosition) {
      let { name, prefix } = options.modules.columnPosition;
      let columnPositionPanelObj = columnPositionPanel({
        name,
        prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${
          prefix ? `_${prefix}` : ""
        }`,
        attributes,
      });
      attributes = columnPositionPanelObj.attrs;
      editPanels.push(columnPositionPanelObj.content);
    }

    // Column Gap
    if (options.modules.columnGap) {
      let { name, prefix } = options.modules.columnGap;
      let columnGapPanelObj = columnGapPanel({
        name,
        prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${
          prefix ? `_${prefix}` : ""
        }`,
        attributes,
      });
      attributes = columnGapPanelObj.attrs;
      editPanels.push(columnGapPanelObj.content);
    }

    // Vertical Alignment
    if (options.modules.verticalAlignment) {
      let { name, prefix } = options.modules.verticalAlignment;
      let verticalAlignmentPanelObj = verticalAlignmentPanel({
        name,
        prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${
          prefix ? `_${prefix}` : ""
        }`,
        attributes,
      });
      attributes = verticalAlignmentPanelObj.attrs;
      editPanels.push(verticalAlignmentPanelObj.content);
    }

    // Overflow
    if (options.modules.overflow) {
      let { name, prefix } = options.modules.overflow;
      let overflowPanelObj = overflowPanel({
        name,
        prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${
          prefix ? `_${prefix}` : ""
        }`,
        attributes,
      });
      attributes = overflowPanelObj.attrs;
      editPanels.push(overflowPanelObj.content);
    }

    // HtmlTags
    if (options.modules.htmlTags) {
      let { name, prefix } = options.modules.htmlTags;
      let htmlTagsPanelObj = htmlTagsPanel({
        name,
        prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${
          prefix ? `_${prefix}` : ""
        }`,
        attributes,
      });
      attributes = htmlTagsPanelObj.attrs;
      editPanels.push(htmlTagsPanelObj.content);
    }

    // Spacing
    if (options.modules.spacing.length > 0) {
      options.modules.spacing.map(({ name, prefix }) => {
        let spacingPanelObj = spacingPanel({
          name,
          prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${
            prefix ? `_${prefix}` : ""
          }`,
          attributes,
        });
        attributes = spacingPanelObj.attrs;
        editPanels.push(spacingPanelObj.content);
      });
    }

    // if (options.modules.background) {
    //     console.log(options.modules.background);
    //     let { name, prefix } = options.modules.background;
    //     let backgroundPanelObject = backgroundPanel({ name, prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${prefix ? `_${prefix}` : ''}`, attributes });
    //     attributes = backgroundPanelObject.attrs;
    //     editPanels.push(backgroundPanelObject.content);
    // }
  }

  return registerBlockType(`${MAMD_PLUGIN_INFO.slug}/${blockName}`, {
    ...options,
    attributes,
    category: MAMD_PLUGIN_INFO.category_slug,
    edit: (props) => {
      return (
        <>
          <InspectorControls>
            {editPanels.map((a) => a(props))}
          </InspectorControls>
          {options.edit(props)}
        </>
      );
    },
    save: (props) => options.save(props),
  });
};

export const responsiveChange = (device, setAttributes) => {
  switch (device) {
    case "desktop":
      setAttributes({ deviceSelection: "desktop" });
      wp.data
        .dispatch("core/edit-post")
        .__experimentalSetPreviewDeviceType("Device");
      break;
    case "tablet":
      setAttributes({ deviceSelection: "tablet" });
      wp.data
        .dispatch("core/edit-post")
        .__experimentalSetPreviewDeviceType("Tablet");
      break;
    case "mobile":
      setAttributes({ deviceSelection: "mobile" });
      wp.data
        .dispatch("core/edit-post")
        .__experimentalSetPreviewDeviceType("Mobile");
      break;
  }
};

export const getAttribute = (
  attributes,
  prefix,
  itemName,
  device = "desktop",
  withHover = false
) => {
  let addSuffixDeviceName =
    device === "tablet" ? "_tablet" : device === "mobile" ? "_mobile" : "";
  let addSuffixHover = withHover ? "_hover" : "";
  console.log("GetAttribute",`${prefix}_${itemName}${addSuffixDeviceName}${addSuffixHover}`)

  console.log("GetAttribute Value",attributes[
    `${prefix}_${itemName}${addSuffixDeviceName}${addSuffixHover}`
  ] || attributes[`${prefix}_${itemName}`]);
  return (
    attributes[
      `${prefix}_${itemName}${addSuffixDeviceName}${addSuffixHover}`
    ] || attributes[`${prefix}_${itemName}`]
  );
};


export const getResponsiveMode = (
  dataArray,
  hover = false,
  devicesPlusEffects = ["all"]
) => {
  let keyName = window.lodash.first(Object.keys(dataArray));
  let additionObjs = {};
  if (devicesPlusEffects.indexOf("all") > -1) {
    additionObjs = {
      [`${keyName}_tablet`]: dataArray[keyName],
      [`${keyName}_mobile`]: dataArray[keyName],
    };
    if (hover) {
      additionObjs = {
        ...additionObjs,
        [`${keyName}_tablet_hover`]: dataArray[keyName],
        [`${keyName}_mobile_hover`]: dataArray[keyName],
      };
    }
    return { ...dataArray, ...additionObjs };
  }
  if (devicesPlusEffects.indexOf("mobile")  > -1) {
    additionObjs = {
      ...additionObjs,
      [`${keyName}_mobile`]: dataArray[keyName],
    };
    if (hover) {
      additionObjs = {
        ...additionObjs,
        [`${keyName}_mobile_hover`]: dataArray[keyName],
      };
    }
  }
  if (devicesPlusEffects.indexOf("tablet")  > -1) {
    additionObjs = {
      ...additionObjs,
      [`${keyName}_tablet`]: dataArray[keyName],
    };
    if (hover) {
      additionObjs = {
        ...additionObjs,
        [`${keyName}_tablet_hover`]: dataArray[keyName],
      };
    }
  }

  return { ...dataArray, ...additionObjs };
};
