// Runs inside the Docker image. Use `bun run resume` from the host.
import { $ } from "bun";
import { fail } from "./fail.ts";
import { writeStoredHash } from "./hash.ts";
import { resumeJobName, resumePaths } from "./paths.ts";
import { assertRequirements } from "./requirements.ts";

async function buildPdf(): Promise<void> {
	await $`latexmk -pdf -interaction=nonstopmode -halt-on-error -jobname=${resumeJobName} -outdir=${resumePaths.latexOutDir} ${resumePaths.tex}`;
	await Bun.write(resumePaths.pdf, Bun.file(`${resumePaths.latexOutDir}/${resumeJobName}.pdf`));
}

async function buildMarkdown(): Promise<void> {
	await $`pandoc ${resumePaths.tex} --from=latex --to=gfm --wrap=none --output=${resumePaths.md}`;
}

async function buildResume(): Promise<void> {
	await assertRequirements();
	await buildPdf();
	await buildMarkdown();
	await writeStoredHash();
}

if (import.meta.main) {
	if (Bun.env.RESUME_IN_DOCKER !== "1") {
		fail("This script runs inside the resume Docker image. Use `bun run resume` instead.");
	}
	await buildResume();
	console.log("Resume built: PDF, Markdown and hash updated.");
}
