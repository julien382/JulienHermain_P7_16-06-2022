export const search = (inputValue) => {
  const lis = document.querySelectorAll(" div.elementTri__dropdown.elementTri__dropdown--active > ul li")
  
  if (inputValue.length >= 3){
      lis.forEach(li => {
        if (li.innerHTML.includes(inputValue)){
          li.style.display = 'block';
        }
        else {
          li.style.display = 'none';
        }
        
      })
  }
  else{
    lis.forEach(li => {
      li.style.display = 'block';
    })
  }
}