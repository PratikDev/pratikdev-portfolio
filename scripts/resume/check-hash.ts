import { hashTex, readStoredHash } from "./hash.ts";

const [stored, current] = await Promise.all([readStoredHash(), hashTex()]);

if (stored !== current) {
	console.error(
		`resume.tex changed without rebuilding the resume (stored: ${stored ?? "missing"}, current: ${current}).\n` +
			"Run `bun run resume` and commit the regenerated files.",
	);
	process.exit(1);
}

console.log("Resume hash is up to date.");
