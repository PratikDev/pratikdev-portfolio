import { $ } from "bun";
import { buildResumeInDocker } from "./docker.ts";
import { resumePaths } from "./paths.ts";

// `git diff --quiet` exits 1 when the file differs.
async function hasChanges(...args: string[]): Promise<boolean> {
	const { exitCode } = await $`git diff --quiet ${args} -- ${resumePaths.tex}`.nothrow();
	return exitCode === 1;
}

if (await hasChanges("--cached")) {
	// The build reads the working tree, so it must match what is being committed.
	if (await hasChanges()) {
		console.error("resume.tex has unstaged changes. Stage or stash them before committing.");
		process.exit(1);
	}

	await buildResumeInDocker();
	await $`git add ${resumePaths.pdf} ${resumePaths.md} ${resumePaths.hash}`;
}
