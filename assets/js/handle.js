// Thanh tim kiem
const $ = document.querySelector.bind(document);
const $$  = document.querySelectorAll.bind(document);

var categoryList = document.querySelector(".category_list")

var categoryListItem = categoryList.querySelectorAll(".category-item")
console.log(categoryListItem)

for(var i = 0 ; i < categoryListItem.length;i++){
    console.log(categoryListItem[i])
    categoryListItem[i].onclick = function(e){
        //console.log(e.target)
        var test= e.target.closest('.category-item')
        //var test1= e.target.closest('.category-item.category-item--active')
        console.log(test)
        console.log(test.dataset.index)
        ActiveItem(test.dataset.index);
        //console.log(test1)
        //if(test1)test1.classList.toggle("category-item--active")
        // test.classList.toggle("category-item--active")
    }
}

ActiveItem = function(index){
    var isActiveItem = $('.category-item--active');
    console.log("ads")
    console.log(isActiveItem)
    //console.log(isActiveItem.dataset)
      if (isActiveItem) {
        isActiveItem.classList.remove('category-item--active');
        if( index===isActiveItem.dataset.index){
            return;     
        }
      }
     
        const activeItem = $(`li[data-index="${index}"]`);
        activeItem.classList.add('category-item--active');   
     
     
    //console.log(activeItem)
}

notify = document.querySelector('.header__nav-item.header__nav-item--notify');
notify_form = document.querySelector('.header__nav-item--notify')
notify_form.onclick = function(e){
    notify.classList.toggle('active')
    e.stopPropagation();
}


//Hiên option

selectShop = document.querySelector('.header__search-select')
showShop = document.querySelector('.header__search-option')

selectShop.onclick = function(e) {
    showShop.classList.toggle("active")
    e.stopPropagation()
}

document.onclick = function(){
    //console.log(1)
    notify.classList.remove("active")
    showShop.classList.remove("active")
}
