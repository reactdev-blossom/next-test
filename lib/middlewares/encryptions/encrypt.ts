import bcrypt from "bcrypt";


class EncryptionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EncryptionError";
  }
}


export const encrypt = async ({
  plainPass,
}: {
  plainPass: string;
}): Promise<string> => {
  try {
    const saltRounds = 12;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(plainPass, salt);
    return hash;
  } catch (error) {
    console.error("Error encrypting password:", error);
    throw new EncryptionError("Failed to encrypt password");
  }
};

export const match = async ({
  hash,
  plainPass,
}: {
  hash: string;
  plainPass: string;
}): Promise<boolean> => {
  try {
    const isMatch = await bcrypt.compare(plainPass, hash);
    return isMatch;
  } catch (error) {
    console.error("Error matching password:", error);
    throw new EncryptionError("Failed to compare passwords");
  }
};
