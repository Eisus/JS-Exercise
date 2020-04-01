/**
 * Created by Susie on 5/17/2017.
 */
var hammingDistance = function(x,y) {
    var max = Math.max(x,y);
    var min = Math.min(x,y);
    max = max.toString(2);
    min = min.toString(2);
    var count = 0;
    for(var i=0; i<max.length; i++) {
        if (i<min.length) {
            if (max.charAt(max.length-i-1) ^ min.charAt(min.length-i-1) ==1 )count++;
        }else {
            if (max.charAt(max.length-i-1) ^ 0 ==1 ) count++;
        }
    }
    return count;
};
var hammingDistance2 = function(x,y) {
    var result = (x^y).toString(2).split('');
    var count=0;
    for(var i= 0, len=result.length; i<len; i++) {
        if(result[i] == 1) count++;
    }
    return count;
};

//leetcode 561
var arrayPairSum = function(nums) {
    nums.sort(function(a,b){return a-b;});
    //the sort function in js is according to ascii, in order to
    //make it work well, it should be re-defined
    var result=0;
    for(var i= 0, len=nums.length-1; i<len; i+=2) {
        result += Math.min(nums[i], nums[i+1]);
    }
    return result;
};

var moveZeroes = function(nums) {
    var len = nums.length;
    var zeroPos = -1;
    for (var i = 0; i<len; i++) {
        if (nums[i] == 0 && zeroPos==-1) {
            zeroPos = i;
        } else if (nums[i]!=0) {
            if (zeroPos!=-1) {
                var temp = nums[i];
                nums[i] = 0;
                nums[zeroPos] = temp;
                zeroPos +=1;
            }
        }
    }
};
var moveZeroes2 = function(nums) {
    //From solutions
    var len = nums.length;
    if (nums === null || nums.length==0) return;
    var innerPos = 0;
    for (var i = 0; i<len; i++) {
        if(nums[i]!=0) nums[innerPos++]=nums[i];
    }
    while(innerPos<nums.length) nums[innerPos++] =0;
    console.log(nums);
};

//leetcode 27
var removeElement = function(nums, val) {
    var elementPos, len, count, temp;
    len = nums.length;
    elementPos = len-1;
    count =0;
    for(var i=0; i<len; i++) {
        if(nums[i] === val && i<=elementPos) {
            while (nums[elementPos] === val && elementPos>=i) {
                elementPos-=1;
                count++;
            }
            if (elementPos<i) break;
            temp = nums[elementPos];
            nums[elementPos] = nums[i];
            nums[i] = temp;
            elementPos -= 1;
            count++;
        }
    }
    nums.length = len-count;
    console.log(nums,count);
    return count;
};
var removeElement2 = function(nums, val){
    if(nums == null || nums.length == 0) return;
    var innerPos=0;
    for(var i= 0, len = nums.length; i<len; i++) {
        if(nums[i] != val) nums[innerPos++]=nums[i];
    }
    nums.length=innerPos;
};

//leetcode 203
var removeElements = function(head, val) {
    if (head == null) return null;
    head.next = removeElements(head.next,val);
    return head.val == val? head.next:head;
};

//leetcode 26
var removeDuplicate = function(nums) {
    var count, temp, pos, len;
    len = nums.length;
    pos = -1;
    count = 0;
    temp = nums[0];
    for(var i=1; i<len; i++) {
        if (nums[i] === temp) {
            if(pos == -1) pos = i;
            count++;
        } else if(nums[i]!=temp) {
            temp = nums[i];
            if(count!=0) {
                var tempNum = nums[i];
                nums[i] = nums[pos];
                nums[pos] = tempNum;
                pos++;
            }
        }
    }
    nums.length = len-count;
};
var removeDuplicate2 = function(nums){
    if (nums == null || nums.length==0) return;
    var len = nums.length;
    var temp = nums[0];
    var innerPos = 1;
    for(var i=1; i<len; i++) {
        if (nums[i] != temp) {
            temp=nums[i];
            nums[innerPos++]=nums[i];
        }
    }
    nums.length = innerPos;
};
var removeDuplicate3 = function(nums) {
    if (nums == null || nums.length == 0) return;
    var innerPos=1;
    for (var i= 1, len=nums.length; i<len; i++) {
        if (nums[i] != nums[i-1]) nums[innerPos++] = nums[i];
    }
    nums.length = innerPos;

};

