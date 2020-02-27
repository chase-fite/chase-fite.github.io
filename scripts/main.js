// project display 1
const projectImage1 = document.querySelector('#project-image-1')
const prevImage1 = document.querySelector('#prev-image-1')
const nextImage1 = document.querySelector('#next-image-1')

const slides1 = ["./images/level-up-home-2.png", "./images/level-up-workouts-2.png", "./images/level-up-exercises-2.png", "./images/level-up-history-2.png", "./images/level-up-data-2.png"]

let index1 = 0

nextImage1.addEventListener('click', () => {
    if(index1 === 4) {index1 = 0}
    else {
        index1 += 1
    }
    projectImage1.src = slides1[index1]
})

prevImage1.addEventListener('click', () => {
    if(index1 === 0) {index1 = 4}
    else {
        index1 -= 1
    }
    projectImage1.src = slides1[index1]
})


// project display 2
const projectImage2 = document.querySelector('#project-image-2')
const prevImage2 = document.querySelector('#prev-image-2')
const nextImage2 = document.querySelector('#next-image-2')

const slides2 = ["./images/rn-articles-2.png", "./images/rn-friends-2.png", "./images/rn-messages-2.png", "./images/rn-tasks-2.png", "./images/rn-events-2.png"]

let index2 = 0

nextImage2.addEventListener('click', () => {
    if(index2 === 4) {index2 = 0}
    else {
        index2 += 1
    }
    projectImage2.src = slides2[index2]
})

prevImage2.addEventListener('click', () => {
    if(index2 === 0) {index2 = 4}
    else {
        index2 -= 1
    }
    projectImage2.src = slides2[index2]
})

// project display 3
const projectImage3 = document.querySelector('#project-image-3')
const prevImage3 = document.querySelector('#prev-image-3')
const nextImage3 = document.querySelector('#next-image-3')

const slides3 = ["./images/bzn-home.png", "./images/bzn-employees.png", "./images/bzn-departments.png", "./images/bzn-computers.png", "./images/bzn-training-programs.png"]

let index3 = 0

nextImage3.addEventListener('click', () => {
    if(index3 === 4) {index3 = 0}
    else {
        index3 += 1
    }
    projectImage3.src = slides3[index3]
})

prevImage3.addEventListener('click', () => {
    if(index3 === 0) {index3 = 4}
    else {
        index3 -= 1
    }
    projectImage3.src = slides3[index3]
})

