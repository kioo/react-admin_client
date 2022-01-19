/**
 * 格式化时间，将Date 类型转换为字符串格式
 * @param {date时间类型} time 
 * @returns 
 */
export function formateDate(time) {
    if (!time) return ''
    let date = new Date(time)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}