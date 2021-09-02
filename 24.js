// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.



function maxArea(height) {
    let [result, leftIndex, rightIndex] = [0, 0, height.length - 1];
    
    while (leftIndex < rightIndex) {
        // calculate the shortest side and the area
        let shortestSide = Math.min(height[leftIndex], height[rightIndex]);
        let area = (rightIndex - leftIndex) * shortestSide;

        console.log(area)
        
        // compare area and result to update the result 
        result = Math.max(area, result);

        // update the left or right index
        if (height[leftIndex] < height[rightIndex]) leftIndex++;
        else rightIndex--;
    }

    console.log(result)
    return result;
};

maxArea([1,8,6,2,5,4,8,3,7])