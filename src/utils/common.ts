/*隐藏身份证中间11位*/
export const omitID = (str: string) => {
  const new_str = str.substring(0, 3) + '******' + str.slice(12)
  return new_str
}

/*省略手机号码中间4位*/
export const omitPhone = (str: string | number) => {
  const str1 = str.toString().substring(0, 3) + '****' + str.toString().slice(7)
  return str1
}

/*隐藏姓名，电话或者身份证中间几位*/
export const hidden = (str: string, frontLen: number, endLen: number) => {
  const len = str.length - frontLen - endLen
  let xing = ''
  for (let i = 0; i < len; i++) {
    xing += '*'
  }
  return str.substring(0, frontLen) + xing + str.substring(str.length - endLen)
}
