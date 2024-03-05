const core = require('@actions/core');
const axios = require('axios');

async function run() {
  try {
    const webhookUrl = core.getInput('web-hook-url');
    const data = {
      platform: core.getInput('artifact-type'),
      artifactName: core.getInput('artifact-name'),
      bundleId: core.getInput('artifact-bundle-id'),
      versionName: core.getInput('artifact-version-name'),
      buildNumber: core.getInput('artifact-version-code'),
      downloadUrl: core.getInput('artifact-download-url'),
    };

    await axios.post(webhookUrl, data);

    console.log('Notification sent successfully');
  } catch (error) {
    core.setFailed(`Action failed with error ${error}`);
  }
}

run();
