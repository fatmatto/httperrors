'use strict'
module.exports = {
  createErrorFromStatusCode: require('./src/createErrorFromStatusCode').createErrorFromStatusCode,
  BadGateway: require('./src/errors/BadGateway').BadGateway,
  BadRequest: require('./src/errors/BadRequest').BadRequest,
  Conflict: require('./src/errors/Conflict').Conflict,
  EntityTooLarge: require('./src/errors/EntityTooLarge').EntityTooLarge,
  ExpectationFailed: require('./src/errors/ExpectationFailed').ExpectationFailed,
  FailedDependency: require('./src/errors/FailedDependency').FailedDependency,
  Forbidden: require('./src/errors/Forbidden').Forbidden,
  GatewayTimeout: require('./src/errors/GatewayTimeout').GatewayTimeout,
  Gone: require('./src/errors/Gone').Gone,
  HTTPError: require('./src/errors/HTTPError').HTTPError,
  HTTPVersionNotSupported: require('./src/errors/HTTPVersionNotSupported').HTTPVersionNotSupported,
  InsufficientStorage: require('./src/errors/InsufficientStorage').InsufficientStorage,
  InternalServerError: require('./src/errors/InternalServerError').InternalServerError,
  LengthRequired: require('./src/errors/LengthRequired').LengthRequired,
  Locked: require('./src/errors/Locked').Locked,
  LoopDetected: require('./src/errors/LoopDetected').LoopDetected,
  MethodNotAllowed: require('./src/errors/MethodNotAllowed').MethodNotAllowed,
  MisdirectedRequest: require('./src/errors/MisdirectedRequest').MisdirectedRequest,
  NetworkAuthenticationRequired: require('./src/errors/NetworkAuthenticationRequired').NetworkAuthenticationRequired,
  NotAcceptable: require('./src/errors/NotAcceptable').NotAcceptable,
  NotExtended: require('./src/errors/NotExtended').NotExtended,
  NotFound: require('./src/errors/NotFound').NotFound,
  NotImplemented: require('./src/errors/NotImplemented').NotImplemented,
  PayloadTooLarge: require('./src/errors/PayloadTooLarge').PayloadTooLarge,
  PaymentRequired: require('./src/errors/PaymentRequired').PaymentRequired,
  PreconditionFailed: require('./src/errors/PreconditionFailed').PreconditionFailed,
  PreconditionRequired: require('./src/errors/PreconditionRequired').PreconditionRequired,
  ProxyAuthenticationRequired: require('./src/errors/ProxyAuthenticationRequired').ProxyAuthenticationRequired,
  RangeNotSatisfiable: require('./src/errors/RangeNotSatisfiable').RangeNotSatisfiable,
  RequestEntityTooLarge: require('./src/errors/RequestEntityTooLarge').RequestEntityTooLarge,
  RequestHeaderFieldsTooLarge: require('./src/errors/RequestHeaderFieldsTooLarge').RequestHeaderFieldsTooLarge,
  RequestTimeout: require('./src/errors/RequestTimeout').RequestTimeout,
  RequestURITooLong: require('./src/errors/RequestURITooLong').RequestURITooLong,
  RequestedRangeNotSatisfiable: require('./src/errors/RequestedRangeNotSatisfiable').RequestedRangeNotSatisfiable,
  ServiceUnavailable: require('./src/errors/ServiceUnavailable').ServiceUnavailable,
  TooEarly: require('./src/errors/TooEarly').TooEarly,
  TooManyRequests: require('./src/errors/TooManyRequests').TooManyRequests,
  URITooLong: require('./src/errors/URITooLong').URITooLong,
  Unauthorized: require('./src/errors/Unauthorized').Unauthorized,
  UnavailableForLegalReasons: require('./src/errors/UnavailableForLegalReasons').UnavailableForLegalReasons,
  UnprocessableEntity: require('./src/errors/UnprocessableEntity').UnprocessableEntity,
  UnsupportedMediaType: require('./src/errors/UnsupportedMediaType').UnsupportedMediaType,
  UpgradeRequired: require('./src/errors/UpgradeRequired').UpgradeRequired,
  VariantAlsoNegotiates: require('./src/errors/VariantAlsoNegotiates').VariantAlsoNegotiates
}
