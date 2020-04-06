/**
 * @fileoverview gRPC-Web generated client stub for grpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */


const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.grpc = require('./Service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc.SalaryLoanServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc.SalaryLoanServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc.SalaryLoan,
 *   !proto.grpc.SalaryLoan>}
 */
const methodDescriptor_SalaryLoanService_create = new grpc.web.MethodDescriptor(
  '/grpc.SalaryLoanService/create',
  grpc.web.MethodType.UNARY,
  proto.grpc.SalaryLoan,
  proto.grpc.SalaryLoan,
  /**
   * @param {!proto.grpc.SalaryLoan} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.SalaryLoan.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc.SalaryLoan,
 *   !proto.grpc.SalaryLoan>}
 */
const methodInfo_SalaryLoanService_create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.SalaryLoan,
  /**
   * @param {!proto.grpc.SalaryLoan} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.SalaryLoan.deserializeBinary
);


/**
 * @param {!proto.grpc.SalaryLoan} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.SalaryLoan)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.SalaryLoan>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.SalaryLoanServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.SalaryLoanService/create',
      request,
      metadata || {},
      methodDescriptor_SalaryLoanService_create,
      callback);
};


/**
 * @param {!proto.grpc.SalaryLoan} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.SalaryLoan>}
 *     A native promise that resolves to the response
 */
proto.grpc.SalaryLoanServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc.SalaryLoanService/create',
      request,
      metadata || {},
      methodDescriptor_SalaryLoanService_create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.grpc.SalaryLoanList>}
 */
const methodDescriptor_SalaryLoanService_findAll = new grpc.web.MethodDescriptor(
  '/grpc.SalaryLoanService/findAll',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.grpc.SalaryLoanList,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.SalaryLoanList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.grpc.SalaryLoanList>}
 */
const methodInfo_SalaryLoanService_findAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.SalaryLoanList,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.SalaryLoanList.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.SalaryLoanList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.SalaryLoanList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.SalaryLoanServiceClient.prototype.findAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.SalaryLoanService/findAll',
      request,
      metadata || {},
      methodDescriptor_SalaryLoanService_findAll,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.SalaryLoanList>}
 *     A native promise that resolves to the response
 */
proto.grpc.SalaryLoanServicePromiseClient.prototype.findAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc.SalaryLoanService/findAll',
      request,
      metadata || {},
      methodDescriptor_SalaryLoanService_findAll);
};


module.exports = proto.grpc;

