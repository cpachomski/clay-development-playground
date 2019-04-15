'use strict';

const pkg = require('../../package.json'),
  // amphoraReact = require('amphora-html'),
  amphoraReact = require('amphora-react'),
  helpers = require('../universal/helpers'),
  resolveMediaService = require('../server/resolve-media');

amphoraReact.configureRender({
  editAssetTags: true,
  cacheBuster: pkg.version
});

amphoraReact.addResolveMedia(resolveMediaService);
amphoraReact.addHelpers(helpers);
amphoraReact.addEnvVars(require('../../client-env.json'));
amphoraReact.render = amphoraReact.render;

module.exports = {
  default: 'html',
  html: amphoraReact
};
