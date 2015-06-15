describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
});

describe('Bubble Sort', function(){
    it('handles a single item', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });
});


describe('Bubble Sort', function(){
    it('handles multiple items', function(){
        expect( bubbleSort([3,1,4,2,20,5,9]) ).toEqual( [1,2,3,4,5,9,20] );
    });
});

describe('Merge Sort', function(){
    it('handles an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });
});

describe('Merge Sort', function(){
    it('handles a single item', function(){
        expect( mergeSort([1]) ).toEqual( [1] );
    });
});


describe('Merge Sort', function(){
    it('handles multiple items', function(){
        expect( mergeSort([3,4,1,2,6,5]) ).toEqual( [1,2,3,4,5,6] );
    });
});