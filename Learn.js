$(document).ready(function(){

const cL=item=>console.log(item)

function urav () {
    let a,b,c;
    a = +prompt("Введите число");
    b = +prompt("Введите число");
    c = +prompt("Введите число");
    
    let d = Math.sqrt((b**2) - 4*a*c);

    let strA =  +a < 0 ? `-${Math.abs(a)}x²` : `${a}x²`;
    let strB =  +b < 0 ? `- ${Math.abs(b)}x` : `+ ${b}x`;
    let strC =  +c < 0 ? `- ${Math.abs(c)}` : `+ ${c}`;

    cL(`${strA} ${strB} ${strC} = 0`);

    if (d > 0) {
        let x1 = (-b - d) / (2 * a);
        let x2 = (-b + d) / (2 * a);
        cL(`D = ${Math.round(d)}`);
        cL(`x1 = ${x1.toFixed(1)}`);
        cL(`x2 = ${x2.toFixed(1)}`);
    }
    else if (d = 0){
        let x = -b / 2 * a ;
        cL(`D = ${Math.round(d) }`);
        cL(`x = ${x.toFixed(1)}`);
    } else {
        cL("Дискриминант меньше 0");
        cL("Нет корней");
    }
}

//---------------//

function tabFunc() {
    const clck = document.querySelectorAll(".table__button");
    const tabCont = document.querySelectorAll(".table__item")
    
    clck.forEach(item => {
        item.addEventListener("click", () => {
            let activeBtn = item;
            let tabId = activeBtn.getAttribute("data-tab");
            let currentCont = document.querySelector(tabId)
        
            clck.forEach(item => item.classList.remove("clicked"))
            tabCont.forEach(item => item.classList.remove("clicked"))
            activeBtn.classList.add("clicked");
            currentCont.classList.add("clicked");
        });
    });
}
tabFunc()

//---------------//

const palindrome = i => i == i.toLowerCase().split("").reverse().join("");

const FizzBuzz = n => {
    for(let i = 1;i <= n; i++) {
        if (i % 3 == 0) cL("Fizz")
        else if (i % 5 == 0) cL("Buzz")
        else if (i % 5 == 0 && i % 3 == 0) cL("FizzBuzz")
        else cL(i)
    }
}

const fib = b => b < 2 ? b: fib(b - 1) + fib(b - 2);

$(".open__alert").on("click", () => {
    $(".alert").show(500);
    $("body").css({"overflow":"hidden"})
});
$(".alert").on("click", () => {
    $(this).hide(500);
    $("body").css({"overflow":"visible"})
});
    
$("#inputt").keyup(() => {
    let val = $(this).val();
    $(".pinp")[0].innerHTML = `${val}`
});

$(".burbtn").click(() => {
    let burItem = $(".buritem");
    burItem.toggleClass("active");
    $("body").toggleClass("lock")

    if (burItem.hasClass("active")) {
        $(".close-bur").click(() => {
            burItem.removeClass("active");
            $("body").removeClass("lock")
        });
    }
});

$(".drop-cont").click(() => {
    if($(".drop-box").hasClass("onlyone")) {
        $(".drop-cont").not($(this)).removeClass("active");
        $(".drop-info").not($(this).next()).slideUp(300)
    }
    $(this).toggleClass("active").next().slideToggle(300);
});
$('.slider').slick({
    slidesToShow:1,
});


class Audi {
    constructor (
        taip, year, price,
        engine, color, horsePower,
    ) {
        this.year = year;
        this.taip = taip
        this.price = price;
        this.engine = engine;
        this.color = color;
        this.horsePower = horsePower;
    };
}
const Audi_A3 = new Audi(
    "hatchback", 2020, 33733, "1.4 TFSI", 
    ["red", "gray", "blue"], 150,
)


let proma = "strrr"
let amorp = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve(proma = "string");
    }, 2000);
})
amorp.then(param => {
    let res = param.split("").reverse().join("")
});

function hello() {
    console.log("hello", this)
}
let human = {
    name:"Vasya",
    age: 17,
    sayHello: function() {
        cL("name: "+ this.name)
        cL("age: "+ this.age)
    }
}
const lena = {
    name:"lena",
    age: 20
}
let helloo = human.sayHello.bind(lena)

function selectCar(mark){ 
    return (model, color) => {
        console.group(mark)
        cL(`You choose ${mark} ${model}`)
        cL(`And her color is ${color}`)
        console.groupEnd()
    }
}

cL(Audi_A3.__proto__)
});