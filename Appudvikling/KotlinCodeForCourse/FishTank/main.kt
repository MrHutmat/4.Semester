import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.*



fun main() {
    println("Hello")
    println(if (LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH")).toInt() < 12) "Good morning, Kotlin" else "Good night, Kotlin")
    dayOfWeek()
    feedTheFish()
    val moreFish: Boolean = fitMoreFish(10.0, listOf(), 7, false)
    println(moreFish)

}

fun dayOfWeek() {
    println("What day is it today?")

    when (Calendar.getInstance().get(Calendar.DAY_OF_WEEK)) {
        1 -> println("Its Sunday!")
        2 -> println("Its Monday!")
        3 -> println("Its Tuesday!")
        4 -> println("Its Wednesday!")
        5 -> println("Its Thursday!")
        6 -> println("Its Friday!")
        7 -> println("Its Saturday!")
    }
}

fun feedTheFish() {
    val day = randomDay()
    val food = fishFood(day)
    println("Today is $day and the fish eats $food")
}


fun randomDay(): String {
    val week = listOf ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")
    return week[Random().nextInt(7)]
}

fun fishFood(day: String): String {
    return when (day) {
        "Monday" -> "blabla1"
        "Tuesday" -> "blabla2"
        "Wednesday" -> "blabla3"
//        "Thursday" -> "blabla4"
//        "Friday" -> "blabla5"
//        "Saturday" -> "blabla6"
//        "Sunday" -> "blabla7"
        else -> "øv"
    }
}


fun fitMoreFish(
    tankSize: Double,
    currentFish: List<Int>,
    fishSize: Int = 2,
    hasDecorations: Boolean = true,
): Boolean {

    val decorations: Double = if (hasDecorations) tankSize * 0.2 else 0.0
    return currentFish.sum().toDouble() + decorations + fishSize.toDouble() <= tankSize

}