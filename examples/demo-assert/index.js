const assert = require('assert').strict;

describe('ok',()=>{
    it('should be ok', ()=>{
        assert.ok(true);
    })

    it('should not equal', ()=>{
        assert.ok(typeof 123 == 'number');
    });

    it('wrong value', async ()=>{
        await assert.rejects(
            async ()=>{
                throw new TypeError('Wrong value');
            },
            {
                name: 'TypeError',
                message: 'Wrong value'
            }
        )
    })

    it('has hasOwnProperty', ()=>{
        let t = {
            1: 22
        };
        assert.ok(t.hasOwnProperty('1'))
    })
});
