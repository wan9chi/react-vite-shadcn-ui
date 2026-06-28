import { mkdir, writeFile } from "node:fs/promises";

await mkdir("dist", { recursive: true });
await writeFile("dist/stamp.txt", `built at ${new Date().toISOString()}\n`);
console.log("wrote dist/stamp.txt");
