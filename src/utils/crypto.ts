import CryptoJS from 'crypto-js'

const CryptoSecret = import.meta.env.VITE_SECRET_KEY || 'bluepoch'

/**
 * 加密数据
 * @param data - 数据
 */
export function enCrypto(data: string, secret = CryptoSecret) {
  const newData = JSON.stringify(data)
  return CryptoJS.AES.encrypt(newData, secret).toString()
}

/**
 * 解密数据
 * @param cipherText - 密文
 */
export function deCrypto(cipherText: string | CryptoJS.lib.CipherParams, secret = CryptoSecret) {
  const bytes = CryptoJS.AES.decrypt(cipherText, secret)
  const originalText = bytes.toString(CryptoJS.enc.Utf8)
  if (originalText) return JSON.parse(originalText)

  return null
}

/**
 * MD5
 * @param cipherText - 密文
 */
export function md5Hex(cipherText: string | CryptoJS.lib.WordArray) {
  return CryptoJS.MD5(cipherText).toString()
}
