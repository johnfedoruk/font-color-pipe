import { FontColorPipePipe } from './font-color-pipe.pipe';

let pipe: FontColorPipePipe;

describe('FontColorPipePipe', () => {
    beforeEach(()=>{
        pipe = new FontColorPipePipe();
    })
    describe('ContrastPipe', () => {
        it('create an instance', () => {
            expect(pipe).toBeTruthy();
        });
        it('should return #ffffff if passed undefined');
        it('should return #ffffff if passed null');
        it('should return #ffffff if passed 1');
        it('should return #ffffff if passed ""');
        it('should return #ffffff if passed #fffff');
        it('should return #ffffff if passed #000000');
        it('should return #000000 if passed #ffffff');
        it('should return #ffffff if passed wiser #7b69df');
        it('should return #ffffff if passed wiser #00ff00');
    });

});
