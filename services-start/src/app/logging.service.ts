export class LoggingService {
    // We do not use any decorator when we are creating an service, just regular typescript class should do the job
    logStatusChange(status: string){
        console.log('A server status changed, new status: ' + status);
    }
}