"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
* CLASS :: Used For Connect Node Js Server.
* @appeal Please, Write Comments On Every Major Changes Or Feature.
*/
const express_1 = __importDefault(require("express"));
class nodeServer {
    /**
     * @private   Section For Declare Private Variables.
     * @_configs  Object @host  @port @username @password @title : {title will represents instance Name}
     * @_server    Any Type Of Variable That Contains Express Server Instance
     * @_app       Application Type Of Variable That Contains Express Server Instance
     */
    _configs;
    _server;
    _app;
    /**
    * @method    constructor to set configuration On Create Object
    * @param     Object Type Postgress configs
    * @return    Object With Status And Message
    *
    */
    constructor(configs) {
        this._configs = configs;
    }
    /**
    * @method    initiateConnection Is Responsible For Initilize Connection
    * @param     Object Type Postgress this._configs
    * @return    Object With Status And Message
    *
    */
    initiateConnection() {
        this._app = (0, express_1.default)();
        /* Checking Default Configs */
        let hasHost = "host" in this._configs;
        let hasPort = "port" in this._configs;
        let hasUsername = "username" in this._configs;
        let hasPassword = "password" in this._configs;
        let hasTitle = "title" in this._configs;
        /* Setting Values In Private Vaiables */
        this._configs.host = hasHost ? this._configs.host : "127.0.0.1";
        this._configs.port = hasPort ? this._configs.port : "8080";
        this._configs.username = hasUsername ? this._configs.username : "";
        this._configs.password = hasPassword ? this._configs.password : "";
        this._configs.title = hasTitle ? this._configs.title : "";
        this._server = this._app.listen(this._configs.port, () => {
            console.log(`${this._configs.title} Server is running on http://${this._configs.host}:${this._configs.port} :)`);
        });
        return this._app;
    }
    /**
    * @method    getConnection Is Responsible For Getter Connection Information
    * @return    Object Of Configuration
    *
    */
    getConnectionInfos() {
        return this._configs;
    }
    /**
    * @method    abortConnection Is Responsible For Initilize Connection
    * @param     Object Type Postgress this._configs
    * @return    Object With Status And Message
    *
    */
    async abortConnection() {
        this._server.close(() => {
            console.warn(`Your ${this._configs.title} Instance Has Been Aborted!`);
        });
    }
}
exports.default = nodeServer;
