import {stringify} from 'query-string';
import {
    fetchUtils,
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    UPDATE_MANY,
    DELETE,
    DELETE_MANY,
} from 'react-admin';

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var pimp_my_json = function (key, datastore) {
    if (Object.prototype.toString.call(datastore[key]) === '[object Array]') {
        for (var key2 in datastore[key]) {
            datastore[key] = pimp_my_json(key2, datastore[key])
        }
    }
    if (Object.prototype.toString.call(datastore[key]) === '[object Object]') {
        for (var key2 in datastore[key]) {
            datastore[key] = pimp_my_json(key2, datastore[key])
        }
    }
    if (key.includes('IPv4')) {
        if (!(Array.isArray(datastore[key]))) {
            var tempString = datastore[key]
            datastore[key] = [tempString]
        }
    }
    if (key.includes('IPv6')) {
        if (!(Array.isArray(datastore[key]))) {
            var tempString = datastore[key]
            datastore[key] = [tempString]
        }
    }

    if (key.includes('hasPart')) {
        if (!(Array.isArray(datastore[key]))) {
            var tempString = datastore[key]
            datastore[key] = [tempString]
        }
    }
    if (key.includes('providesFunction')) {
        if (!(Array.isArray(datastore[key]))) {
            var tempString = datastore[key]
            datastore[key] = [tempString]
        }
    }
    if (key.includes('usesFunction')) {
        if (!(Array.isArray(datastore[key]))) {
            var tempString = datastore[key]
            datastore[key] = [tempString]
        }
    }
    if (key.includes('containsProduct')) {
        if (!(Array.isArray(datastore[key]))) {
            var tempString = datastore[key]
            datastore[key] = [tempString]
        }
    }
    if (key.includes('implementedBy')) {
        if (!(Array.isArray(datastore[key]))) {
            var tempString = datastore[key]
            datastore[key] = [tempString]
        }
    }
    if (key.includes('properties')) {
        if (!(Array.isArray(datastore[key]))) {
            var tempString = datastore[key]
            datastore[key] = [tempString]
        }
    }
    if (key.includes('consumer')) {
        if (!(Array.isArray(datastore[key]))) {
            var tempString = datastore[key]
            datastore[key] = [tempString]
        }
    }
    if (key.includes('http://schema.d3.example.org')) {
        var y = key.replace("http://schema.d3.example.org", "").replace(/\//g, "_");
        datastore[y] = datastore[key]
        delete datastore[key]
    }
    return datastore;
};

/**
 * Maps react-admin queries to a json-server powered REST API
 *
 * @see https://github.com/typicode/json-server
 * @example
 * GET_LIST     => GET http://my.api.url/posts?_sort=title&_order=ASC&_start=0&_end=24
 * GET_ONE      => GET http://my.api.url/posts/123
 * GET_MANY     => GET http://my.api.url/posts/123, GET http://my.api.url/posts/456, GET http://my.api.url/posts/789
 * UPDATE       => PUT http://my.api.url/posts/123
 * CREATE       => POST http://my.api.url/posts/123
 * DELETE       => DELETE http://my.api.url/posts/123
 */
export default (function (apiUrl, httpClient) {
    if (httpClient === void 0) {
        httpClient = fetchUtils.fetchJson;
    }
    /**
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The data request params, depending on the type
     * @returns {Object} { url, options } The HTTP request parameters
     */
    var convertDataRequestToHTTP = function (type, resource, params) {
        var _a;
        var url = '';
        var options = {};
        switch (type) {
            case GET_LIST: {
                var _b = params.pagination, page = _b.page, perPage = _b.perPage;
                var _c = params.sort, field = _c.field, order = _c.order;
                var query = __assign({}, fetchUtils.flattenObject(params.filter), {
                    sort: field,
                    order: order,
                    start: (page - 1) * perPage,
                    end: page * perPage
                });
                url = apiUrl + "/" + resource + "?" + stringify(query);
                break;
            }
            case GET_ONE:
                var query = {
                    compact: "http://context.d3.example.org/base.jsonld"
                };
                url = params.id + "?" + stringify(query);
                break;
            case GET_MANY_REFERENCE: {
                var _d = params.pagination, page = _d.page, perPage = _d.perPage;
                var _e = params.sort, field = _e.field, order = _e.order;
                if ((Array.isArray(params.id)) && (params.id.length == 0)) {
                    params.id = null
                }
                var query = __assign({}, fetchUtils.flattenObject(params.filter), (_a = {},
                    _a.compact = "http://context.d3.example.org/base.jsonld",
                    _a.sort = field,
                    _a.order = order,
                    _a.start = (page - 1) * perPage,
                    _a.end = page * perPage, _a));
                url = apiUrl + "/" + resource + "?" + stringify(query);
                options.method = 'POST';
                options.body = JSON.stringify({'id': params.id});
                break;
            }
            case UPDATE:
                url = apiUrl + "/" + resource + "/" + params.id;
                options.method = 'PUT';
                options.body = JSON.stringify(params.data);
                break;
            case CREATE:
                url = apiUrl + "/" + resource;
                options.method = 'POST';
                options.body = JSON.stringify(params.data);
                break;
            case DELETE:
                url = apiUrl + "/" + resource + "/" + params.id;
                options.method = 'DELETE';
                break;
            case GET_MANY: {
                var query = {
                    id: params.ids,
                    order: "ASC",
                    sort: "name",
                    compact: "http://context.d3.example.org/base.jsonld"
                };
                url = apiUrl + "/" + resource + "?" + stringify(query);
                break;
            }
            default:
                throw new Error("Unsupported fetch action type " + type);
        }
        return {url: url, options: options};
    };
    /**
     * @param {Object} response HTTP response from fetch()
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The data request params, depending on the type
     * @returns {Object} Data response
     */
    var convertHTTPResponse = function (response, type, resource, params) {
        var headers = response.headers, json = response.json;
        if (Array.isArray(json)) {
            json.map(elem => (elem['id'] = elem['@id']));
            json.map(elem => (elem['Title'] = elem['name']));
        } else {
            json['id'] = json['@id'];
            json['Title'] = json['name'];
        }
        switch (type) {
            case GET_LIST:
            case GET_MANY_REFERENCE:
                if (!headers.has('x-total-count')) {
                    throw new Error('The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?');
                }
                if (Array.isArray(json)) {
                    for (y in json) {
                        for (var x in y) {
                            if (x.includes('http://schema.d3.example.org')) {
                                var y = x.replace("http://schema.d3.example.org", "").replace(/\//g, "_");
                                json[y] = json[x]
                                delete json[x]
                            }
                        }
                    }
                    var my_json = json;
                } else {
                    for (var x in json) {
                        if (x.includes('http://schema.d3.example.org')) {
                            var y = x.replace("http://schema.d3.example.org", "").replace(/\//g, "_");
                            json[y] = json[x]
                            delete json[x]
                        }
                    }
                    var my_json = [json];
                }
                var ret_obj = {
                    data: my_json,
                    total: parseInt(headers
                        .get('x-total-count')
                        .split('/')
                        .pop(), 10),
                };
            {
            }
                return ret_obj;
            case GET_MANY:
                if (!headers.has('x-total-count')) {
                    throw new Error('The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?');
                }
                if (Array.isArray(json)) {
                    var my_json = json;
                } else {
                    var my_json = [json];
                }
                var ret_obj = {
                    data: my_json,
                };
                return ret_obj;
            case GET_ONE:
                json['id'] = json['@id'];
                json['Title'] = json['name'];
                for (var x in json) {
                    json = pimp_my_json(x, json)
                }
                return {data: json};
            case CREATE:
                return {data: __assign({}, params.data, {id: json.id})};
            case DELETE_MANY:
                return {data: json || []};
            default: {
                alert("ddd default???")
            }
                return {data: json};
        }
    };
    /**
     * @param {string} type Request type, e.g GET_LIST
     * @param {string} resource Resource name, e.g. "posts"
     * @param {Object} payload Request parameters. Depends on the request type
     * @returns {Promise} the Promise for a data response
     */
    return function (type, resource, params) {
        if (type === UPDATE_MANY) {
            return Promise.all(params.ids.map(function (id) {
                return httpClient(apiUrl + "/" + resource + "/" + id, {
                    method: 'PUT',
                    body: JSON.stringify(params.data),
                });
            })).then(function (responses) {
                return ({
                    data: responses.map(function (response) {
                        return response.json;
                    }),
                });
            });
        }
        if (type === DELETE_MANY) {
            return Promise.all(params.ids.map(function (id) {
                return httpClient(apiUrl + "/" + resource + "/" + id, {
                    method: 'DELETE',
                });
            })).then(function (responses) {
                return ({
                    data: responses.map(function (response) {
                        return response.json;
                    }),
                });
            });
        }
        var _a = convertDataRequestToHTTP(type, resource, params), url = _a.url, options = _a.options;
        return httpClient(url, options).then(function (response) {
            return convertHTTPResponse(response, type, resource, params);
        });
    };
});
