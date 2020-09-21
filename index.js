'use strict'
module.exports = {
  BadGateway: require('./src/BadGateway').BadGateway,
  BadRequest: require('./src/BadRequest').BadRequest,
  Conflict: require('./src/Conflict').Conflict,
  EntityTooLarge: require('./src/EntityTooLarge').EntityTooLarge,
  ExpectationFailed: require('./src/ExpectationFailed').ExpectationFailed,
  FailedDependency: require('./src/FailedDependency').FailedDependency,
  Forbidden: require('./src/Forbidden').Forbidden,
  GatewayTimeout: require('./src/GatewayTimeout').GatewayTimeout,
  Gone: require('./src/Gone').Gone,
  HTTPError: require('./src/HTTPError').HTTPError,
  HTTPVersionNotSupported: require('./src/HTTPVersionNotSupported').HTTPVersionNotSupported,
  InsufficientStorage: require('./src/InsufficientStorage').InsufficientStorage,
  InternalServerError: require('./src/InternalServerError').InternalServerError,
  LengthRequired: require('./src/LengthRequired').LengthRequired,
  Locked: require('./src/Locked').Locked,
  LoopDetected: require('./src/LoopDetected').LoopDetected,
  MethodNotAllowed: require('./src/MethodNotAllowed').MethodNotAllowed,
  MisdirectedRequest: require('./src/MisdirectedRequest').MisdirectedRequest,
  NetworkAuthenticationRequired: require('./src/NetworkAuthenticationRequired').NetworkAuthenticationRequired,
  NotAcceptable: require('./src/NotAcceptable').NotAcceptable,
  NotExtended: require('./src/NotExtended').NotExtended,
  NotFound: require('./src/NotFound').NotFound,
  NotImplemented: require('./src/NotImplemented').NotImplemented,
  PayloadTooLarge: require('./src/PayloadTooLarge').PayloadTooLarge,
  PaymentRequired: require('./src/PaymentRequired').PaymentRequired,
  PreconditionFailed: require('./src/PreconditionFailed').PreconditionFailed,
  PreconditionRequired: require('./src/PreconditionRequired').PreconditionRequired,
  ProxyAuthenticationRequired: require('./src/ProxyAuthenticationRequired').ProxyAuthenticationRequired,
  RangeNotSatisfiable: require('./src/RangeNotSatisfiable').RangeNotSatisfiable,
  RequestEntityTooLarge: require('./src/RequestEntityTooLarge').RequestEntityTooLarge,
  RequestHeaderFieldsTooLarge: require('./src/RequestHeaderFieldsTooLarge').RequestHeaderFieldsTooLarge,
  RequestTimeout: require('./src/RequestTimeout').RequestTimeout,
  RequestURITooLong: require('./src/RequestURITooLong').RequestURITooLong,
  RequestedRangeNotSatisfiable: require('./src/RequestedRangeNotSatisfiable').RequestedRangeNotSatisfiable,
  ServiceUnavailable: require('./src/ServiceUnavailable').ServiceUnavailable,
  TooEarly: require('./src/TooEarly').TooEarly,
  TooManyRequests: require('./src/TooManyRequests').TooManyRequests,
  URITooLong: require('./src/URITooLong').URITooLong,
  Unauthorized: require('./src/Unauthorized').Unauthorized,
  UnavailableForLegalReasons: require('./src/UnavailableForLegalReasons').UnavailableForLegalReasons,
  UnprocessableEntity: require('./src/UnprocessableEntity').UnprocessableEntity,
  UnsupportedMediaType: require('./src/UnsupportedMediaType').UnsupportedMediaType,
  UpgradeRequired: require('./src/UpgradeRequired').UpgradeRequired,
  VariantAlsoNegotiates: require('./src/VariantAlsoNegotiates').VariantAlsoNegotiates
}
