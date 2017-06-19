export const getStyle = (styles, isMobile) =>
  ({ ...styles, ...isMobile ? styles.mobile : styles.desktop });
export const print = console.log;

export default{
  print,
  getStyle,
}
