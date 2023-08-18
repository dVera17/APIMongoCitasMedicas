export default class ErrorHandler {

    constructor(error) {
        this.errorHandler = error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].description
        this.status = 400
    }

    showMessage() {
        return { status: 400, message: this.errorHandle };
    }

}
