import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { SomeEnum } from "~/generated/some/v1/enum_pb";
import { createConnectTransport } from "@connectrpc/connect-node";
import { createPromiseClient } from "@connectrpc/connect";
import { SomeService } from "~/generated/some/v1/service_connect";

class Grpc {
  private static transport = createConnectTransport({
    httpVersion: "2",
    baseUrl: "https://www.test.com",
  });

  static service = createPromiseClient(SomeService, this.transport);
}

export const fooServerFunc = server$(async function () {
  await Grpc.service.someFetch({});
});

export default component$(() => {
  useVisibleTask$(() => {
    fooServerFunc();
  });

  return <div>{Math.random() == SomeEnum.A ? 1 : 2}</div>;
});
