import CryptoJS from "crypto-js";
// Encryption function with custom key
const  customKeyData='askdjTSUJJSAasdasd'
export const encrypt = (text: string, customKey: string = customKeyData): string => {
    return CryptoJS.AES.encrypt(text, customKey).toString();
};

// Decryption function with custom key
export const decrypt = (encryptedText: string, customKey: string= customKeyData): string => {
    const bytes = CryptoJS.AES.decrypt(encryptedText, customKey);
    return bytes.toString(CryptoJS.enc.Utf8);
};