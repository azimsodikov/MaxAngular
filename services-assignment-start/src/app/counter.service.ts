import { EventEmitter } from '@angular/core';
export class CounterService {


    activeToInactiveCount = 0
    inactiveToActiveCount = 0

    onActiveToInactiveCount() {
        this.activeToInactiveCount++;
    }
    onInactiveToActive() {
        this.inactiveToActiveCount++;
    }
}