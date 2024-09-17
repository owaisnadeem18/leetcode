class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int currSum = 0 ; 
        int max_sum = INT_MIN;
        for (int val: nums) {
            currSum+= val ;
            max_sum = max(currSum , max_sum);
            
            if (currSum < 0) {
                currSum = 0 ;
            }
            
        }
        return max_sum ;
    }
};