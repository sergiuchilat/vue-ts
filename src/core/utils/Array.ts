export default class ArrayUtils {
  static arrayDiff(a: any, b: any) {
    return [
      ...a.filter((x: any) => b.indexOf(x) === -1),
      ...b.filter((x: any) => a.indexOf(x) === -1)
    ];
  }
}
