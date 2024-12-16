import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

export class SomeFetchRequest extends Message<SomeFetchRequest> {
  constructor(data?: PartialMessage<SomeFetchRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "...";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SomeFetchRequest {
    return new SomeFetchRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SomeFetchRequest {
    return new SomeFetchRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SomeFetchRequest {
    return new SomeFetchRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: SomeFetchRequest | PlainMessage<SomeFetchRequest> | undefined,
    b: SomeFetchRequest | PlainMessage<SomeFetchRequest> | undefined
  ): boolean {
    return proto3.util.equals(SomeFetchRequest, a, b);
  }
}

export class SomeFetchResponse extends Message<SomeFetchResponse> {
  constructor(data?: PartialMessage<SomeFetchResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "...";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): SomeFetchResponse {
    return new SomeFetchResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): SomeFetchResponse {
    return new SomeFetchResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): SomeFetchResponse {
    return new SomeFetchResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: SomeFetchResponse | PlainMessage<SomeFetchResponse> | undefined,
    b: SomeFetchResponse | PlainMessage<SomeFetchResponse> | undefined
  ): boolean {
    return proto3.util.equals(SomeFetchResponse, a, b);
  }
}
