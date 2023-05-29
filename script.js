function threeSum(arr, target) {
// write your code here
  arr.sort((a, b) => a-b);
	let closetsum=Infinity;


	for(let i=0; i<arr.length-2; i++){
		let j=i+1;
		let k=arr.length-1;
		while(j<k){
			const sum=arr[i]+arr[j]+arr[k];

			if(sum===target){
				return sum; //return the sum
			}

			if(Math.abs(sum-target)<Math.abs(closetsum-target)){
				closetsum=sum;  //update the closetsum as sum
			}

			if(sum<target){
				i++;
			}
			else{
				j--;
			}
		}
	}
	return closetsum;
}

module.exports = threeSum;
