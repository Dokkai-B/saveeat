// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Add the .cjs extension to the list of asset extensions
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;
