function setup(){
    loadCriteria();
}

function loadCriteria(){
	var select = document.getElementById('filter_criteria_selector');
    let criteria = criteriaOptions.split(",")

    for (let i = 0; i < criteria.length; i++) {
        addToSelector(criteria[i],select)
    }
}

function addToSelector(add,selector){
     var opt = document.createElement('option');
     opt.value = add;
     opt.innerHTML = capitalizeWord(add);
     selector.appendChild(opt);
}

function capitalizeWord(word){
    const capitalized =
        word.charAt(0).toUpperCase()
        + word.slice(1);
}

//JAVASCRIPT THEN-CHAINING -- FUNCTIONS DONT GET TIME COORDINATED