let enlist = document.getElementById('enList')



function addTodo() {
    let inpt = document.getElementById('inpt');
let inp = inpt.value.trim()
let ul = document.createElement('li')
    let label = document.createElement('label')
    let chbox = document.createElement('input')
    chbox.type = "checkbox"
    let txt = document.createTextNode(inp)

    if (inp==='')
    {
        return false
    }
    
    else{

    label.appendChild(txt)
    ul.appendChild(chbox)
    ul.appendChild(label)
    ul.setAttribute('class', 'ltText')


    setTimeout(() => {
        enlist.appendChild(ul)
        enlist.insertBefore(ul, enlist.childNodes[0])
    }, 2)

    inpt.value = ''
}

}

function removeTodo(){
          ul=enlist.children

          for(let index=0;index<ul.length;index++){
              while(ul[index] && ul[index].children[0].checked){
                  enlist.removeChild(ul[index])
              }
          }


}