//leetcode 80
var removeDuplicates = function(nums) {
    if(nums == null || nums.length ==0) return;
    var temp = {val: nums[0], count: 1 };
    var innerPos = 1;
    for (var i= 1, len=nums.length; i<len; i++) {
        if (nums[i] != temp.val) {
            nums[innerPos++] = nums[i];
            temp.val = nums[i];
            temp.count = 1;
        } else if (temp.count<2) {
            nums [innerPos++] = nums[i];
            temp.count++;
        }
    }
    nums.length = innerPos;
};
var removeDuplicates2 = function(nums) {
    //From solution
    var count = 0;
    for (var i= 0, len = nums.length; i<len; i++ ) {
        if(count<2 || nums[i]>nums[count-2]) nums[count++] = nums[i];
    }
    nums.length = count;
};

//leetcode 237
var deleteNode = function(node){
    node.val = node.next.val;
    node.next = node.next.next;
};

//leetcode 344
var reverseString = function(s) {
    var arr = s.split('');
    var innerPos = arr.length-1;
    var i = 0;
    var temp;
    while(i<innerPos) {
        temp = arr[i];
        arr[i++] = arr[innerPos];
        arr[innerPos--] = temp;
    }
    s = arr.join("");
    return s;
};
var reverseString2 = function(s) {
    return s.split("").reverse().join("");
};

//leetcode 541
var reverseStr = function(s,k) {
    var arr = s.split("");
    var innerPos;
    for(var i = 0,len= s.length; i<len; i++) {
        innerPos = len-i<k? len-1:i+k-1;
        var count = i;
        while (count<innerPos) {
            var temp = arr[count];
            arr[count++] = arr[innerPos];
            arr[innerPos--] = temp;
        }
        i+=2*k-1;
    }
    s = arr.join('');
    return s;
};
//leetcode 557
var reverseWords = function(s) {
    var arr = s.split(' ');
    for (var i= 0,len=arr.length; i<len; i++) {
        var innerPos = i+arr[i].length-1;
        var tempArr = arr[i].split('');
        var count =0;
        while (count<innerPos) {
            var temp = tempArr[count];
            tempArr[count++] = tempArr[innerPos];
            tempArr[innerPos--] = temp;
        }
        arr[i] = tempArr.join('');
    }
    s = arr.join(' ');
    return s;
};
var reverseWords2 = function(s) {
    var arr = s.split(' ');
    for (var i= 0,len=arr.length; i<len; i++) {
        arr[i] = arr[i].split('').reverse().join('');
    }
    s = arr.join(" ");
    return s;

};

//leetcode 3
var lengthOfLongestSubstring = function(s) {
    var arr = s.split('');
    var maxArr = [];
    var maxLen = 0;
    for (var i= 0, len=arr.length; i<len; i++) {
        var index = maxArr.indexOf(arr[i]);
        if (index == -1) {
            maxArr.push(arr[i]);
        }
        else {
            maxArr.splice(0, index+1);
            maxArr.push(arr[i]);
        }
        if (maxArr.length > maxLen) maxLen = maxArr.length;
    }
    return maxLen;
};
//leetcode 581
var findUnsortedSubarray = function(nums) {
    var startPos=-2, endPos=-1, max = nums[0], len=nums.length, min = nums[len-1];
    for (var i= 1; i<len; i++) {
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[len-i-1]);
        if(nums[i]<max) endPos=i;
        if(nums[len-i-1]>min) startPos=len-i-1;
    }
    return (endPos-startPos-1);
};

//leetcode 66
var plusOne = function(digits) {
    var carry = 0;
    digits[digits.length-1]+=1;
    for (var i=digits.length-1; i>-1; i--) {
        digits[i] += carry;
        if (digits[i] > 9) {
            carry = 1;
            digits[i] -= 10;
        } else carry = 0;
    }
    if (carry == 1) digits.unshift(1);
    return digits;
};

