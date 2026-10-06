export function fail(...lines: string[]): never {
	console.error(lines.join("\n"));
	process.exit(1);
}
