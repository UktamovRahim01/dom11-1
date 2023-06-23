const empties = document.querySelectorAll('.empty')
let temp_id
let temp = []

let todos = [
    // {
    //     id: '1sdffdfwe2543241',
    //     title: 'buy milk',
    //     description: 'description will be here',
    //     status: `todo`,
    //     executors: [],
    //     deadline: `2023-07-01`
    // },
    // {
    //     id: '1sadasd2543241',
    //     title: 'chek h w',
    //     description: 'description will be here',
    //     status: `todo`,
    //     executors: [],
    //     deadline: `2023-07-01`
    // },
    // {
    //     id: '1sdasdasd241',
    //     title: 'todo h/t',
    //     description: 'description will be here',
    //     status: `doing`,
    //     executors: [`Rahim`, `Amir`],
    //     deadline: `2023-07-01`
    // }
]

let statuses = {
    todo: 0,
    issues: 1,
    doing: 2,
    done: 3
}

// **************************ondrag

drag()
function drag() {

    for (empty of empties) {

        empty.ondragover = (event) => {
            event.preventDefault()
        }
        empty.ondragenter = function (event) {
            event.preventDefault()
            this.className += ' hovered'
        }
        empty.ondragleave = function () {
            this.className = 'empty'
        }
        empty.ondrop = function () {
            this.className = 'empty'
            temp.forEach((item, index) => {
                console.log(item.id, temp_id);

                if (item.id == `${temp_id}`) {
                    // this.append(item)

                    for (let el of todos) {
                        if (el.id === temp_id) {
                            el.status = this.querySelector(`span`).innerHTML
                            reload(todos)
                        }
                    }
                }
            })
        }
    }
}
// **************************************



// ********************************* modal

// let emptiese = empties.querySelectorAll(`div`)

// for (let elm of emptiess) {

//     // console.log(elm);
//     // empty_bt.onclock = () => {
//     //     console.log(55);
//     // }
// }


let modal_btn = document.querySelector(`.create`)

modal_btn.onclick = () => {

    let modal = document.querySelector(`.modal`)
    let modal_bg = document.querySelector(`.modal_bg`)
    let inp_change = modal.querySelector(`.modal input`)
    let back = modal.querySelector(`.back`)
    let accept = modal.querySelector(`.accept`)
    let accepts = modal.querySelector(`.accepts`)
    let modal_inp = modal.querySelectorAll(`.modal input`)


    // inp_change.value = 

    modal.style.display = (`flex`)
    modal_bg.style.display = (`flex`)
    setTimeout(() => {
        modal.style.opacity = "1";
        modal_bg.style.opacity = "0.6";
    }, 500);
    back.onclick = () => {
        setTimeout(() => {
            modal.style.display = (`none`)
            modal_bg.style.display = (`none`)
        }, 1010);
        modal.style.opacity = "0";
        modal_bg.style.opacity = "0";
    }
    accept.onclick = () => {
        setTimeout(() => {
            modal.style.display = (`none`)
            modal_bg.style.display = (`none`)
        }, 1010);
        modal.style.opacity = "0";
        modal_bg.style.opacity = "0";




        let title = document.querySelector(`.title`)
        let status = document.querySelector(`.status`)
        let description = document.querySelector(`.description`)
        let executors = document.querySelector(`.executors`)
        let deadline = document.querySelector(`.deadline`)

        todos.push({
            id: Math.round((Math.random() * 100000)),
            title: title.value,
            description: description.value,
            status: status.value,
            executors: [executors.value],
            deadline: deadline.value
        });
        // console.log(todos);
        // let bnm = {}
        // bnm.id = Math.random()
        // bnm.title = title.value
        // bnm.status = status.value

        // todos.push(bnm)
        // item.task = accepts.value
        reload(todos)
        for (let it of modal_inp) {
            it.value = ``
        }
        // accepts.value = ``
    }
}


// +*++++++++++++++++++++++++****************

