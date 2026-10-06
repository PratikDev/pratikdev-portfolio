import { $ } from "bun";
import { fail } from "./fail.ts";
import { resumePaths } from "./paths.ts";

const requiredCommands = ["latexmk", "pdflatex", "kpsewhich", "pandoc"] as const;

const installHint =
	"Add the missing TeX Live packages to the `tlmgr install` line in scripts/resume/Dockerfile.\n" +
	"Find a file's package with `tlmgr search --global --file <file>`.";

// Files the .tex pulls in: \usepackage[opts]{a,b} -> a.sty, b.sty; \input{x} -> x.tex
async function requiredTexFiles(): Promise<string[]> {
	const source = (await Bun.file(resumePaths.tex).text()).replace(/(?<!\\)%.*$/gm, "");
	const packages = [...source.matchAll(/\\usepackage(?:\[[^\]]*\])?\{([^}]+)\}/g)].flatMap(([, names]) =>
		names.split(",").map((name) => `${name.trim()}.sty`),
	);
	const inputs = [...source.matchAll(/\\input\{([^}]+)\}/g)].map(([, name]) =>
		name.endsWith(".tex") ? name : `${name}.tex`,
	);
	return [...new Set([...packages, ...inputs])];
}

async function missingTexFiles(): Promise<string[]> {
	const files = await requiredTexFiles();
	// kpsewhich prints the path of each file it finds and skips the rest.
	const found = (await $`kpsewhich ${files}`.nothrow().quiet().text()).split("\n").filter(Boolean);
	return files.filter((file) => !found.some((path) => path.endsWith(`/${file}`)));
}

export async function assertRequirements(): Promise<void> {
	const missingCommands = requiredCommands.filter((command) => Bun.which(command) === null);
	// Without kpsewhich the TeX install is absent, so every package would be reported missing.
	const missingFiles = missingCommands.includes("kpsewhich") ? [] : await missingTexFiles();

	if (missingCommands.length === 0 && missingFiles.length === 0) return;

	const lines = ["Cannot build the resume: some requirements are missing."];
	if (missingCommands.length > 0) lines.push(`  Commands: ${missingCommands.join(", ")}`);
	if (missingFiles.length > 0) lines.push(`  LaTeX files: ${missingFiles.join(", ")}`);
	lines.push("", installHint);

	fail(...lines);
}
