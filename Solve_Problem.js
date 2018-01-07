
// 1. Array.prototype.filter
const input = [
    {name: 'Ivan', strength: 90000, sex: 'm'},
    {name: 'Nazar', strength: 100000, sex: 'm'},
    {name: 'Alina', strength: 136, sex: 'f'}
];

// findFemale, isSuperhuman(strength >= 500)
// input.filter(isSuperhuman);
// _.filter(input, isSuperhuman); - _.  it's underscore  -> lodash ....

// -------------------- -------------------- //

function findFemale(arr) {
	return arr.filter(item => item.sex === 'f');
}

function findSuperhuman(arr){
	return arr.filter(item => item.strength >= 500);
}

console.log('result findFemale', findFemale(input));
console.log('result findSuperhuman', findSuperhuman(input));


// ------------------------------------------------------ //
// 2.
const input2 = [
    {name: 'Ivan', strength: 90000, sex: 'm'},
    {name: 'Nazar', strength: 100000, sex: 'm'},
    {name: 'Alina', strength: 136, sex: 'f'}
];
// --------------------  -------------------- //
function findFemale(arr) {
	return arr.find(item => item.sex === 'f');
}
console.log('result findFemale', findFemale(input2));

// ------------------------------------------------------ //
// 3. 
	var name = 'nazar kovtun';

	// join, split, charAt
 // --------------------  -------------------- //

  name
    .split(' ')
    .map(item => item.trim())
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");

// ------------------------------------------------------ //
    
// 4. Use only one line create array [1,2,3,4,5]
// helper join, split

// --------------------  -------------------- //
  new Array(5).join(',').split(",").map((value, i) => i + 1);
  
  new Array(1,2,3,4,5)
// [1,2,3,4,5]

// -------------------------------------------------- //
  
// -----------------  5. Array.prototype.slice  ----------------- //
var person  = {
    name: ' ?nazar-kovtun !',
    email: '  !  qwe@qwe.qwe !  '
};
var filters = {
    'deslugify': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase(),
    'replace-sumbol': x => x.replace(/\!/g, ''),
    'replace-sumbol2': x => x.replace(/\?/g, ''),
    'trim': x => x.trim()
};
var input = 'name | trim | deslugify | uppercase | replace-sumbol | replace-sumbol2'; // NAZAR KOVTUN
var inputEmail = 'email | trim | replace-sumbol';

// --------------------  -------------------- //
function transform(input, obj, filters) {
	var dataWithFIlters = input.split('|').map(item => item.trim());
	var valueNameToTransform = dataWithFIlters.slice(0, 1).pop();
	var valueTransform = obj[valueNameToTransform];
	var valueFilters = dataWithFIlters.slice(1);

	valueFilters.forEach(filterName => {
		if (!filters[filterName]) {
			throw new Error(`Filter name is not correct ${filterName}`);
		}

		valueTransform = filters[filterName](valueTransform);
	});

	return valueTransform;
}

console.log('before: ', person.name ,'result:', transform(input, person, filters));
console.log('before: ', person.email ,'result:', transform(inputEmail, person, filters));

// ------------------------------------------------------ //