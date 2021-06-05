// This function has the same name as operationId in the OpenAPI document.

exports.getGreeting = function greet(context) {
    const name = context.params.query.name;
    return { message: `Hello ${name}` };
};