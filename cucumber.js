const path = require('path');
const fs = require('fs');

// Helper function to format date and time
function getTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
}

// Generate a dynamic report folder
const timestamp = getTimestamp();
const reportDir = path.join('TestReports', `report_${timestamp}`);

// Ensure the directory exists
fs.mkdirSync(reportDir, { recursive: true });

module.exports = {
  default: {
    // Paths to the feature files
    paths: ['Features//OrangeHRMLogin.feature'],

    // Step definitions and hooks
    require: [
      'Steps//*.steps.js',
      'Steps//Hooks.js',
    ],

    // Output format
    format: [
      `json:${path.join(reportDir, 'cucumber-report.json')}`, // Generate JSON report
      `html:${path.join(reportDir, 'cucumber-report.html')}`, // Generate HTML report
    ],

    // Timeout for each step
    timeout: 60000, // 60 seconds

    // Disable publishing results to Cucumber public dashboard
  },
};