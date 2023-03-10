fun main() {

    var cookie: String
    for (i in 1..10) {
        cookie = getFortuneCookie(getBirthday())
        println("\nYour fortune is: $cookie")
        if (cookie.contains("Take it easy")) break
    }


}


fun getBirthday(): Int {
    print("Enter your birthday: ")
    return readLine()?.toIntOrNull() ?: 1
}


fun getFortuneCookie(birthday: Int): String {
    val fortunes = listOf ("You will have a great day!",
        "Things will go well for you today.",
        "Enjoy a wonderful day of success.",
        "Be humble and all will turn out well.",
        "Today is a good day for exercising restraint.",
        "Take it easy and enjoy life!",
        "Treasure your friends because they are your greatest fortune.")

    val fortune = birthday % fortunes.count()

    return when (birthday) {
        28, 31 -> fortunes[2]
        in 1..7 -> fortunes[3]
        else -> fortunes[fortune]
    }
}

//var getTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH")).toInt()


// https://pl.kotl.in/MtDQmLr7p?theme=darcula