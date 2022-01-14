"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
// import formatter from './formatter';
// import { v4 } from 'uuid';
//Needed for testing
// AWS.config.update({region:'eu-west-2'});
exports.handler = async (event) => {
    // const Name = '/Project/Service/Names';
    const Name = process.env.SSM_NAMES;
    const options = {
        endpoint: process.env.SSM_ENDPOINT
    };
    let response = {};
    // const contextUid:string = v4();
    try {
        console.log(`event: ${JSON.stringify(event)}`);
        const result = await new aws_sdk_1.default.SSM(options).getParameter({ Name }).promise();
        console.log(`new AWS.SSM(options).getParameter({Name}).promise(): ${JSON.stringify(result)}`);
        // response = formatter.formatResponse(200, {statusCode: 200, dataSourceUrls: result.Parameter.Value.split(', ')});
    }
    catch (error) {
        // console.error(`Main function caught error: ${error} for contextUid: ${contextUid}`);
        console.error(`Main function caught error: ${error} for contextUid: 100`);
        // response = formatter.formatError(502, { error })
    }
    console.log(`response: ${JSON.stringify(response)}`);
    return {
        statusCode: 200,
        body: `response: ${Name}`
    };
    // return response;
};
//# sourceMappingURL=app.js.map