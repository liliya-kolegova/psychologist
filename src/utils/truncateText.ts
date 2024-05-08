const truncateText = (text: any, maxLength: any) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + '...'; // Вычитаем 3 для длины многоточия
  } else {
    return text;
  }
}

export default truncateText;