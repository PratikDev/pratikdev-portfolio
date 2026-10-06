import { $ } from "bun";
import { fail } from "./fail.ts";
import { hashFile } from "./hash.ts";
import { resumePaths } from "./paths.ts";

const imageName = "pratik-resume-builder";

async function assertDocker(): Promise<void> {
	if (Bun.which("docker") === null) {
		fail("Cannot build the resume: Docker is not installed.", "Install it from https://docs.docker.com/get-docker/");
	}
	if ((await $`docker info`.nothrow().quiet()).exitCode !== 0) {
		fail("Cannot build the resume: the Docker daemon is not running.", "Start Docker and try again.");
	}
}

// Tagged by the Dockerfile's hash, so editing the Dockerfile triggers a rebuild.
async function ensureImage(): Promise<string> {
	const image = `${imageName}:${(await hashFile(resumePaths.dockerfile)).slice(0, 12)}`;

	if ((await $`docker image inspect ${image}`.nothrow().quiet()).exitCode !== 0) {
		console.log(`Building ${image} (the first build downloads TeX Live and takes a few minutes)...`);
		await $`docker build --tag ${image} --file ${resumePaths.dockerfile} ${resumePaths.scriptsDir}`;
	}

	return image;
}

export async function buildResumeInDocker(): Promise<void> {
	await assertDocker();
	const image = await ensureImage();

	// Run as the host user so generated files aren't owned by root.
	const uid = process.getuid?.();
	const gid = process.getgid?.();
	const userArgs = uid === undefined || gid === undefined ? [] : ["--user", `${uid}:${gid}`];

	await $`docker run --rm ${userArgs} --env HOME=/tmp --volume ${resumePaths.root}:${resumePaths.root} --workdir ${resumePaths.root} ${image} bun ${resumePaths.buildScript}`;
}

if (import.meta.main) {
	await buildResumeInDocker();
}