function reload(todos) {




    temp = []
    for (empty of empties) {
        let emptiess = empty.querySelectorAll('div')
        for (let iterator of emptiess) {
            // console.log(iterator);
            iterator.remove();
        }
    }


    for (let todo of todos) {

        let div = document.createElement('div')
        let title_emp = document.createElement('b')
        let description_emp = document.createElement('p')
        let executors_emp = document.createElement('span')
        let deadline_emp = document.createElement('span')

        let nam = document.createElement(`span`)
        let nan = document.createElement(`span`)
        let nas = document.createElement(`span`)
        nam.classList.add(`nam`)
        nan.classList.add(`nam`)
        nas.classList.add(`nam`)

        nam.innerHTML = `Задача:`
        nan.innerHTML = `Учасники:`
        nas.innerHTML = `Дедлайн:`

        let accept_btn = document.createElement(`button`)
        accept_btn.classList.add(`accept_btn`)
        accept_btn.innerHTML = `accept`

        executors_emp.classList.add(`executors_emp`)
        deadline_emp.classList.add(`deadline_emp`)



        div.setAttribute('id', todo.id)
        div.setAttribute('class', 'fill')
        div.setAttribute('draggable', true)
        console.log(todo);

        title_emp.innerHTML = todo.title
        description_emp.innerHTML = todo.description
        executors_emp.innerHTML = todo.executors
        deadline_emp.innerHTML = todo.deadline

        div.append(title_emp, nam, description_emp, nan, executors_emp, nas, deadline_emp, accept_btn)

        empties[statuses[todo.status]].append(div)

        temp.push(div)

        div.ondragstart = () => {
            temp_id = todo.id
            // console.log(temp_id ,  todo.id);
            div.classList.add('hold')
            setTimeout(() => (div.className = 'invisible'), 0)
        }
        div.ondragend = () => {
            div.className = 'fill'
        }

    }



    // *********************** modal изминения
    for (let emptie of empties) {
        let emptiee = emptie.querySelectorAll(`div button`)
        for (let empt of emptiee) {
            empt.onclick = () => {
                let mod = empt.parentElement
                console.log(mod);

                let ecp_el

                for (let el of todos) {
                    if (`${el.id}` === mod.id) {
                        ecp_el = el
                    }
                }


                let modal = document.querySelector(`.modal`)
                let modal_bg = document.querySelector(`.modal_bg`)
                let inp_change = modal.querySelector(`.modal input`)
                let back = modal.querySelector(`.back`)
                let accept = modal.querySelector(`.accept`)
                let accepts = modal.querySelector(`.accepts`)
                let modal_inp = modal.querySelectorAll(`.modal input`)


                // inp_change.value = 

                modal.style.display = (`flex`)
                modal_bg.style.display = (`flex`)

                let title = document.querySelector(`.title`)
                let status = document.querySelector(`.status`)
                let description = document.querySelector(`.description`)
                let executors = document.querySelector(`.executors`)
                let deadline = document.querySelector(`.deadline`)


                title.value = ecp_el.title
                description.value = ecp_el.description
                status.value = ecp_el.status
                executors.value = ecp_el.executors
                deadline.value = ecp_el.deadline



                setTimeout(() => {
                    modal.style.opacity = "1";
                    modal_bg.style.opacity = "0.6";
                }, 500);
                back.onclick = () => {
                    setTimeout(() => {
                        modal.style.display = (`none`)
                        modal_bg.style.display = (`none`)
                    }, 1010);
                    modal.style.opacity = "0";
                    modal_bg.style.opacity = "0";
                }
                accept.onclick = () => {
                    setTimeout(() => {
                        modal.style.display = (`none`)
                        modal_bg.style.display = (`none`)
                    }, 1010);
                    modal.style.opacity = "0";
                    modal_bg.style.opacity = "0";


                    ecp_el.id = Math.round((Math.random() * 100000)),
                        ecp_el.title = title.value,
                        ecp_el.description = description.value,
                        ecp_el.status = status.value,
                        ecp_el.executors = [executors.value],
                        ecp_el.deadline = deadline.value

                    reload(todos)
                    for (let it of modal_inp) {
                        it.value = ``
                    }
                }

            }
        }
    }
    // **********************************************
    // drag()
}

// ********************************************

