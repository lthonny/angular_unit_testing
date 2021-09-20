import {CounterComponent} from './counter.component';

describe('CounterComponent', () => {
    let component: CounterComponent;

    beforeEach(() => {
        component = new CounterComponent();
    });
    // beforeAll, afterEach, afterAll

    it('should increment counter by 1', () => {
        component.increment();
        expect(component.counter).toBe(1);
    });

    it('should decrement counter by -1', () => {
        component.decrement();
        expect(component.counter).toBe(-1);
    });

    it('should increment value by event emitter', () => {
        let result = null;
        component.counterEmitter.subscribe(value => result = value);

        component.increment();

        expect(result).toBe(1);
    });

});

