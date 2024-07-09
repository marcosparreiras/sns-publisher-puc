import { AppException } from "./app-exceptions";

export class SNSPublishException extends AppException {
  public constructor() {
    super("SNS Message publish fail", 500);
  }
}
