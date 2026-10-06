import { resumePaths } from "./paths.ts";

export async function hashFile(path: string): Promise<string> {
	return new Bun.CryptoHasher("sha256").update(await Bun.file(path).bytes()).digest("hex");
}

export function hashTex(): Promise<string> {
	return hashFile(resumePaths.tex);
}

export async function readStoredHash(): Promise<string | null> {
	const file = Bun.file(resumePaths.hash);
	return (await file.exists()) ? (await file.text()).trim() : null;
}

export async function writeStoredHash(): Promise<void> {
	await Bun.write(resumePaths.hash, `${await hashTex()}\n`);
}
