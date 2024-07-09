import type { MessagePublisher } from "../bondaries/message-publisher";

type Input = {
  channel: string;
  url: string;
};

export class PublishNFEUseCase {
  public constructor(readonly messagePublisher: MessagePublisher) {}

  public async execute({ channel, url }: Input): Promise<void> {
    const message = JSON.stringify({ url });
    await this.messagePublisher.send(channel, message);
  }
}
