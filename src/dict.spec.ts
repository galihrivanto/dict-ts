import { describe, it } from 'mocha';
import { expect } from 'chai';
import { 
    Dictionary, 
    equal, 
    clone, 
    isSubset,
    merge
} from './dict'

describe('Dictionary matching', function() {
    it('similar dictionaries should be match', function(){
        const dictOne: Dictionary<string> = {};
        const dictTwo: Dictionary<string> = {};
        
        for (let i = 1; i <= 5; i++) {
            dictOne[`key${i}`] = `value${i}`;
            dictTwo[`key${i}`] = `value${i}`;
        }

        expect(equal(dictOne, dictTwo)).to.equal(true);
    })

    it('cloned dictionary should be match', function() {
        const original: Dictionary<string> = {
            'one': 'one',
            'two': 'two'
        }

        const cloned = clone(original);
        
        expect(equal(original, cloned)).to.equal(true);
    })

    it('original dictionary should be subset of extended dictionary', function(){
        const original: Dictionary<string> = {
            'one': 'one',
            'two': 'two'
        }

        const cloned = clone(original);

        // extend
        cloned['three'] = 'three';
        cloned['four'] = 'three';

        expect(equal(original, cloned)).to.equal(false);
        expect(isSubset(original, cloned)).to.equal(true);
    })

    it('original dictionary should be superset of shrank dictionary', function(){
        const original: Dictionary<string> = {
            'one': 'one',
            'two': 'two'
        }

        const cloned = clone(original);

        // remove a key
        delete cloned['two'];

        expect(equal(original, cloned)).to.equal(false);
        expect(isSubset(cloned, original)).to.equal(true);
    })
})

describe('Dictionary merging', function() {
    it('should merge two dictionaries', function() {
        const dict1: Dictionary<string> = {
            'one': 'one',
            'two': 'two'
        };
        const dict2: Dictionary<string> = {
            'three': 'three',
            'four': 'four'
        };

        const merged = merge(dict1, dict2);
        expect(merged).to.deep.equal({
            'one': 'one',
            'two': 'two',
            'three': 'three',
            'four': 'four'
        });
    });

    it('should override values from earlier dictionaries', function() {
        const dict1: Dictionary<string> = {
            'one': 'one',
            'two': 'two'
        };
        const dict2: Dictionary<string> = {
            'two': 'updated_two',
            'three': 'three'
        };

        const merged = merge(dict1, dict2);
        expect(merged).to.deep.equal({
            'one': 'one',
            'two': 'updated_two',
            'three': 'three'
        });
    });

    it('should merge multiple dictionaries', function() {
        const dict1: Dictionary<string> = { 'one': 'one' };
        const dict2: Dictionary<string> = { 'two': 'two' };
        const dict3: Dictionary<string> = { 'three': 'three' };
        const dict4: Dictionary<string> = { 'one': 'updated_one' };

        const merged = merge(dict1, dict2, dict3, dict4);
        expect(merged).to.deep.equal({
            'one': 'updated_one',
            'two': 'two',
            'three': 'three'
        });
    });
});