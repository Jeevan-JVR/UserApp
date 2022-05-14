const Joi = require("joi");

const JoiSchemaObject = {
    login: {
        username: Joi.string().required(),
        password: Joi.string().required()
    }
}

module.exports.validateSchema = async (schema, data) => {
    try {
        await Joi.object(JoiSchemaObject[schema]).validateAsync(data, { abortEarly: false })
    } catch (error) {
        // looping through multiple joi validation errors
        errorObj = {}
        error.details.map(o => { errorObj[o.context.key] = o.message })
        throw new Error('Validation Errors')
    }
}