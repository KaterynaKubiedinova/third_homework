function myFilter(func, thisArg) {
	const newArr = [];
	let arr = this;
	
	if (arguments.length > 1) {
		arr = thisArg;
	}
	
	for (let i = 0; i < arr.length; i++) {
		if ( func(arr[i], i, arr) ) {
			newArr.push(arr[i]);
		};
	}

	return newArr;
}

Array.prototype.myFilter = myFilter;

function createDebounceFunction(func, dely) {
	let timeout;

	return function() {
		clearTimeout(timeout);

		const fnCall = () => func.apply(this, arguments);

		timeout = setTimeout(fnCall, dely);
	};
}