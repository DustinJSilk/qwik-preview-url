import { MethodKind } from "@bufbuild/protobuf";
import { SomeFetchRequest, SomeFetchResponse } from "./some_fetch_pb.js";

export const SomeService = {
  typeName: "",
  methods: {
    someFetch: {
      name: "",
      I: SomeFetchRequest,
      O: SomeFetchResponse,
      kind: MethodKind.Unary,
    },
  },
} as const;
