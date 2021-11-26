//MODULE PATTERN AKA IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)


(function () {
    const { title } = require("process")
    var readline = require("readline")
    // create interface fo rinteraction with the user
    var rl = readline.createInterface(process.stdin, process.stdout)



    const library = []
    let book = {
        id: library.length,
        title: "",
        author: "",
        borrowed: false,
        time: ""

    }

    function startOver(notOption) {
        if (notOption !== "a" || notOption !== "b" || notOption !== "c" || notOption !== "x") {
            console.log(`"${notOption}" is not part of the options, Please choose an option. If you wish to exit press "x"`)

            rl.question(`******Please choose a valid option*****
  a) Rent a book 
  b) View all books       
  c) Search for a book
  Press "x" to exit
  ==> ` , firstQ)
        }
    }


    function firstQ(n) {

        if (n == "a") {
            rl.question(`What it the title of the book?
  ==>`, inputTitndAut)

        } else if (n == "b") {

            for (let b of library) {
                console.log(
                    `${b.id}: ${b.title} by ${b.author} and was lended on ${b.time}`
                )
            }
            // ask to go back to main menu
            rl.question(`press 'q' to go back
  ==> `, goback)

            //console.log(library)
        } else if (n == "c") {
            rl.question(`Please type in the title or author of the book you wish to return
  ==> `, returnBook
            )

        } else if (n == "x") {
            console.log("***Thanks for making use of this service***")
            rl.close()
        } else {
            startOver(n)
        }
    }

    rl.question(`**** WElcome to my Book Lending Service ***
  *** choose the book and you can keep them for as long as you need ******
  a) Rent a book
  b) View all books
  c) Return a book
  Press "x" to exit
  ==> ` , firstQ)


    function inputTitndAut(tit) {
        // input the title and author
        createT(tit)
        createA(tit)
    }


    function createT(tit) {
        if (tit !== "") {
            const title = tit.toLowerCase()
            return title

        }
    }
    function createA(tit) {
        if (tit !== "") {
            rl.question(`Written by: 
  ==> `, (aut) => {
                const author = aut.toLowerCase()
                const libro = Object.create(book)

                libro.id = library.length + 1
                libro.title = createT(tit)
                libro.author = author
                libro.borrowed = true
                libro.time = calcTime()


                library.push(libro)

                // ask if u wanna add another book
                newBookQuestion(aut)
            })

        }
    }


    function newBookQuestion(aut) {
        if (aut !== "") {
            rl.question(`Would you like to add another book ?
  press "y" for Yes and "n" for No
  ==> `, answer)
        }

    }

    function answer(a) {
        if (a == "y") {
            rl.question(`What it the title of the book ?
  ==> `, inputTitndAut)
        } else if (a == "n") {
            console.log("**back to main menu**")
            rl.question(`**** WElcome to my Book Lending Service ***
  *** choose the book and you can keep them for as long as you need******
  a) Rent a book
  b) View all books
  c) Return a book
  Press "x" to exit
  ==> ` , firstQ)
        } else {
            console.log(`****** Please choose a valid option *****)`)
            newBookQuestion()
        }
    }


    function calcTime() {

        let date_ob = new Date()
        let date = ("0" + date_ob.getDate()).slice(-2)
        let month = date_ob.getMonth() + 1
        let year = date_ob.getUTCFullYear()
        let hour = date_ob.getHours()
        let minutes = date_ob.getMinutes() + 1
        const dateTime = `${date}/${month}/${year} by ${hour}:${minutes}`
        return dateTime

    }


    function returnBook(name) {
        for (let libro of library) {
            if (libro.title == name || libro.author) {
                areyousure(libro)
            } else {
                console.log("**try again**")
                rl.question(`Please type in the title or author of the book you wish to return
  ==> `, returnBook
                )
            }
        }
    }


    function areyousure(libro) {
        rl.question(`Are you sure you want to return ${libro.title} ? 
  Type "y" if Yes and "n" if No
  ==> `, (ans) => {
            if (ans == "y") {
                const indexOfLibro = library.indexOf(libro)
                library.splice(indexOfLibro, 1)

                console.log(`${libro.title} has been removed from your rented books library on ${calcTime()}`)
                rl.question(`**** WElcome to my Book Lending Service ***
  *** choose the book and you can keep them for as long as you need ******
  a) Rent a book
  b) View all books
  c) Return a book
  Press "x" to exit
  ==> ` , firstQ)
                //go bck function
            } else if (ans = "n") {
                console.log("**back to main menu**")
                rl.question(`**** WElcome to my Book Lending Service ***
  *** choose the book and you can keep them for as long as you need ******
  a) Rent a book
  b) View all books
  c) Return a book
  Press "x" to exit
  ==> ` , firstQ)
            } else {
                console.log(`****** Please choose a valid option *****)`)
                areyousure(libro)
            }
        })
    }


    function goback(gob) {
        if (gob == "q") {
            console.log("**back to main menu**")
            rl.question(`**** WElcome to my Book Lending Service ***
  *** choose the book and you can keep them for as long as you need ******
  a) Rent a book
  b) View all books
  c) Return a book
  Press "x" to exit
  ==> ` , firstQ)
        } else {
            console.log(`****** Please choose a valid option *****)`)
            rl.question(`press 'q' to go back 
  ==> `, goback)
        }
    }
})()

