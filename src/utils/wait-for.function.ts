export class WaitForPromise extends Promise<void> {
  constructor(
    executor: (resolve: (value: void | PromiseLike<void>) => void, reject: (reason?: any) => void) => void,
    private cancelCb: () => void
  ) {
    super(executor);
  }

  public cancel(): void {
    this.cancelCb();
  }
};

export function waitFor(ms: number): WaitForPromise {
  let timeoutId: number;
  return new WaitForPromise(
    resolve => timeoutId = setTimeout(resolve, ms),
    () => clearTimeout(timeoutId)
  );
}