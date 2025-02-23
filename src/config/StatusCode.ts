export enum StatusCode {
  SUCCESS = "00000",
  CUSTOMER_ERROR = "C0000",
  EXISTED_PHONE = "C0001",
  USER_NOT_FOUND = "C0002",
  VALIDATION_ERROR = "C0003",
  SESSION_EXPIRED = "C0004",
  PASSWORD_WRONG = "C0005",

  SYSTEM_ERROR = "S0000",

  THIRD_PARTY_ERROR = "T0000",
  FAIL_TO_SEND_MSG = "T0001",
  UNSOPPORTED_AUTHENTICATION = "T0002",
  SCHOOL_AUTH_FAILED = "T0003",
}
