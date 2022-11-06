import Link from "next/link";

export default function () {
    return (
        <div style={{margin: "50px "}}>
            <h1>Произошла ошибка...</h1>
            <h2>Такой страницы не существует</h2>
            <Link href={'/'}><button>Вернуться на главную</button></Link>
        </div>

    )
}
