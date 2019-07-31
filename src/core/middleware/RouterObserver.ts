export default class RouterObserver {
  public static needWidget (widget:string, router: any): boolean {
    return router.meta.widgets && router.meta.widgets[widget];
  }
}