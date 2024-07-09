import request from "supertest";
import { app } from "../app";

describe("POST /prices", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("Should be able to publish a url to a sns service", async () => {
    const payload = {
      url: "https://portalsped.fazenda.mg.gov.br/portalnfce/sistema/qrcode.xhtml?p=31240600070509003045652060001144891337638029%7C2%7C1%7C1%7C57332DDE93D7E7F7AA49BF32BE6A6D2C88976EBE",
    };
    const response = await request(app.server)
      .post("/publish-url")
      .send(payload);
    console.log(response.body);

    expect(response.status).toEqual(201);
  });

  it("Should be able to detect invalid url", async () => {
    const payload = {
      url: "some-invalid-url",
    };
    const response = await request(app.server)
      .post("/publish-url")
      .send(payload);
    expect(response.status).toEqual(400);
  });

  it("Should not be able to proccess a payload without url", async () => {
    const payload = {};
    const response = await request(app.server)
      .post("/publish-url")
      .send(payload);
    expect(response.status).toEqual(400);
  });
});
