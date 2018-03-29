/* tslint:disable:no-unused-variable */

import { ReversePipe } from "./reverse.pipe"; // This is the isolated tests where we can test code that does not involve Angular
describe('Pipe: ReversePipe', () => { // It is very easy to test pipes or services that just takes input, prcesses it and then outputs it 
  it('should reverse the inputs', () => {
    let reversePipe = new ReversePipe(); // This is the pipe we created to reverse the string
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});
