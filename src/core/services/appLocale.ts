export default class AppLocale {
  private static locales: Array<string> = ["en", "ru"];
  private static default: string = "ru";
  static get(): string {
    const urlParts: Array<string> = window.location.href.split("/");
    const urlLocale: string = urlParts[3];
    return (
      this.locales.find(item => {
        return item === urlLocale;
      }) || this.default
    );
  }
}
