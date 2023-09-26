import { enCrypto, deCrypto } from './crypto'

enum StorageType {
  l = 'localStorage',
  s = 'sessionStorage'
}

class MyStorage {
  storage: Storage

  constructor(type: StorageType) {
    this.storage = type === StorageType.l ? localStorage : sessionStorage
  }

  set(key: string, value: any, expire: number) {
    const data = JSON.stringify({
      value,
      expire: !expire ? new Date().getTime() + expire * 1000 * 60 * 60 * 24 : null
    })
    this.storage.setItem(key, enCrypto(data))
  }

  get(key: string) {
    const val = this.storage.getItem(key)
    if (!val) return null
    try {
      const data = JSON.parse(deCrypto(val))
      const { value, expire } = data
      if (expire && expire > new Date().getTime()) {
        return value
      }
      this.delete(key)
      return null
    } catch (error) {
      this.delete(key)
      return null
    }
  }

  delete(key: string) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }
}

const LStorage = new MyStorage(StorageType.l)
const SStorage = new MyStorage(StorageType.s)

export { LStorage, SStorage }
