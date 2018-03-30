import { FontColorPipePipe } from './font-color-pipe.pipe';

let pipe: FontColorPipePipe;

describe('FontColorPipePipe', () => {
    beforeEach(() => {
        pipe = new FontColorPipePipe();
    })
    describe('FontColorPipe', () => {
        it('create an instance', () => {
            expect(pipe).toBeTruthy();
        });
        it('should return #FFFFFF if passed undefined', () => {
            expect(pipe.transform(undefined)).toBe("#FFFFFF");
        });
        it('should return #FFFFFF if passed null',()=>{
            expect(pipe.transform(null)).toBe("#FFFFFF");
        });
        it('should return #FFFFFF if passed 1',()=>{
            expect(pipe.transform(1)).toBe("#FFFFFF");
        });
        it('should return #FFFFFF if passed ""',()=>{
            expect(pipe.transform("")).toBe("#FFFFFF");
        });
        it('should return #FFFFFF if passed #fffff',()=>{
            expect(pipe.transform("")).toBe("#FFFFFF");
        });
        it('should return #FFFFFF if passed #000000',()=>{
            expect(pipe.transform("")).toBe("#FFFFFF");
        });
        it('should return #000000 if passed #ffffff',()=>{
            expect(pipe.transform("#ffffff")).toBe("#000000");
        });
        it('should return #FFFFFF if passed #7b69df',()=>{
            expect(pipe.transform("#7b69df")).toBe("#FFFFFF");
        });
        it('should return #FFFFFF if passed #00ff00',()=>{
            expect(pipe.transform("#00ff00")).toBe("#FFFFFF");
        });
    });

});
