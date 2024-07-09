export class AppException extends Error {
  private errorCode: number;

  public getErrorCode(): number {
    return this.errorCode;
  }

  public constructor(message: string, errorCode: number) {
    super(message);
    this.errorCode = errorCode;
  }
}
