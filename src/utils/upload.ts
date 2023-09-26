/**
 * @description  API式调用选择文件弹窗
 * @method  chooseImage().then((file) => {})
 * @author DirtyWei
 */

export const chooseFile = (customerOptions: { accept: string; limit: number }) => {
  return new Promise((resolve) => {
    const classNames = ' apiChooseFile '
    //删除前面创建的 input 避免用户取消选择时 input 遗留在 document
    const apiChooseFiles = document.querySelector(`.${classNames}`)
    apiChooseFiles &&
      [apiChooseFiles].forEach((el) => {
        document.body.removeChild(el)
      })
    //创建选择文件的 dom
    const input = document.createElement('input')
    input.type = 'file'
    input.hidden = true
    input.setAttribute('class', classNames)
    input.accept = customerOptions.accept
    customerOptions.limit > 1 && (input.multiple = true)
    document.body.appendChild(input)

    input.click()
    input.onchange = (e: Event) => {
      const eTarget = e.target as HTMLInputElement
      resolve(eTarget.files)
      document.body.removeChild(input)
    }
  })
}

/**
 * @description 选择图片
 * @author DirtyWei
 */
export const chooseImage = (customerOptions = {}) => {
  const options = {
    accept: 'image/*',
    limit: 1
  }
  return chooseFile(Object.assign(options, customerOptions))
}

/**
 * @description  选择表格文件
 * @author DirtyWei
 */
export const chooseTableFile = (customerOptions = {}) => {
  const options = {
    accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel',
    limit: 1
  }
  return chooseFile(Object.assign(options, customerOptions))
}
