// 隐藏手机号中间4位
function hidePhone(number) {
  return number.replace(/^(\d{4})\d{4}(\d+)/, '$1****$2');
}

export default { hidePhone };
