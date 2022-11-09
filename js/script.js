const eleContainer = document.querySelector('.container');
const eleSelect = document.querySelector('#icons-selector');
let randomColor = Math.floor(Math.random()*16777215).toString(16);



const arrIcons = [
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
];

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
    const eleCol = document.createElement('div');
    eleCol.classList.add('col');
    eleRow.append(eleCol);
    const iconContainer = document.createElement('div')
    eleCol.append(iconContainer)
    const eleIcon = document.createElement('i')
    iconContainer.append(eleIcon)
    eleIcon.classList.add(`${element.family}`)
    eleIcon.classList.add(`${element.prefix}${element.name}`)
    eleIcon.style.color = `${element.color}`
});



eleSelect.addEventListener('click', function(){
    

    if (eleSelect.value == 1) {

        eleRow.innerHTML = ''

        arrIcons.forEach(element => {
            const eleCol = document.createElement('div');
            eleCol.classList.add('col');
            eleRow.append(eleCol);
            const iconContainer = document.createElement('div')
            eleCol.append(iconContainer)
            const eleIcon = document.createElement('i')
            iconContainer.append(eleIcon)
            eleIcon.classList.add(`${element.family}`)
            eleIcon.classList.add(`${element.prefix}${element.name}`)
            eleIcon.style.color = `${element.color}`
           
        });
        

    } else if (eleSelect.value == 2) {

        eleRow.innerHTML = ''

        arrAnimals.forEach(element => {
            const eleCol = document.createElement('div');
            eleCol.classList.add('col');
            eleRow.append(eleCol);
            const iconContainer = document.createElement('div')
            eleCol.append(iconContainer)
            const eleIcon = document.createElement('i')
            iconContainer.append(eleIcon)
            eleIcon.classList.add(`${element.family}`)
            eleIcon.classList.add(`${element.prefix}${element.name}`)
            eleIcon.style.color = `${element.color}`
           
        });



    } else if (eleSelect.value == 3) {

        eleRow.innerHTML = ''

        arrVegetable.forEach(element => {

            const eleCol = document.createElement('div');
            eleCol.classList.add('col');
            eleRow.append(eleCol);
            const iconContainer = document.createElement('div')
            eleCol.append(iconContainer)
            const eleIcon = document.createElement('i')
            iconContainer.append(eleIcon)
            eleIcon.classList.add(`${element.family}`)
            eleIcon.classList.add(`${element.prefix}${element.name}`)
            eleIcon.style.color = `${element.color}`
           
        });

    } else {

        eleRow.innerHTML = ''


        arrUser.forEach(element => {

            

            const eleCol = document.createElement('div');
            eleCol.classList.add('col');
            eleRow.append(eleCol);
            const iconContainer = document.createElement('div')
            eleCol.append(iconContainer)
            const eleIcon = document.createElement('i')
            iconContainer.append(eleIcon)
            eleIcon.classList.add(`${element.family}`)
            eleIcon.classList.add(`${element.prefix}${element.name}`)
            eleIcon.style.color = `${element.color}`
        });

    }






})




    
