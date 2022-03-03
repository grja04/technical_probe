"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Prueba de serverless 1 actuando",
        input: event,
      },
      null,
      2
    ),
  };
};
