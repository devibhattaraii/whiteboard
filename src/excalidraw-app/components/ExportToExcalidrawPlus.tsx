import { getImportedKey, createIV } from "../data";

const encryptData = async (
  key: string,
  json: string,
): Promise<{ blob: Blob; iv: Uint8Array }> => {
  const importedKey = await getImportedKey(key, "encrypt");
  const iv = createIV();
  const encoded = new TextEncoder().encode(json);
  const ciphertext = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv,
    },
    importedKey,
    encoded,
  );

  return { blob: new Blob([new Uint8Array(ciphertext)]), iv };
};
