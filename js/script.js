const eleContainer = document.querySelector('.container');
const eleSelect = document.querySelector('#icons-selector');

const eleHeader = document.querySelector('header')

let arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
]


let arrColors = []

let randomColor

for(let i = 0; i < 3; i++) {
    do {
        randomColor = Math.floor(Math.random()*16777215).toString(16);
    } while (arrColors.includes(randomColor))
    arrColors.push(randomColor)
}

arrIcons.forEach(element => {
    if(element.type == 'animal') {
        element.color = `#${arrColors[0]}`
    } else if(element.type == 'vegetables'){
        element.color = `#${arrColors[1]}`
    } else if (element.type == 'user') {
        element.color = `#${arrColors[2]}`
    }
})


const arrOptions = [
    'All',
    'Animal',
    'Vegetable',
    'User',
]

eleSelect.value = ''

for (let i = 0; i < arrOptions.length; i++) {
    const eleOption = document.createElement('option')
    eleOption.innerHTML = arrOptions[i]
    eleSelect.append(eleOption)
}


const arrAnimals = arrIcons.filter((icon) => {
    if(icon.type == 'animal') {
        return true;
    } else {
        return false;
    }
})


const arrVegetable = arrIcons.filter((icon) => {
    if(icon.type == 'vegetable') {
        return true;
    } else {
        return false;
    }
})

const arrUser = arrIcons.filter((icon) => {
    if(icon.type == 'user') {
        return true;
    } else {
        return false;
    }
})

const eleRow = document.createElement('div');
eleRow.classList.add('row')
eleContainer.append(eleRow)

arrIcons.forEach(element => {
    eleRow.classList.add('row-cols-xsm-1','row-cols-sm-2', 'row-cols-md-4', 'row-cols-lg-5', 'g-5')
    const eleCol = document.createElement('div');
    eleCol.classList.add('col');
    eleRow.append(eleCol);
    const iconContainer = document.createElement('div')
    iconContainer.classList.add('icon-container', 'd-flex', 'justify-content-center', 'flex-wrap', 'p-3', 'rounded-2')
    eleCol.append(iconContainer)
    const eleIcon = document.createElement('i')
    iconContainer.append(eleIcon)
    eleIcon.classList.add(`${element.family}`,`${element.prefix}${element.name}`, 'w-100', 'text-center', 'fs-1')
    eleIcon.classList.add()
    const eleName = document.createElement('div')
    eleName.classList.add('text-uppercase', 'fw-semibold','my-text')
    eleName.innerHTML = element.name
    eleName.style.fontFamily = ('Noto Sans JP')
    iconContainer.append(eleName)
    eleIcon.style.color = element.color
});



eleSelect.addEventListener('click', function(){
    

    if (eleSelect.value == arrOptions[0]) {

        eleRow.innerHTML = ''
        arrIcons.forEach(element => {
            eleRow.classList.add('row-cols-xsm-1','row-cols-sm-2', 'row-cols-md-4', 'row-cols-lg-5', 'g-5')
            const eleCol = document.createElement('div');
            eleCol.classList.add('col');
            eleRow.append(eleCol);
            const iconContainer = document.createElement('div')
            iconContainer.classList.add('icon-container', 'd-flex', 'justify-content-center', 'flex-wrap', 'p-3', 'rounded-2')
            eleCol.append(iconContainer)
            const eleIcon = document.createElement('i')
            iconContainer.append(eleIcon)
            eleIcon.classList.add(`${element.family}`,`${element.prefix}${element.name}`, 'w-100', 'text-center', 'fs-1')
            eleIcon.classList.add()
            const eleName = document.createElement('div')
            eleName.classList.add('text-uppercase', 'fw-semibold','my-text')
            eleName.innerHTML = element.name
            eleName.style.fontFamily = ('Noto Sans JP')
            iconContainer.append(eleName)
            eleIcon.style.color = element.color
        });
        

    } else if (eleSelect.value == arrOptions[1]) {

        eleRow.innerHTML = ''

        arrAnimals.forEach(element => {
            eleRow.classList.add('row-cols-xsm-1','row-cols-sm-2', 'row-cols-md-4', 'row-cols-lg-5', 'g-5')
            const eleCol = document.createElement('div');
            eleCol.classList.add('col');
            eleRow.append(eleCol);
            const iconContainer = document.createElement('div')
            iconContainer.classList.add('icon-container', 'd-flex', 'justify-content-center', 'flex-wrap', 'p-3', 'rounded-2')
            eleCol.append(iconContainer)
            const eleIcon = document.createElement('i')
            iconContainer.append(eleIcon)
            eleIcon.classList.add(`${element.family}`,`${element.prefix}${element.name}`, 'w-100', 'text-center', 'fs-1')
            eleIcon.classList.add()
            const eleName = document.createElement('div')
            eleName.classList.add('text-uppercase', 'fw-semibold','my-text')
            eleName.innerHTML = element.name
            eleName.style.fontFamily = ('Noto Sans JP')
            iconContainer.append(eleName)
            eleIcon.style.color = element.color
           
        });



    } else if (eleSelect.value == arrOptions[2]) {

        eleRow.innerHTML = ''

        arrVegetable.forEach(element => {
            eleRow.classList.add('row-cols-auto', 'row-cols-xsm-1','row-cols-sm-2', 'row-cols-md-4', 'g-5', 'justify-content-center')

            const eleCol = document.createElement('div');
            eleCol.classList.add('col');
            eleRow.append(eleCol);
            const iconContainer = document.createElement('div')
            iconContainer.classList.add('icon-container', 'd-flex', 'justify-content-center', 'flex-wrap', 'p-3', 'rounded-2')
            eleCol.append(iconContainer)
            const eleIcon = document.createElement('i')
            iconContainer.append(eleIcon)
            eleIcon.classList.add(`${element.family}`,`${element.prefix}${element.name}`, 'w-100', 'text-center', 'fs-1')
            eleIcon.classList.add()
            const eleName = document.createElement('div')
            eleName.classList.add('text-uppercase', 'fw-semibold','my-text')
            eleName.innerHTML = element.name
            eleName.style.fontFamily = ('Noto Sans JP')
            iconContainer.append(eleName)
            eleIcon.style.color = element.color
           
        });

    } else {

        eleRow.innerHTML = ''


        arrUser.forEach(element => {

            eleRow.classList.add('row-cols-auto', 'row-cols-xsm-1','row-cols-sm-2', 'row-cols-md-4', 'g-5', 'justify-content-center')
            

            const eleCol = document.createElement('div');
            eleCol.classList.add('col');
            eleRow.append(eleCol);
            const iconContainer = document.createElement('div')
            iconContainer.classList.add('icon-container', 'd-flex', 'justify-content-center', 'flex-wrap', 'p-3', 'rounded-2')
            eleCol.append(iconContainer)
            const eleIcon = document.createElement('i')
            iconContainer.append(eleIcon)
            eleIcon.classList.add(`${element.family}`,`${element.prefix}${element.name}`, 'w-100', 'text-center', 'fs-1')
            eleIcon.classList.add()
            const eleName = document.createElement('div')
            eleName.classList.add('text-uppercase', 'fw-semibold','my-text')
            eleName.innerHTML = element.name
            eleName.style.fontFamily = ('Noto Sans JP')
            iconContainer.append(eleName)
            eleIcon.style.color = element.color
        });

    }
})




    
