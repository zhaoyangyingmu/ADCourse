class UserException {
    constructor(errorCode, errorMsg) {
        this._errorCode = errorCode;
        this._errorMsg = errorMsg;
    }
    getErrorCode() {
        return this._errorMsg;
    }
    setErrorCode(errorCode) {
        this._errorCode = errorCode;
    }
    getErrorMsg() {
        return this._errorMsg;
    }
    setErrorMsg(errorMsg) {
        this._errorMsg = errorMsg;
    }
}
export default UserException