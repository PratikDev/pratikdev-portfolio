const rootDir = new URL("../../", import.meta.url).pathname;
const scriptsDir = `${rootDir}scripts/resume`;
const assetsDir = `${rootDir}src/assets`;

export const resumeJobName = "pratik-resume";

export const resumePaths = {
	root: rootDir,
	tex: `${assetsDir}/resume.tex`,
	pdf: `${assetsDir}/${resumeJobName}.pdf`,
	md: `${assetsDir}/${resumeJobName}.md`,
	hash: `${assetsDir}/.resume.hash`,
	// latexmk build dir: keeps .aux/.log out of src/assets and allows incremental builds.
	latexOutDir: `${rootDir}node_modules/.tmp/resume`,
	scriptsDir,
	buildScript: `${scriptsDir}/build.ts`,
	dockerfile: `${scriptsDir}/Dockerfile`,
} as const;
