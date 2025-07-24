package ink.zako.maipouch

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform