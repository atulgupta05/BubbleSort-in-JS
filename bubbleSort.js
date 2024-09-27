function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Loop through each element in the array
    for (let i = 0; i < n - 1; i++) {
        swapped = false; // Reset the swapped flag

        // Compare adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            // If the element found is greater than the next element, swap them
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true; // Set the swapped flag to true
            }
        }

        // If no elements were swapped in the inner loop, break
        if (!swapped) {
            break; // Array is sorted
        }
    }

    return arr; // Return the sorted array
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(array);
console.log('Sorted Array:', sortedArray);