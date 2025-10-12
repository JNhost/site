const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

/**
 * Generate a unique build ID based on current timestamp and random hash
 * This ensures that each build has a unique identifier for cache busting
 */
function generateBuildId() {
  const timestamp = Date.now();
  const randomHash = crypto.randomBytes(8).toString('hex');
  const buildId = `${timestamp}-${randomHash}`;
  
  return buildId;
}

/**
 * Save build ID to a file for reference and cache busting
 */
function saveBuildId() {
  const buildId = generateBuildId();
  const buildInfo = {
    buildId,
    timestamp: new Date().toISOString(),
    nodeEnv: process.env.NODE_ENV || 'production',
  };

  // Save to public directory so it's accessible
  const publicBuildInfoPath = path.join(process.cwd(), 'public', 'build-info.json');
  fs.writeFileSync(publicBuildInfoPath, JSON.stringify(buildInfo, null, 2));

  // Also save to standalone if it exists
  const standaloneBuildInfoPath = path.join(process.cwd(), '.next', 'standalone', 'public', 'build-info.json');
  if (fs.existsSync(path.dirname(standaloneBuildInfoPath))) {
    fs.writeFileSync(standaloneBuildInfoPath, JSON.stringify(buildInfo, null, 2));
  }

  console.log('\n✅ Build ID generated:', buildId);
  console.log('📅 Build timestamp:', buildInfo.timestamp);
  console.log('💾 Build info saved to public/build-info.json\n');

  return buildId;
}

// Run the script
try {
  saveBuildId();
  process.exit(0);
} catch (error) {
  console.error('❌ Error generating build ID:', error);
  process.exit(1);
}
