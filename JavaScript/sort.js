/**
 * Created by Susie on 7/17/2017.
 */
var selectionSort = function(arr) {
    for (var i = 0, len = arr.length; i<len; i++) {
        var minIndex = i;
        var innerCount = i;
        while (innerCount < len) {
            if (arr[innerCount] < arr[minIndex]) minIndex = innerCount;
            innerCount++;
        }
        arr = exchange(arr, i, minIndex);
    }
    return arr;
};
var insertionSort = function(arr) {
//efficient for partially sorted array
    for (var i= 1, len=arr.length; i<len; i++) {
        var innerCount = i;
        //for insertion sort algorithm, it needs to scan from
        //the end to the start
        while (innerCount >0) {
            if (arr[innerCount] < arr[innerCount-1]) {
                exchange(arr, innerCount, innerCount-1);
            }
            innerCount--;
        }
    }
    return arr;
};
var bubbleSort = function(arr) {
    for(var i=arr.length; i>0; i--) {
        var innerCount =0;
        while (innerCount <i-1) {
            if (arr[innerCount]>arr[innerCount+1]) exchange(arr, innerCount, innerCount+1);
            innerCount++;
        }
    }
    return arr;
};
var shellSort = function(arr) {
    var len = arr.length;
    var h = 1;
    while(h<(len-len%3)/3) h = h*3+1;
    while(h>=1) {
        for (var i = h; i<len; i++) {
            for (var j=i; j>=h && arr[j]<arr[j-h]; j-=h){
                exchange(arr, j, j-h);
            }
        }
        h = (h-h%3)/3;
    }
    return arr;
};
var exchange = function(arr, x, y) {
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
    return arr;
};

console.log(shellSort([5,5,2,6,1,8,3,-1,-2,1,0,11]));
