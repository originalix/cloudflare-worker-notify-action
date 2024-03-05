const core = require('@actions/core');
const axios = require('axios');

async function run() {
  try {
    const webhookUrl = core.getInput('web-hook-url');
    const data = {
      artifactType: core.getInput('artifact-type'),
      artifactName: core.getInput('artifact-name'),
      artifactBundleId: core.getInput('artifact-bundle-id'),
      artifactVersionName: core.getInput('artifact-version-name'),
      artifactVersionCode: core.getInput('artifact-version-code'),
      artifactDownloadUrl: core.getInput('artifact-download-url'),
    };

    await axios.post(webhookUrl, data);

    console.log('Notification sent successfully');
  } catch (error) {
    core.setFailed(`Action failed with error ${error}`);
  }
}

run();
