export class UtilService {

  private static instance: UtilService;

  private constructor() {
  }

  public static get(): UtilService {
    if (!this.instance) {
      this.instance = new UtilService();
    }
    return this.instance;
  }

  getFormData<T = Record<string, string>>(element: HTMLFormElement|HTMLInputElement|undefined): T {
    if (!element) {
      return {} as T;
    }
    let formElement = element as HTMLFormElement;

    if (element.tagName !== 'FORM') {
      formElement = element.closest('form');
    }

    if (!formElement) return {} as T;

    return Array.from(new FormData(formElement).entries()).reduce((p, c) => {
      p[c[0]] = c[1];
      return p;
    }, {}) as T
  }

}
