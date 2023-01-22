// src/index.ts
var userGenerated = ["css","pos","flexDir","p","pl","pr","pt","pb","pe","ps","px","py","ml","mr","mt","mb","m","mx","my","me","ms","w","h","minH","maxH","minW","maxW","bgAttachment","bgClip","bg","bgColor","bgPos","bgOrigin","bgImage","bgRepeat","bgBlend","bgSize","bgGradient","ringWidth","ringColor","ring","ringOffset","shadow","shadowColor","x","y","aspectRatio","boxDecorationBreak","zIndex","boxSizing","objectPosition","objectFit","overscrollBehavior","overscrollBehaviorX","overscrollBehaviorY","position","top","left","insetInline","insetBlock","inset","insetBlockEnd","insetBlockStart","insetInlineEnd","insetInlineStart","start","right","end","bottom","insetX","insetY","float","visibility","display","hideFrom","showFrom","flexBasis","flex","flexDirection","flexGrow","flexShrink","gridTemplateColumns","gridTemplateRows","gridColumn","gridRow","gridColumnStart","gridColumnEnd","gridAutoFlow","gridAutoColumns","gridAutoRows","gap","gridGap","gridRowGap","gridColumnGap","rowGap","columnGap","justifyContent","alignContent","alignItems","alignSelf","padding","paddingLeft","paddingRight","paddingTop","paddingBottom","paddingBlock","paddingBlockEnd","paddingBlockStart","paddingInline","paddingInlineEnd","paddingInlineStart","paddingX","paddingY","marginLeft","marginRight","marginTop","marginBottom","margin","marginX","marginY","marginBlock","marginBlockEnd","marginBlockStart","marginInline","marginInlineEnd","marginInlineStart","spaceX","spaceY","width","height","minHeight","maxHeight","minWidth","maxWidth","color","fontFamily","fontSize","fontWeight","fontSmoothing","fontVariantNumeric","letterSpacing","lineHeight","textAlign","textDecoration","textDecorationColor","textEmphasisColor","textDecorationStyle","textDecorationThickness","textUnderlineOffset","textTransform","textIndent","textShadow","textOverflow","verticalAlign","wordBreak","truncate","lineClamp","listStyleType","listStylePosition","backgroundAttachment","backgroundClip","background","backgroundColor","backgroundPosition","backgroundOrigin","backgroundImage","backgroundRepeat","backgroundBlendMode","backgroundSize","backgroundGradient","textGradient","gradientFrom","gradientTo","gradientVia","borderRadius","borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius","borderTopRadius","borderRightRadius","borderBottomRadius","borderLeftRadius","borderStartStartRadius","borderStartEndRadius","borderStartRadius","borderEndStartRadius","borderEndEndRadius","borderEndRadius","border","borderColor","borderXColor","borderYColor","borderLeft","borderLeftColor","borderRight","borderRightColor","borderTop","borderTopColor","borderBottom","borderBottomColor","borderX","borderY","borderStyle","outlineWidth","outlineColor","outline","outlineOffset","divideX","divideY","divideColor","divideStyle","boxShadow","boxShadowColor","mixBlendMode","filter","brightness","contrast","grayscale","hueRotate","invert","saturate","sepia","dropShadow","blur","backdropFilter","backdropBlur","backdropBrightness","backdropContrast","backdropGrayscale","backdropHueRotate","backdropInvert","backdropOpacity","backdropSaturate","backdropSepia","borderCollapse","borderSpacing","borderSpacingX","borderSpacingY","tableLayout","transitionTimingFunction","transitionDelay","transitionDuration","transitionProperty","animation","transform","transformOrigin","scale","scaleX","scaleY","rotate","translateX","translateY","skewX","skewY","accentColor","caretColor","scrollBehavior","scrollbar","scrollMargin","scrollMarginX","scrollMarginY","scrollMarginLeft","scrollMarginRight","scrollMarginTop","scrollMarginBottom","scrollMarginBlock","scrollMarginBlockEnd","scrollMarginBlockStart","scrollMarginInline","scrollMarginInlineEnd","scrollMarginInlineStart","scrollPadding","scrollPaddingBlock","scrollPaddingBlockStart","scrollPaddingBlockEnd","scrollPaddingInline","scrollPaddingInlineEnd","scrollPaddingInlineStart","scrollPaddingX","scrollPaddingY","scrollPaddingLeft","scrollPaddingRight","scrollPaddingTop","scrollPaddingBottom","scrollSnapAlign","scrollSnapStop","scrollSnapType","scrollSnapStrictness","scrollSnapMargin","scrollSnapMarginTop","scrollSnapMarginBottom","scrollSnapMarginLeft","scrollSnapMarginRight","touchAction","userSelect","fill","stroke","srOnly","debug","borderSlim","colorPalette","textStyle","_hover","_focus","_focusWithin","_focusVisible","_disabled","_active","_visited","_target","_readOnly","_readWrite","_empty","_checked","_enabled","_expanded","_highlighted","_before","_after","_firstLetter","_firstLine","_marker","_selection","_file","_backdrop","_first","_last","_only","_even","_odd","_firstOfType","_lastOfType","_onlyOfType","_peerFocus","_peerHover","_peerActive","_peerFocusWithin","_peerFocusVisible","_peerDisabled","_peerChecked","_peerInvalid","_peerExpanded","_peerPlaceholderShown","_groupFocus","_groupHover","_groupActive","_groupFocusWithin","_groupFocusVisible","_groupDisabled","_groupChecked","_groupExpanded","_groupInvalid","_indeterminate","_required","_valid","_invalid","_autofill","_inRange","_outOfRange","_placeholder","_placeholderShown","_pressed","_selected","_default","_optional","_open","_fullscreen","_loading","_currentPage","_currentStep","_motionReduce","_motionSafe","_print","_landscape","_portrait","_dark","_light","_osDark","_osLight","_highConstrast","_lessContrast","_moreContrast","_ltr","_rtl","_scrollbar","_scrollbarThumb","_scrollbarTrack","sm","smOnly","smDown","md","mdOnly","mdDown","lg","lgOnly","lgDown","xl","xlOnly","xlDown","2xl","2xlOnly","smToMd","smToLg","smToXl","smTo2xl","mdToLg","mdToXl","mdTo2xl","lgToXl","lgTo2xl","xlTo2xl"];
var uniq = (arr) => Array.from(new Set(arr));
var allCssProperties = uniq([
  "MsAccelerator",
  "MsBlockProgression",
  "MsContentZoomChaining",
  "MsContentZooming",
  "MsContentZoomLimit",
  "MsContentZoomLimitMax",
  "MsContentZoomLimitMin",
  "MsContentZoomSnap",
  "MsContentZoomSnapPoints",
  "MsContentZoomSnapType",
  "MsFilter",
  "MsFlowFrom",
  "MsFlowInto",
  "MsGridColumns",
  "MsGridRows",
  "MsHighContrastAdjust",
  "MsHyphenateLimitChars",
  "MsHyphenateLimitLines",
  "MsHyphenateLimitZone",
  "MsImeAlign",
  "MsOverflowStyle",
  "MsScrollbar3dlightColor",
  "MsScrollbarArrowColor",
  "MsScrollbarBaseColor",
  "MsScrollbarDarkshadowColor",
  "MsScrollbarFaceColor",
  "MsScrollbarHighlightColor",
  "MsScrollbarShadowColor",
  "MsScrollbarTrackColor",
  "MsScrollChaining",
  "MsScrollLimit",
  "MsScrollLimitXMax",
  "MsScrollLimitXMin",
  "MsScrollLimitYMax",
  "MsScrollLimitYMin",
  "MsScrollRails",
  "MsScrollSnapPointsX",
  "MsScrollSnapPointsY",
  "MsScrollSnapType",
  "MsScrollSnapX",
  "MsScrollSnapY",
  "MsScrollTranslation",
  "MsTextAutospace",
  "MsTouchSelect",
  "MsUserSelect",
  "MsWrapFlow",
  "MsWrapMargin",
  "MsWrapThrough",
  "MozAppearance",
  "MozBinding",
  "MozBorderBottomColors",
  "MozBorderLeftColors",
  "MozBorderRightColors",
  "MozBorderTopColors",
  "MozContextProperties",
  "MozFloatEdge",
  "MozForceBrokenImageIcon",
  "MozImageRegion",
  "MozOrient",
  "MozOutlineRadius",
  "MozOutlineRadiusBottomleft",
  "MozOutlineRadiusBottomright",
  "MozOutlineRadiusTopleft",
  "MozOutlineRadiusTopright",
  "MozStackSizing",
  "MozTextBlink",
  "MozUserFocus",
  "MozUserInput",
  "MozUserModify",
  "MozWindowDragging",
  "MozWindowShadow",
  "WebkitAppearance",
  "WebkitBorderBefore",
  "WebkitBorderBeforeColor",
  "WebkitBorderBeforeStyle",
  "WebkitBorderBeforeWidth",
  "WebkitBoxReflect",
  "WebkitLineClamp",
  "WebkitMask",
  "WebkitMaskAttachment",
  "WebkitMaskClip",
  "WebkitMaskComposite",
  "WebkitMaskImage",
  "WebkitMaskOrigin",
  "WebkitMaskPosition",
  "WebkitMaskPositionX",
  "WebkitMaskPositionY",
  "WebkitMaskRepeat",
  "WebkitMaskRepeatX",
  "WebkitMaskRepeatY",
  "WebkitMaskSize",
  "WebkitOverflowScrolling",
  "WebkitTapHighlightColor",
  "WebkitTextFillColor",
  "WebkitTextStroke",
  "WebkitTextStrokeColor",
  "WebkitTextStrokeWidth",
  "WebkitTouchCallout",
  "WebkitUserModify",
  "accentColor",
  "alignContent",
  "alignItems",
  "alignSelf",
  "alignTracks",
  "all",
  "animation",
  "animationComposition",
  "animationDelay",
  "animationDirection",
  "animationDuration",
  "animationFillMode",
  "animationIterationCount",
  "animationName",
  "animationPlayState",
  "animationTimingFunction",
  "animationTimeline",
  "appearance",
  "aspectRatio",
  "azimuth",
  "backdropFilter",
  "backfaceVisibility",
  "background",
  "backgroundAttachment",
  "backgroundBlendMode",
  "backgroundClip",
  "backgroundColor",
  "backgroundImage",
  "backgroundOrigin",
  "backgroundPosition",
  "backgroundPositionX",
  "backgroundPositionY",
  "backgroundRepeat",
  "backgroundSize",
  "blockOverflow",
  "blockSize",
  "border",
  "borderBlock",
  "borderBlockColor",
  "borderBlockStyle",
  "borderBlockWidth",
  "borderBlockEnd",
  "borderBlockEndColor",
  "borderBlockEndStyle",
  "borderBlockEndWidth",
  "borderBlockStart",
  "borderBlockStartColor",
  "borderBlockStartStyle",
  "borderBlockStartWidth",
  "borderBottom",
  "borderBottomColor",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderBottomStyle",
  "borderBottomWidth",
  "borderCollapse",
  "borderColor",
  "borderEndEndRadius",
  "borderEndStartRadius",
  "borderImage",
  "borderImageOutset",
  "borderImageRepeat",
  "borderImageSlice",
  "borderImageSource",
  "borderImageWidth",
  "borderInline",
  "borderInlineEnd",
  "borderInlineColor",
  "borderInlineStyle",
  "borderInlineWidth",
  "borderInlineEndColor",
  "borderInlineEndStyle",
  "borderInlineEndWidth",
  "borderInlineStart",
  "borderInlineStartColor",
  "borderInlineStartStyle",
  "borderInlineStartWidth",
  "borderLeft",
  "borderLeftColor",
  "borderLeftStyle",
  "borderLeftWidth",
  "borderRadius",
  "borderRight",
  "borderRightColor",
  "borderRightStyle",
  "borderRightWidth",
  "borderSpacing",
  "borderStartEndRadius",
  "borderStartStartRadius",
  "borderStyle",
  "borderTop",
  "borderTopColor",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderTopStyle",
  "borderTopWidth",
  "borderWidth",
  "bottom",
  "boxAlign",
  "boxDecorationBreak",
  "boxDirection",
  "boxFlex",
  "boxFlexGroup",
  "boxLines",
  "boxOrdinalGroup",
  "boxOrient",
  "boxPack",
  "boxShadow",
  "boxSizing",
  "breakAfter",
  "breakBefore",
  "breakInside",
  "captionSide",
  "caret",
  "caretColor",
  "caretShape",
  "clear",
  "clip",
  "clipPath",
  "color",
  "printColorAdjust",
  "colorScheme",
  "columnCount",
  "columnFill",
  "columnGap",
  "columnRule",
  "columnRuleColor",
  "columnRuleStyle",
  "columnRuleWidth",
  "columnSpan",
  "columnWidth",
  "columns",
  "contain",
  "containIntrinsicSize",
  "containIntrinsicBlockSize",
  "containIntrinsicHeight",
  "containIntrinsicInlineSize",
  "containIntrinsicWidth",
  "content",
  "contentVisibility",
  "counterIncrement",
  "counterReset",
  "counterSet",
  "cursor",
  "direction",
  "display",
  "emptyCells",
  "filter",
  "flex",
  "flexBasis",
  "flexDirection",
  "flexFlow",
  "flexGrow",
  "flexShrink",
  "flexWrap",
  "float",
  "font",
  "fontFamily",
  "fontFeatureSettings",
  "fontKerning",
  "fontLanguageOverride",
  "fontOpticalSizing",
  "fontVariationSettings",
  "fontSize",
  "fontSizeAdjust",
  "fontSmooth",
  "fontStretch",
  "fontStyle",
  "fontSynthesis",
  "fontVariant",
  "fontVariantAlternates",
  "fontVariantCaps",
  "fontVariantEastAsian",
  "fontVariantLigatures",
  "fontVariantNumeric",
  "fontVariantPosition",
  "fontWeight",
  "forcedColorAdjust",
  "gap",
  "grid",
  "gridArea",
  "gridAutoColumns",
  "gridAutoFlow",
  "gridAutoRows",
  "gridColumn",
  "gridColumnEnd",
  "gridColumnGap",
  "gridColumnStart",
  "gridGap",
  "gridRow",
  "gridRowEnd",
  "gridRowGap",
  "gridRowStart",
  "gridTemplate",
  "gridTemplateAreas",
  "gridTemplateColumns",
  "gridTemplateRows",
  "hangingPunctuation",
  "height",
  "hyphenateCharacter",
  "hyphens",
  "imageOrientation",
  "imageRendering",
  "imageResolution",
  "imeMode",
  "initialLetter",
  "initialLetterAlign",
  "inlineSize",
  "inputSecurity",
  "inset",
  "insetBlock",
  "insetBlockEnd",
  "insetBlockStart",
  "insetInline",
  "insetInlineEnd",
  "insetInlineStart",
  "isolation",
  "justifyContent",
  "justifyItems",
  "justifySelf",
  "justifyTracks",
  "left",
  "letterSpacing",
  "lineBreak",
  "lineClamp",
  "lineHeight",
  "lineHeightStep",
  "listStyle",
  "listStyleImage",
  "listStylePosition",
  "listStyleType",
  "margin",
  "marginBlock",
  "marginBlockEnd",
  "marginBlockStart",
  "marginBottom",
  "marginInline",
  "marginInlineEnd",
  "marginInlineStart",
  "marginLeft",
  "marginRight",
  "marginTop",
  "marginTrim",
  "mask",
  "maskBorder",
  "maskBorderMode",
  "maskBorderOutset",
  "maskBorderRepeat",
  "maskBorderSlice",
  "maskBorderSource",
  "maskBorderWidth",
  "maskClip",
  "maskComposite",
  "maskImage",
  "maskMode",
  "maskOrigin",
  "maskPosition",
  "maskRepeat",
  "maskSize",
  "maskType",
  "masonryAutoFlow",
  "mathDepth",
  "mathShift",
  "mathStyle",
  "maxBlockSize",
  "maxHeight",
  "maxInlineSize",
  "maxLines",
  "maxWidth",
  "minBlockSize",
  "minHeight",
  "minInlineSize",
  "minWidth",
  "mixBlendMode",
  "objectFit",
  "objectPosition",
  "offset",
  "offsetAnchor",
  "offsetDistance",
  "offsetPath",
  "offsetPosition",
  "offsetRotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outlineColor",
  "outlineOffset",
  "outlineStyle",
  "outlineWidth",
  "overflow",
  "overflowAnchor",
  "overflowBlock",
  "overflowClipBox",
  "overflowClipMargin",
  "overflowInline",
  "overflowWrap",
  "overflowX",
  "overflowY",
  "overscrollBehavior",
  "overscrollBehaviorBlock",
  "overscrollBehaviorInline",
  "overscrollBehaviorX",
  "overscrollBehaviorY",
  "padding",
  "paddingBlock",
  "paddingBlockEnd",
  "paddingBlockStart",
  "paddingBottom",
  "paddingInline",
  "paddingInlineEnd",
  "paddingInlineStart",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "pageBreakAfter",
  "pageBreakBefore",
  "pageBreakInside",
  "paintOrder",
  "perspective",
  "perspectiveOrigin",
  "placeContent",
  "placeItems",
  "placeSelf",
  "pointerEvents",
  "position",
  "quotes",
  "resize",
  "right",
  "rotate",
  "rowGap",
  "rubyAlign",
  "rubyMerge",
  "rubyPosition",
  "scale",
  "scrollbarColor",
  "scrollbarGutter",
  "scrollbarWidth",
  "scrollBehavior",
  "scrollMargin",
  "scrollMarginBlock",
  "scrollMarginBlockStart",
  "scrollMarginBlockEnd",
  "scrollMarginBottom",
  "scrollMarginInline",
  "scrollMarginInlineStart",
  "scrollMarginInlineEnd",
  "scrollMarginLeft",
  "scrollMarginRight",
  "scrollMarginTop",
  "scrollPadding",
  "scrollPaddingBlock",
  "scrollPaddingBlockStart",
  "scrollPaddingBlockEnd",
  "scrollPaddingBottom",
  "scrollPaddingInline",
  "scrollPaddingInlineStart",
  "scrollPaddingInlineEnd",
  "scrollPaddingLeft",
  "scrollPaddingRight",
  "scrollPaddingTop",
  "scrollSnapAlign",
  "scrollSnapCoordinate",
  "scrollSnapDestination",
  "scrollSnapPointsX",
  "scrollSnapPointsY",
  "scrollSnapStop",
  "scrollSnapType",
  "scrollSnapTypeX",
  "scrollSnapTypeY",
  "scrollTimeline",
  "scrollTimelineAxis",
  "scrollTimelineName",
  "shapeImageThreshold",
  "shapeMargin",
  "shapeOutside",
  "tabSize",
  "tableLayout",
  "textAlign",
  "textAlignLast",
  "textCombineUpright",
  "textDecoration",
  "textDecorationColor",
  "textDecorationLine",
  "textDecorationSkip",
  "textDecorationSkipInk",
  "textDecorationStyle",
  "textDecorationThickness",
  "textEmphasis",
  "textEmphasisColor",
  "textEmphasisPosition",
  "textEmphasisStyle",
  "textIndent",
  "textJustify",
  "textOrientation",
  "textOverflow",
  "textRendering",
  "textShadow",
  "textSizeAdjust",
  "textTransform",
  "textUnderlineOffset",
  "textUnderlinePosition",
  "top",
  "touchAction",
  "transform",
  "transformBox",
  "transformOrigin",
  "transformStyle",
  "transition",
  "transitionDelay",
  "transitionDuration",
  "transitionProperty",
  "transitionTimingFunction",
  "translate",
  "unicodeBidi",
  "userSelect",
  "verticalAlign",
  "visibility",
  "whiteSpace",
  "widows",
  "width",
  "willChange",
  "wordBreak",
  "wordSpacing",
  "wordWrap",
  "writingMode",
  "zIndex",
  "zoom",
  ...userGenerated
]);
var regex = new RegExp("^(?:" + Array.from(allCssProperties).join("|") + ")$");
function memo(fn) {
  const cache = /* @__PURE__ */ Object.create(null);
  return (arg) => {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var isCssProperty = memo((prop) => {
  return regex.test(prop);
});
export {
  allCssProperties,
  isCssProperty
};
