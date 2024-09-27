function mergeSort(arr) {
    // Base case: if the array is of length 0 or 1, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Sort the left half
    const right = mergeSort(arr.slice(mid));    // Sort the right half

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0; // Pointer for left array
    let j = 0; // Pointer for right array

    // Merge elements from left and right arrays in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++; // Move pointer in left array
        } else {
            result.push(right[j]);
            j++; // Move pointer in right array
        }
    }

    // If there are remaining elements in left, add them to result
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // If there are remaining elements in right, add them to result
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result; // Return the merged sorted array
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = mergeSort(array);
console.log('Sorted Array:', sortedArray);