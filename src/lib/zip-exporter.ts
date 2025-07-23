import JSZip from "jszip";
import { saveAs } from "file-saver";

export async function generateZip(files: Record<string, string>) {
  const zip = new JSZip();
  for (const [filename, content] of Object.entries(files)) {
    zip.file(filename, content);
  }
  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, "code-export.zip");
} 