export default class MainController {
    constructor(securityService, $log) {
        this.message = securityService.getName();
        this.$log = $log;
    }
    logSomething() {
        this.$log.info('Logging something...');
    }
}

MainController.$inject = ['securityService', '$log'];