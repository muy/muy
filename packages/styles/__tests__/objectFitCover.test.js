import objectFitCover from "../lib/objectFitCover";

describe('objectFitCover style', () => {
    it('should have objectFit property equal to cover', () => {
        expect(objectFitCover.objectFit).toEqual('cover')
    })
});
