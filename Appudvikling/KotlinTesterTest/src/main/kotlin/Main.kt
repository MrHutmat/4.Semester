fun main() {
    test(10)
    println("Hello World!")
}


fun test(number: Int) {

    if (number % 10 == 0) {
        println("Divisible by 10")
    } else if (number == 5) {
        println("Divisible by 5")
    }
}


//println("Hello World!")