//leetcode 1
var twoSum = function(nums, target) {
    for(var i= 0, len=nums.length; i<len; i++) {
        var left = target - nums[i];
        for (var innerCount = i+1; innerCount<len; innerCount++) {
            if (nums[innerCount] ==left) return [i,innerCount];
        }
    }
};
var twoSum2 = function(nums, target) {
    var arr = {};
    for (var i= 0, len=nums.length; i<len; i++) {
        if ((target-nums[i]) in arr) {
            return [arr[target-nums[i]], i];
        }
        arr[nums[i]] = i;
    }
};

//leetcode 167
var twoSumSort = function(numbers, target) {
    var endPos = numbers.length-1;
    for(var i= 0, len=numbers.length; i<len; i++) {
        var left = target - numbers[i];
        while(i<endPos && left<=numbers[endPos]) {
            if (numbers[endPos] == left) return [i+1, endPos+1];
            endPos-=1;
        }
    }
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

//leetcode 7
var reverse = function(x) {
    if (x>Math.pow(2,31)-1 || (x+Math.pow(2,31))<0) return 0;
    var str = x.toString().split("");
    if (x>=0) return Number(str.reverse().join(""));
    else {
        return Number(('-'+ str.reverse().splice(0,str.length-1).join("")));
    }
};

var changeIntoMoney = function(num) {
    var arr = num.toString().split('');
    var left = arr.length%3;
    if (num<100) return '$'+num;
    for (var i=0; i<arr.length; i++) {
        if (left) {
            arr.splice(left, 0, ',');
            i = left +i +1 ;
            left = 0;
        } else {
            if(i+3 != arr.length)
                arr.splice(i+3, 0, ',');
            i = i+3;
        }
    }
    return '$' + arr.join('');
};
//leetcode 476
var findComplement = function(num) {
    var arr = num.toString(2).split('');
    for (var i= 0, len=arr.length; i<len; i++) {
        arr[i] = arr[i]==='0'? '1':'0';
    }
    return parseInt(arr.join(''),2);
};
var binarize= function(num) {
    var binaryArr = [];
    if (num===0) return 0;
    while (num != 1) {
        binaryArr.push(num%2);
        num = (num - num%2)/2;
    }
    if (num===1) binaryArr.push(1);
    return binaryArr.reverse().join('');
};

//leetcode 389
var findTheDifference = function(s,t) {
    s = s.split('').sort();
    t = t.split('').sort();
    for (var i= 0, len = s.length; i<len; i++) {
        if(s[i] !== t[i]) return t[i];
    }
    return t[len];
};

//leetcode 575
var distributeCandies = function(candies) {
    candies.sort(function(a,b) {return a-b});
    console.log(candies);
    var temp = candies[0];
    var typeNum = 1;
    for (var i = 1, len=candies.length; i<len && typeNum<len/2  ; i++) {
        if (candies[i] != temp) {
            typeNum++;
            temp = candies[i];
        }
    }
    if (len/2>=typeNum) return typeNum;
    return len/2;
};

//leetcode 500
var findWords = function(words) {
    //after the first submit, adjust the order of the search, find the
    //first character of a word in r3 at first, followed y r2 and r1
    //depending on the number of characters it contains separately.
    var row = {
        'r1': ['q','w','e','r','t','y','u','i','o','p' ],
        'r2': ['a','s','d','f','g','h','j','k','l'],
        'r3': ['z','x','c','v','b','n','m']
    };
    var result = [];
    for (var i= 0, len=words.length; i<len; i++) {
        var rowNum;
        var flag = true;
        var char = words[i].charAt(0).toLowerCase();
        if (row['r3'].indexOf(char) != -1) rowNum ='r3';
        else if (row['r2'].indexOf(char) != -1) rowNum='r2';
        else rowNum='r1';
        for (var m= 1, strLen=words[i].length; m<strLen; m++) {
            if (row[rowNum].indexOf(words[i].charAt(m).toLowerCase()) === -1) {
                flag = false;
                break;
            }
        }
        if (flag) result.push(words[i]);
    }
    return result;
};

//leetcode 566
var matrixReshape = function(nums, r, c) {
    var newMatrix = [];
    //note how to define a 2d array
    for (var x=0; x<r; x++) {newMatrix[x] =[];}
    var colNum = nums[0].length;
    var rowNum = nums.length;
    if (colNum * rowNum !== r*c) return nums;
    for (var i= 0; i<rowNum; i++) {
        for (var m=0; m<colNum; m++) {
            newMatrix[(i*colNum+m-(i*colNum+m)%c)/c][(i*colNum+m)%c] = nums[i][m];
        }
    }
    return newMatrix;
};

//leetcode 412
var fizzBuzz = function(n) {
    var arr=[];
    for (var i= 1; i<=n; i++) {
        var three = i%3;
        var five = i%5;
        if (three === 0) {
            if (five ===0) arr.push('FizzBuzz');
            else arr.push('Fizz');
        } else {
            if (five === 0) arr.push('Buzz');
            else arr.push(i.toString());
        }
    }
    return arr;
};

//leetcode 409
var longestPalindrome = function(s) {
    var arr = s.split('');
    var numCount = {};
    for (var i= 0, len= arr.length; i<len; i++) {
        if (arr[i] in numCount) numCount[arr[i]]++;
        else numCount[arr[i]] = 1;
    }
    var totalCount = 0;
    var countArr = [];
    for (var x in numCount) {
        if (numCount[x]%2 == 0) {
            totalCount += numCount[x];
        } else  {
            countArr.push(numCount[x]);
        }
    }
    if (countArr.length) {
        countArr.sort(function(a,b){return a-b});
        for (var y = 0, len2 = countArr.length; y<len2-1; y++) {
            totalCount += (countArr[y]-1)
        }
        totalCount += countArr[len2-1];
    }
    return totalCount;

};
var longestPalindrome2 = function(s) {
    var arr = s.split('');
    var numCount = {};
    for (var i= 0, len= arr.length; i<len; i++) {
        if (arr[i] in numCount) numCount[arr[i]]++;
        else numCount[arr[i]] = 1;
    }
    var totalCount = 0;
    var countOdd = 0;
    for (var x in numCount) {
        if (numCount[x]%2!=0) countOdd++;
        totalCount += numCount[x];
    }
    if (countOdd) totalCount -= (countOdd-1);
    return totalCount;
};

//leetcode 506
var findRelativeRanks = function(nums) {
    var obj={};
    for (var i= 0, len=nums.length; i<len; i++) {
        obj[nums[i]] = i;
    }
    nums.sort(function(a,b){return b-a;});
    var str = [];
    for (var m=0; m<len; m++) {
        var temp;
        if (m === 0) temp = 'Gold Medal';
        else if (m === 1) temp = 'Silver Medal';
        else if (m === 2) temp = 'Bronze Medal';
        else temp = m + 1;
        str[obj[nums[m]]] = temp.toString();
    }
    return str;
};
var findRelativeRanks2 = function(nums) {
    var sortnums = nums.slice(0);
    sortnums.sort(function(a,b) {return b-a;});
    var str = [];
    for (var i= 0, len=nums.length; i<len; i++) {
        var temp;
        if (i === 0) temp = "Gold Medal";
        else if(i === 1) temp = 'Silver Medal';
        else if(i === 2) temp ='Bronze Medal';
        else temp = (i+1).toString();
        str[nums.indexOf(sortnums[i])] = temp;
    }
    return str;
};

//leetcode 387
var firstUniqChar = function(s) {
    var arr = s.split('');
    var occur = [];
    var uniq = [];
    for (var i= 0, len=arr.length; i<len; i++) {
        var indexOccur = occur.indexOf(arr[i]);
        var indexUniq = uniq.indexOf(arr[i]);
        if (indexOccur == -1 && indexUniq ==-1) uniq.push(arr[i]);
        else if (indexOccur == -1 && indexUniq != -1) {
            uniq.splice(indexUniq,1);
            occur.push(arr[i]);
        }
    }
    return arr.indexOf(uniq.shift());
};
var firstUniqChar2 = function(s) {
    var arr = s.split('');
    var obj = {};
    for (var i= 0, len=arr.length; i<len; i++) {
        if (arr[i] in obj) obj[arr[i]]++;
        else obj[arr[i]]=1;
    }
    var minPos;
    for (var key in obj) {
        if (obj[key] == 1) {
            if (minPos === undefined) minPos = arr.indexOf(key);
            else if(arr.indexOf(key) < minPos) minPos = arr.indexOf(key);
        }
    }
    return minPos === undefined ? -1:minPos;
};
var firstUniqChar3 = function(s) {
    //Note: there are only 26 characters, so there is no need to use object to store
    //the count, which is unordered
    var count = [];
    for (var i=0; i<26; i++) count[i]=0;
    for (i= 0, len=s.length; i<len; i++) {
        count[(s.charCodeAt(i)-'a'.charCodeAt(0))]++;
    }
    for (i=0; i<len; i++) {
        if (count[(s.charCodeAt(i)-'a'.charCodeAt(0))] === 1) return i;
    }
    return -1
};

//leetcode 2
var l1 = new ListNode(2);
l1.next = new ListNode(4);
//l1.next.next = new ListNode(3);
var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
//Note: it's easy to forget that if the last carry is 1, it should be appended to the last of the list.
var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    while (l1 || l2) {
        if (l1 && l2) {
            var num = (l1.val + l2.val + carry)%10;
            carry = (l1.val + l2.val + carry)>9 ? 1:0;
            if (current) {
                current.next = new ListNode(num);
                current = current.next;
            } else {
                var head = new ListNode(num);
                var current = head;
            }
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1 && !l2) {
            num = (l1.val + carry) % 10;
            carry = (l1.val +carry) > 9 ? 1:0;
            current.next = new ListNode(num);
            current = current.next;
            l1 = l1.next;
        } else if (!l1 && l2) {
            num = (l2.val + carry) % 10;
            carry = (l2.val +carry) > 9 ? 1:0;
            current.next = new ListNode(num);
            current = current.next;
            l2 = l2.next;
        }
    }
    if (carry) {
        current.next = new ListNode(1);
    }
    return head;
};
var addTwoNumbers2 = function(l1, l2) {
    var carry =0;
    while(l1 || l2) {
        //Note that the property can be visited only when the node exist, so use l1.val = ... can cause error.
        l1 = l1 === null ? new ListNode(0): l1;
        l2 = l2 === null ? new ListNode(0): l2;
        var num = (l1.val + l2.val + carry)%10;
        carry = (l1.val + l2.val + carry )>9 ? 1:0;
        if (current) {
            current.next = new ListNode(num);
            current = current.next;
        } else {
            var head = new ListNode(num);
            var current = head;
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    if (carry) {
        current.next = new ListNode(1);
    }
    return head;
};

console.log(addTwoNumbers2(l1,l2));

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers3 = function(l1, l2) {
    let calc = function(v1, v2, carry) {
        let res = (v1 || 0) + (v2 || 0) + carry; // Note 1: handle val = null
        if (res > 9) {
            carry = 1;
            res -= 10;
        } else {
            carry = 0
        }
        return {res: res, carry: carry};
    };
    let add = function(node1, node2, carry, res) {
        if (!node1 && !node2) {
            if (carry) {
                res.next = new ListNode(1);
            }
            return;
        } else if (!node1 && node2 ) {
            let _tmp = calc(0, node2.val, carry); // Note 2: carry needs to be handled even when one node list ends. eg [1][9,2]
            carry = _tmp.carry;
            res.next = new ListNode(_tmp.res);
            add (null , node2.next, carry, res.next);
        } else if (node1 && !node2) {
            let _tmp = calc(0, node1.val, carry);
            carry = _tmp.carry;
            res.next = new ListNode(_tmp.res);
            add (node1.next, null, carry, res.next);
        } else {
            let _tmp = calc (node1.val, node2.val, carry);
            res.next = new ListNode(_tmp.res);
            carry = _tmp.carry;
            add(node1.next, node2.next, carry, res.next);
        }
    };
    let rootTmp = calc(l1.val, l2.val, 0);
    let res = new ListNode(rootTmp.res); // Note 3: ensure the value passed to the add function is an object instead of null

    add (l1.next, l2.next, rootTmp.carry, res);
    return res;
};
// Better answer
function addTwoNumbers4(l1, l2) {
    const before = new ListNode();
    let tail = before;
    let c = 0;

    while (l1 || l2 || c) {
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;
        const v = v1+v2+c;

        tail.next = new ListNode(v%10);
        tail = tail.next;
        c = v >= 10 ? 1 : 0;
        l1 = l1&&l1.next;
        l2 = l2&&l2.next;
    }

    return before.next;
}